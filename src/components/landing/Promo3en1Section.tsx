"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";
import Image from "next/image";

const HOTMART_3EN1_LINK = "https://go.hotmart.com/S105487769E?ap=6efa";

export function Promo3en1Section() {
  return (
    <section className="py-8 md:py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center"
        >
          {/* Imagen grande */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }}
            className="mb-10"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden border-2 border-gold/30"
              whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(201,168,76,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/promo-3en1.jpeg"
                alt="Promoción 3 en 1 - Llave Digital 3.0"
                width={848}
                height={1264}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Botón */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="btn-glow-border btn-mega bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-xl md:text-2xl px-12 md:px-20 py-8 md:py-10 rounded-xl transition-all duration-300 hover:scale-110 min-w-[280px] md:min-w-[400px]"
                onClick={() => {
                  trackInitiateCheckout();
                  window.open(HOTMART_3EN1_LINK, "_blank");
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-block"
                >
                  <Zap className="w-5 h-5 mr-2" />
                </motion.span>
                Aprovechar 3 en 1
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
