"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Key, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackViewContent } from "@/lib/pixel";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=27b1";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; size: number; speedY: number; speedX: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedY: -(Math.random() * 0.5 + 0.1),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 pt-6 pb-2 md:pt-8 md:pb-4">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0D0B] via-transparent to-[#0F0D0B]" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        >
          <div className="flex items-center justify-center mb-3">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ display: "inline-block" }}
            >
              <Key className="w-12 h-12 md:w-16 md:h-16 text-gold" />
            </motion.div>
          </div>
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-3 gold-shimmer leading-tight"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            LLAVE DIGITAL 3.0
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, type: "spring" }}
        >
          <p className="text-base md:text-lg lg:text-xl text-foreground/90 max-w-3xl mx-auto mb-4 leading-relaxed">
            Para TI que siempre te reinventas, resuelves, aguantas.{" "}
            <span className="text-gold font-semibold">
              Ahora tienes una Llave poderosa que te abrirá las puertas a la prosperidad: La Inteligencia Artificial!
            </span>{" "}
            Y con este sistema listo para aplicar, donde no tienes que crear nada desde cero, ni probar.{" "}
            <span className="text-gold font-semibold">+Mi acompañamiento y asesoria personalizada.</span>{" "}
            Ya más de 900 mamás empezaron sin saber nada y hoy facturan hasta +120$ al DIA.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, type: "spring", bounce: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button
              size="lg"
              className="btn-glow-border bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-base md:text-lg px-8 py-6 rounded-lg transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Descubre AQUI si esto es para ti
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-[#0F0D0B] font-bold text-base md:text-lg px-8 py-6 rounded-lg transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                trackViewContent("hero-cta");
                window.open(HOTMART_LINK, "_blank");
              }}
            >
              <Key className="w-5 h-5 mr-2" />
              Quiero ACTIVAR YA MISMO!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
