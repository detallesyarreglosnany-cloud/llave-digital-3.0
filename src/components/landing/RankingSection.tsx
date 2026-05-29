"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function RankingSection() {
  return (
    <section className="py-8 md:py-10 px-4 bg-[#0A0908]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            Resultados que hablan
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-gold/20 w-full max-w-md mx-auto"
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/franquicia-ia-ranking.jpeg"
              alt="Ranking de Embajadores - La Franquicia IA - $786,571 USD facturados"
              width={400}
              height={500}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
