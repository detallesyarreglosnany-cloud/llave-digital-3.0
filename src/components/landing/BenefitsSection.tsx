"use client";

import { motion } from "framer-motion";
import { Key, Brain, Users, Shield, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Sistema de IA listo",
    text: "No necesitas saber de tecnología. La IA hace el trabajo pesado por ti. Solo sigues los pasos.",
  },
  {
    icon: Smartphone,
    title: "Desde tu celular",
    text: "Sin computadora, sin oficina. Tu celular es tu herramienta de trabajo. Funciona desde cualquier lugar.",
  },
  {
    icon: Users,
    title: "Comunidad que te acompaña",
    text: "No estás sola. Cientos de mujeres como tú están en el mismo camino, apoyándose mutuamente.",
  },
  {
    icon: Key,
    title: "Sistema probado",
    text: "No es teoría. Es un sistema que ya funciona para miles de personas. Tú solo lo replicas.",
  },
  {
    icon: Shield,
    title: "Garantía de 7 días",
    text: "Si no te convence en 7 días, te devolvemos tu dinero. Cero riesgo para ti.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-8 md:py-10 px-4 bg-[#0A0908]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            Lo que obtienes
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Todo lo que necesitas para empezar a generar ingresos con IA
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-3">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.06, y: -5, boxShadow: "0 10px 30px rgba(201,168,76,0.15)" }}
              className="bg-card border border-gold/15 rounded-xl p-5 flex-1 hover:border-gold/40 transition-all duration-300 group"
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.4 }}
              >
                <b.icon className="w-5 h-5 text-gold" />
              </motion.div>
              <h3 className="text-gold font-bold text-base mb-1">{b.title}</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
