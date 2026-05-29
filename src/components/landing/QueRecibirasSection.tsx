"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=15e3";

export function QueRecibirasSection() {
  return (
    <section className="py-8 md:py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            ¿Qué recibirás al completar el pago?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-gold/20 w-full max-w-md mx-auto"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201,168,76,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/promo-activa.jpeg"
              alt="Activa tu Franquicia IA - Solo $97 USD - Todo lo que recibes"
              width={400}
              height={500}
              className="w-full h-auto object-contain"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="btn-glow-border bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-lg px-10 py-7 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                trackInitiateCheckout();
                window.open(HOTMART_LINK, "_blank");
              }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block"
              >
                <Zap className="w-5 h-5 mr-2" />
              </motion.span>
              Activar mi Llave Digital — $97
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
