"use client";

import { motion } from "framer-motion";
import { Key, Bot, Wallet, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Key,
    step: "01",
    title: "Activa tu sistema en una tarde",
    text: "Configuras tu Franquicia IA paso a paso, sin ser experta, sin crear nada desde cero. Solo sigues las instrucciones y listo.",
    highlight: "Sin experiencia técnica",
  },
  {
    icon: Bot,
    step: "02",
    title: "La IA vende por ti 24/7",
    text: "Tu sistema trabaja mientras tú vives tu vida. La inteligencia artificial hace el trabajo pesado: atraer, convencer y cerrar ventas.",
    highlight: "En piloto automático",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Cobra comisiones directo",
    text: "Cada venta genera una comisión que va directo a tu cuenta. Sin inventario, sin jefes, sin horarios. Tú decides cuánto ganar.",
    highlight: "Hasta $48.50 por venta",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            Así funciona en 3 pasos
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Simple. Rápido. Sin complicaciones.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-20 left-[22%] right-[22%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2, type: "spring", bounce: 0.3 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/40 flex items-center justify-center group"
                    whileHover={{ scale: 1.1, borderColor: "rgba(201,168,76,0.8)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <s.icon className="w-9 h-9 text-gold" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-[#0F0D0B] font-bold text-sm flex items-center justify-center shadow-lg shadow-gold/20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.2, type: "spring", bounce: 0.5 }}
                  >
                    {s.step}
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-gold font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed max-w-xs mb-3">{s.text}</p>
                <motion.span
                  className="inline-block bg-gold/10 border border-gold/30 rounded-full px-3 py-1 text-gold text-xs font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
                >
                  {s.highlight}
                </motion.span>

                {/* Arrow down on mobile */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="md:hidden mt-4 text-gold/50"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowDown className="w-5 h-5" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
