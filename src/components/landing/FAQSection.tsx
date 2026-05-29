"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Necesito experiencia técnica o en IA?",
    a: "No. Llave Digital está diseñado para personas sin experiencia. Te guiamos paso a paso desde cero. La IA hace el trabajo pesado, tú solo sigues el sistema.",
  },
  {
    q: "¿Cuánto tiempo necesito dedicarle al día?",
    a: "Con 1-2 horas al día es suficiente. Muchas de nuestras alumnas son mamás que lo hacen mientras sus hijos duermen. No necesitas dedicarle 8 horas.",
  },
  {
    q: "¿Funciona desde cualquier país?",
    a: "Sí. Solo necesitas un celular con internet. Tenemos alumnas facturando desde Venezuela, Colombia, México, Argentina, Chile, Perú y muchos más países.",
  },
  {
    q: "¿Es una estafa o una pirámide?",
    a: "No. Es un sistema de afiliados legítimo. Vendes productos reales de valor y recibes comisiones por cada venta. No necesitas reclutar personas ni hacer pagos recurrentes.",
  },
  {
    q: "¿Y si no me funciona?",
    a: "Tienes garantía de 7 días. Si no estás satisfecha, te devolvemos tu dinero sin preguntas. No tienes nada que perder y todo que ganar.",
  },
  {
    q: "¿Cuánto puedo ganar?",
    a: "Las personas venden el producto a $97 y ganan el 50% de comisión por cada venta. Con solo 10 ventas al mes, ya son $485 mensuales. Algunas alumnas facturan mucho más. Los resultados varían según tu dedicación.",
  },
  {
    q: "¿Puedo hacerlo todo desde mi celular?",
    a: "Sí, puedes ver las clases y aprender desde tu celular. Sin embargo, si quieres vender con publicidad paga, las configuraciones de la cuenta de Meta, el píxel y las campañas publicitarias se hacen desde una computadora.",
  },
];

export function FAQSection() {
  return (
    <section className="py-8 md:py-10 px-4 bg-[#0A0908]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="bg-card border border-gold/15 rounded-xl px-5 data-[state=open]:border-gold/40 transition-colors"
                >
                  <AccordionTrigger className="text-foreground font-semibold text-sm md:text-base text-left hover:text-gold hover:no-underline transition-colors py-4 [&>svg]:text-gold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 text-sm leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
