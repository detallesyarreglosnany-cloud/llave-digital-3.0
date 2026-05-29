"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Clock, RotateCcw } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=27b1";

const guarantees = [
  {
    icon: Clock,
    text: "7 días completos para explorar todo el sistema",
  },
  {
    icon: RotateCcw,
    text: "Reembolso total sin preguntas si no te convence",
  },
  {
    icon: CheckCircle2,
    text: "Sin riesgo, sin letras pequeñas, sin trampas",
  },
];

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#0A0908]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Escudo animado */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center"
          >
            <Shield className="w-10 h-10 text-green-500" />
          </motion.div>

          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gold text-center">
            Garantía de 7 días sin riesgo
          </h2>

          <p className="text-foreground/80 text-center text-sm md:text-base leading-relaxed max-w-lg">
            Si dentro de los primeros 7 días sientes que Llave Digital no es para ti,
            te devolvemos cada centavo. Sin preguntas. Sin complicaciones. Tú no tienes
            nada que perder, solo una nueva vida que ganar.
          </p>

          {/* Lista de garantías */}
          <div className="space-y-3 w-full max-w-sm">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <g.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground/90 text-sm">{g.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button
              size="lg"
              className="btn-glow-border bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-lg px-10 py-7 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                trackInitiateCheckout();
                window.open(HOTMART_LINK, "_blank");
              }}
            >
              <Shield className="w-5 h-5 mr-2" />
              Activar con Garantía de 7 Días — $97
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
