"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.76a8.28 8.28 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.17z"/>
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/danieladigital3.0", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/1C4XAG88fD/", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/584221754245", label: "WhatsApp" },
  { icon: TikTokIcon, href: "https://tiktok.com/@danidigital3.0", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0908] border-t border-gold/10 py-8 px-4 mt-auto">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-gold font-serif font-bold text-lg">Llave Digital 3.0</p>
            <p className="text-muted-foreground text-xs mt-1">
              por Daniela Silva · Afiliada de La Franquicia IA
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors text-gold"
                aria-label={s.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {typeof s.icon === "function" && s.icon.prototype ? (
                  <s.icon className="w-5 h-5" />
                ) : (
                  <s.icon />
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 pt-4 border-t border-gold/5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground"
        >
          <p>© 2026 Llave Digital 3.0. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidad</a>
          </div>
        </motion.div>
        <p className="text-center text-[10px] text-muted-foreground/50 mt-4">
          Este sitio no está afiliado con Facebook, Instagram ni WhatsApp. Los resultados pueden variar. Esto no es una garantía de ingresos.
        </p>
      </div>
    </footer>
  );
}
