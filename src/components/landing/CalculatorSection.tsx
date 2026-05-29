"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, DollarSign, Calendar } from "lucide-react";

const COMMISSION = 97;
const MIN_WAGE_MONTHLY = 350;
const MIN_WAGE_DAILY = MIN_WAGE_MONTHLY / 30;
const MIN_WAGE_WEEKLY = MIN_WAGE_MONTHLY / 4.33;
const MIN_WAGE_YEARLY = MIN_WAGE_MONTHLY * 12;

export function CalculatorSection() {
  const [sales, setSales] = useState(10);

  const monthly = sales * COMMISSION;
  const daily = monthly / 30;
  const weekly = monthly / 4.33;
  const yearly = monthly * 12;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <section className="py-8 md:py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            Calcula tu potencial de ingresos
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Con solo $97 por venta, mira lo que podrías generar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.2 }}
          className="bg-card border border-gold/20 rounded-2xl p-6 md:p-8 pulse-glow"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Calculator className="w-6 h-6 text-gold" />
            </motion.div>
            <h3 className="text-gold font-bold text-xl">Simulador de Ingresos</h3>
          </div>

          {/* Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-foreground/80 text-sm">Ventas por mes</span>
              <motion.span
                key={sales}
                initial={{ scale: 1.3, color: "#E8D48B" }}
                animate={{ scale: 1, color: "#C9A84C" }}
                className="text-gold font-bold text-2xl font-mono"
              >
                {sales}
              </motion.span>
            </div>
            <Slider
              value={[sales]}
              onValueChange={(v) => setSales(v[0])}
              min={1}
              max={50}
              step={1}
              className="w-full [&_[data-slot=slider-range]]:bg-gold [&_[data-slot=slider-track]]:bg-gold/20 [&_[data-slot=slider-thumb]]:border-gold [&_[data-slot=slider-thumb]]:bg-[#0F0D0B] [&_[data-slot=slider-thumb]]:w-6 [&_[data-slot=slider-thumb]]:h-6"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1</span>
              <span>25</span>
              <span>50</span>
            </div>
          </div>

          {/* Income grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {[
              { icon: DollarSign, label: "Diario", value: fmt(daily), size: "text-lg md:text-xl" },
              { icon: Calendar, label: "Semanal", value: fmt(weekly), size: "text-lg md:text-xl" },
              { icon: TrendingUp, label: "Mensual", value: fmt(monthly), size: "text-2xl md:text-3xl" },
              { icon: DollarSign, label: "Anual", value: fmt(yearly), size: "text-lg md:text-xl" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-[#0F0D0B] rounded-xl p-4 text-center border border-gold/10"
              >
                <item.icon className="w-5 h-5 text-gold mx-auto mb-1" />
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <motion.p
                  key={item.value}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className={`text-gold font-bold ${item.size} font-mono`}
                >
                  {item.value}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Comparison */}
          <div className="bg-[#0F0D0B] rounded-xl p-5 border border-gold/10">
            <p className="text-sm text-muted-foreground mb-3 text-center font-semibold">
              Salario mínimo vs. Tu potencial con Llave Digital
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Salario mínimo</p>
                <p className="text-foreground/50 font-bold text-xl line-through font-mono">
                  {fmt(MIN_WAGE_MONTHLY)}/mes
                </p>
                <div className="w-full bg-foreground/10 rounded-full h-2 mt-2">
                  <div
                    className="bg-foreground/30 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((MIN_WAGE_MONTHLY / monthly) * 100, 100)}%` }}
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-gold mb-1">Tu potencial</p>
                <p className="text-gold font-bold text-xl font-mono">{fmt(monthly)}/mes</p>
                <div className="w-full bg-gold/10 rounded-full h-2 mt-2">
                  <div
                    className="bg-gold h-2 rounded-full transition-all duration-500"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <motion.p
              className="text-center text-gold font-bold text-lg mt-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {Math.round(monthly / MIN_WAGE_MONTHLY)}x más que el salario mínimo
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
