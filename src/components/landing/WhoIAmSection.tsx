"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WhoIAmSection() {
  return (
    <section className="py-8 md:py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            ¿Quién soy y por qué deberías escucharme?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Photo of Daniela */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-2xl border-2 border-gold/50 glow-border overflow-hidden">
                <Image
                  src="/images/daniela-nueva.jpeg"
                  alt="Daniela Silva - Estratega Digital y Creadora de Llave Digital 3.0"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl -z-10 blur-md"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0F0D0B] to-transparent rounded-b-2xl" />
            </div>
          </motion.div>
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }}
            className="md:col-span-3 space-y-4"
          >
            {[
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                Me llamo Daniela Silva.{" "}
                <span className="text-gold font-semibold">Yo también estuve ahí: viviendo al día, contando cada moneda, sintiendo que fallaba aunque daba todo de mí.</span>
              </p>,
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                Un día descubrí la inteligencia artificial, y todo cambió. Por primera vez tenía algo que{" "}
                <span className="text-gold font-semibold">trabajaba para mí, no yo para ella</span>. Lo combiné con un sistema de ventas y empecé a generar ingresos reales desde mi celular.
              </p>,
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                Hoy soy afiliada de <span className="text-gold font-semibold">&quot;La Franquicia IA&quot; de Tata Salazar</span> y creo en esto porque lo viví: funciona.{" "}
                <span className="text-gold font-semibold">Llave Digital 3.0 es el camino que yo seguí</span>, simplificado para que tú no cometas los mismos errores.
              </p>,
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed font-semibold">
                Si sigues los pasos, los resultados llegan. Yo ya tomé la decisión. ¿Y tú?
              </p>,
            ].map((child, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              >
                {child}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
