"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";
import Image from "next/image";

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

export function PricingSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            Una decisión que cambia todo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Imagen CTA con ventas en tiempo real */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 max-w-xs w-full">
              <Image
                src="/images/franquicia-ia-cta.jpeg"
                alt="Activa tu Franquicia IA - Solo $97 USD - Ventas en tiempo real"
                width={350}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border-2 border-gold/40 rounded-2xl p-6 md:p-8 pulse-glow relative overflow-hidden order-1 md:order-2"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
            <div className="text-center mb-6">
              <Badge className="bg-red-600 text-white text-xs font-bold mb-4 px-3 py-1">
                OFERTA POR TIEMPO LIMITADO
              </Badge>
              <div className="mt-3">
                <span className="text-muted-foreground line-through text-2xl">$297</span>
                <div className="text-gold font-bold text-6xl md:text-7xl font-serif mt-1">$97</div>
                <p className="text-muted-foreground text-sm mt-1">Pago único · Acceso de por vida</p>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="w-full bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-lg py-7 rounded-lg transition-all duration-300 hover:scale-[1.02]"
              onClick={() => {
                trackInitiateCheckout();
                window.open(HOTMART_LINK, "_blank");
              }}
            >
              <Zap className="w-5 h-5 mr-2" />
              Activar mi Llave Digital — $97
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Garantía de 7 días. Si no te convence, te devolvemos tu dinero.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
