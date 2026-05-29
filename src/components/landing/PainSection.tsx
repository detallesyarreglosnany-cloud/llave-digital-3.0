"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/lib/pixel";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=15e3";

const pains = [
  {
    icon: ShoppingCart,
    title: "La humillación silenciosa",
    text: "Cada vez que llegas a la caja a pagar y te toca sacar del carrito porque no te alcanza. Nadie lo nota, pero tú lo sientes en el pecho.",
  },
  {
    icon: Heart,
    title: "La mentira que te cuentas",
    text: 'Cada vez que dices "no necesito eso" cuando sí lo necesitas. Te convences de que está bien conformarte, pero tu corazón sabe la verdad.',
  },
  {
    icon: Moon,
    title: "Las noches sin dormir",
    text: "Cada noche que no duermes pensando cómo vas a comprarle algo a tu hijo. Esa angustia que te aprieta el pecho a las 3am no es vida, es supervivencia.",
  },
];

export function PainSection() {
  return (
    <section className="py-8 md:py-10 px-4 bg-[#0A0908]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-3 text-gold">
            ¿Vives o Sobrevives?
          </h2>
          <motion.p
            className="text-muted-foreground text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Si te identificas con alguna de estas situaciones, esto es para ti
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -60 : i === 2 ? 60 : 0, y: i === 1 ? 40 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 30px rgba(201,168,76,0.2)" }}
              className="bg-card border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-all duration-300 group"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <pain.icon className="w-6 h-6 text-gold" />
              </motion.div>
              <h3 className="text-gold font-bold text-lg mb-2">{pain.title}</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{pain.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
          className="text-center mt-6"
        >
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="btn-glow-border bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                trackInitiateCheckout();
                window.open(HOTMART_LINK, "_blank");
              }}
            >
              Quiero cambiar mi realidad
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
