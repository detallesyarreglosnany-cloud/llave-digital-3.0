"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Key, Zap } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=15e3";

const features = [
  "Acceso completo a La Franquicia IA",
  "Sistema de IA paso a paso en piloto automático",
  "Comunidad 3.0 exclusiva con Daniela",
  "Embudo de ventas que ya demostró que vende",
  "Formación en Ventas, Marketing e IA",
  "Acompañamiento real y soporte directo",
  "Garantía de 7 días sin riesgo",
];

export function FinalCTA() {
  return (
    <section className="py-8 md:py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ y: [0, -8, 0], rotateY: [0, 360] }}
              transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 6, repeat: Infinity, ease: "linear" } }}
              style={{ display: "inline-block" }}
            >
              <Key className="w-12 h-12 text-gold" />
            </motion.div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold gold-shimmer mb-4">
            Tu turno es ahora
          </h2>
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-3">
            No esperes el momento perfecto.{" "}
            <span className="text-gold font-semibold">El momento es ahora.</span>
          </p>
          <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-8">
            Mientras sigues pensando, alguien más ya está facturando. Mientras dudas, alguien más ya
            cambió su realidad. ¿Hasta cuándo vas a esperar?
          </p>

          {/* Pricing Card fused into Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.2 }}
            className="bg-card border-2 border-gold/40 rounded-2xl p-6 md:p-8 pulse-glow relative overflow-hidden max-w-md mx-auto"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
            <div className="text-center mb-6">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Badge className="bg-red-600 text-white text-xs font-bold mb-4 px-3 py-1">
                  OFERTA POR TIEMPO LIMITADO
                </Badge>
              </motion.div>
              <div className="mt-3">
                <span className="text-muted-foreground line-through text-2xl">$297</span>
                <motion.div
                  className="text-gold font-bold text-6xl md:text-7xl font-serif mt-1"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  $97
                </motion.div>
                <p className="text-muted-foreground text-sm mt-1">Pago único · Acceso de por vida</p>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-foreground/90 text-sm">{f}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                className="btn-glow-border w-full bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-lg py-7 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                onClick={() => {
                  trackInitiateCheckout();
                  window.open(HOTMART_LINK, "_blank");
                }}
              >
                <Zap className="w-5 h-5 mr-2" />
                Activar mi Llave Digital — $97
              </Button>
            </motion.div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Garantía de 7 días. Si no te convence, te devolvemos tu dinero.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
