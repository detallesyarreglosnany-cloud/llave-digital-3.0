"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { trackLead, trackInitiateCheckout, trackQuizStart, trackQuizComplete, trackQuizQuestion, trackHotLead, captureUTMs } from "@/lib/pixel";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=27b1";

const countries = [
  { value: "", label: "Selecciona tu país" },
  { value: "VE", label: "🇻🇪 Venezuela" },
  { value: "CO", label: "🇨🇴 Colombia" },
  { value: "MX", label: "🇲🇽 México" },
  { value: "AR", label: "🇦🇷 Argentina" },
  { value: "CL", label: "🇨🇱 Chile" },
  { value: "PE", label: "🇵🇪 Perú" },
  { value: "EC", label: "🇪🇨 Ecuador" },
  { value: "BO", label: "🇧🇴 Bolivia" },
  { value: "DO", label: "🇩🇴 Rep. Dominicana" },
  { value: "PA", label: "🇵🇦 Panamá" },
  { value: "CR", label: "🇨🇷 Costa Rica" },
  { value: "GT", label: "🇬🇹 Guatemala" },
  { value: "HN", label: "🇭🇳 Honduras" },
  { value: "SV", label: "🇸🇻 El Salvador" },
  { value: "NI", label: "🇳🇮 Nicaragua" },
  { value: "PY", label: "🇵🇾 Paraguay" },
  { value: "UY", label: "🇺🇾 Uruguay" },
  { value: "ES", label: "🇪🇸 España" },
  { value: "US", label: "🇺🇸 Estados Unidos" },
  { value: "OT", label: "🌍 Otro" },
];

const questions = [
  {
    q: "¿Tienes un celular con internet?",
    options: ["Sí, tengo celular e internet", "Solo celular, internet limitado", "No tengo celular propio"],
    scores: [3, 2, 0],
  },
  {
    q: "¿Cuánto tiempo puedes dedicar al día?",
    options: ["1-2 horas", "3-4 horas", "5+ horas", "Menos de 1 hora"],
    scores: [2, 3, 3, 1],
  },
  {
    q: "¿Has intentado generar ingresos online antes?",
    options: ["Nunca he intentado", "Lo intenté pero no funcionó", "Sí, y tuve algunos resultados", "Sí, y tengo experiencia"],
    scores: [2, 2, 3, 3],
  },
  {
    q: "¿Qué es lo que más te motiva a buscar ingresos online?",
    options: [
      "Darle lo mejor a mis hijos",
      "No depender de nadie",
      "Tener libertad financiera",
      "Salir de deudas",
    ],
    scores: [3, 3, 3, 2],
  },
  {
    q: "¿Estás dispuesta a seguir un sistema paso a paso?",
    options: ["Sí, estoy lista", "Necesito pensarlo", "No estoy segura"],
    scores: [3, 1, 0],
  },
  {
    q: "¿Estás lista para invertir en ti y tomar acción hoy?",
    options: [
      "Sí, estoy lista para empezar YA",
      "Quiero hacerlo pero necesito más info",
      "No estoy segura, solo estoy mirando",
    ],
    scores: [3, 2, 0],
  },
];

export function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Track quiz start on first interaction
  useEffect(() => {
    if (quizStarted && step === 0 && answers.length === 0) {
      trackQuizStart();
    }
  }, [quizStarted, step, answers.length]);

  const handleAnswer = (scoreIdx: number) => {
    if (!quizStarted) setQuizStarted(true);

    const newAnswers = [...answers, questions[step].scores[scoreIdx]];
    setAnswers(newAnswers);

    // Track each question answered
    trackQuizQuestion(step + 1, questions[step].q);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
      const totalScore = newAnswers.reduce((a, b) => a + b, 0);
      trackQuizComplete(totalScore);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3;
  const isHotLead = totalScore >= maxScore * 0.7; // 70%+ = hot lead
  const isPositive = totalScore >= maxScore * 0.5; // 50%+ = positive
  const progressPct = ((step + (showResult ? 1 : 0)) / questions.length) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const utms = captureUTMs();

    // Track hot leads separately for retargeting
    if (isHotLead) {
      trackHotLead();
    }

    // Send lead to API (Google Sheets + Mailchimp)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          country,
          phone,
          score: totalScore,
          source: "quiz",
          isHotLead,
          ...utms,
        }),
      });
    } catch {
      // Silently fail - still proceed
    }

    // Store in localStorage as backup
    const leads = JSON.parse(localStorage.getItem("llave_digital_leads") || "[]");
    leads.push({
      name,
      email,
      country,
      phone,
      score: totalScore,
      isHotLead,
      date: new Date().toISOString(),
      ...utms,
    });
    localStorage.setItem("llave_digital_leads", JSON.stringify(leads));

    trackLead();
    setSubmitted(true);

    // Hot leads redirect faster
    const redirectDelay = isHotLead ? 800 : 1500;
    setTimeout(() => {
      trackInitiateCheckout();
      window.open(HOTMART_LINK, "_blank");
    }, redirectDelay);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
    setName("");
    setEmail("");
    setCountry("");
    setPhone("");
    setSubmitted(false);
    setQuizStarted(false);
  };

  return (
    <section id="quiz" className="py-8 md:py-10 px-4 bg-[#0A0908]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            ¿Es Llave Digital para ti?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Responde {questions.length} preguntas y descúbrelo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-gold/20 rounded-2xl p-6 md:p-8"
        >
          {!showResult ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Pregunta {step + 1} de {questions.length}</span>
                  <span>{Math.round(progressPct)}%</span>
                </div>
                <Progress
                  value={progressPct}
                  className="h-2 [&>div]:bg-gold bg-gold/10"
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-foreground font-bold text-lg md:text-xl mb-5">
                    {questions[step].q}
                  </h3>
                  <div className="space-y-3">
                    {questions[step].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        className="w-full text-left bg-[#0F0D0B] border border-gold/15 rounded-xl px-5 py-4 text-foreground/90 hover:border-gold/50 hover:bg-gold/5 transition-all duration-200 text-sm md:text-base"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-gold font-bold text-2xl mb-2">
                    {isHotLead
                      ? "¡Sí, Llave Digital es PARA TI!"
                      : isPositive
                        ? "¡Llave Digital es para ti!"
                        : "Llave Digital puede funcionarte"}
                  </h3>
                  <p className="text-foreground/80 text-sm mb-6">
                    {isHotLead
                      ? "Tienes todo lo necesario para empezar a generar ingresos con IA. Tu perfil indica que estás lista para resultados rápidos. Solo necesitas dar el primer paso."
                      : isPositive
                        ? "Tienes todo lo necesario para empezar a generar ingresos con IA. Solo necesitas dar el primer paso."
                        : "Aunque tu situación actual es retadora, Llave Digital está diseñado para adaptarse a diferentes realidades. Con compromiso, puedes lograrlo."}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Déjanos tus datos y te enviaremos más información personalizada
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto">
                    <Input
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#0F0D0B] border-gold/20 text-foreground placeholder:text-muted-foreground focus:border-gold"
                      required
                    />
                    <Input
                      placeholder="Tu email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#0F0D0B] border-gold/20 text-foreground placeholder:text-muted-foreground focus:border-gold"
                      required
                    />
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-[#0F0D0B] border border-gold/20 rounded-md px-3 py-2 text-foreground text-sm focus:border-gold focus:outline-none appearance-none cursor-pointer"
                    >
                      {countries.map((c) => (
                        <option key={c.value} value={c.value} className="bg-[#1A1714] text-foreground">
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <div className="relative">
                      <Input
                        placeholder="Tu WhatsApp (opcional - te acompañamos)"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-[#0F0D0B] border-gold/20 text-foreground placeholder:text-muted-foreground focus:border-gold pl-10"
                      />
                      <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                    </div>
                    <Button
                      type="submit"
                      className="btn-glow-border w-full bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold py-5 rounded-lg"
                    >
                      Quiero mi Llave Digital
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-3" />
                  <h3 className="text-gold font-bold text-xl mb-2">
                    {isHotLead ? "¡Excelente! Tu perfil es ideal" : "¡Perfecto!"}
                  </h3>
                  <p className="text-foreground/80 text-sm">
                    Te estamos redirigiendo para activar tu Llave Digital...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {showResult && !submitted && (
            <button
              onClick={resetQuiz}
              className="mt-4 text-xs text-muted-foreground hover:text-gold transition-colors mx-auto block"
            >
              Volver a hacer el quiz
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
