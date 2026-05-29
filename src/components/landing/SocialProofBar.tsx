"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socialProofs = [
  "+2,234 personas han activado su Llave Digital",
  "+873 madres están generando ingresos mientras cuidan a sus hijos",
  "+156 personas están viendo esta página ahora mismo",
  "Los franquiciados han facturado +$786,571 USD hasta hoy",
  "Alguien en Venezuela acaba de activar su Llave Digital hace 3 minutos",
  "Una mamá en Colombia activó su Llave Digital hace 7 minutos",
  "+1,412 mujeres ya facturan con IA desde su celular",
];

export function SocialProofBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % socialProofs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1A1714] border-b border-gold/10 py-2 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-xs md:text-sm text-foreground/80"
          >
            <span className="text-gold font-semibold">🔥</span> {socialProofs[current]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
