"use client";

import { CountdownBar } from "@/components/landing/CountdownBar";
import { SocialProofBar } from "@/components/landing/SocialProofBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainSection } from "@/components/landing/PainSection";
import { AgitationSection } from "@/components/landing/AgitationSection";
import { WhoIAmSection } from "@/components/landing/WhoIAmSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CalculatorSection } from "@/components/landing/CalculatorSection";
import { QueRecibirasSection } from "@/components/landing/QueRecibirasSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { RankingSection } from "@/components/landing/RankingSection";
import { QuizSection } from "@/components/landing/QuizSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { FAQSection } from "@/components/landing/FAQSection";
import { Promo3en1Section } from "@/components/landing/Promo3en1Section";
import { Reto21DiasSection } from "@/components/landing/Reto21DiasSection";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { SocialProofToast } from "@/components/landing/SocialProofToast";
import { ScrollTracker } from "@/components/landing/ScrollTracker";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0D0B]">
      <CountdownBar />
      <SocialProofBar />
      <main className="flex-1">
        {/* HOOK: Captar atención + CTA dual */}
        <HeroSection />

        {/* PROBLEM: Identificar el dolor */}
        <PainSection />

        {/* AGITATE: Crear urgencia emocional */}
        <AgitationSection />

        {/* TRUST: Autoridad de Daniela */}
        <WhoIAmSection />

        {/* SOLUTION: Mostrar el camino (PUENTE FALTANTE) */}
        <HowItWorksSection />

        {/* BENEFITS: Lo que obtienes */}
        <BenefitsSection />

        {/* DESIRE: Potencial interactivo */}
        <CalculatorSection />

        {/* RECEIVED: Visual de lo que recibes al pagar */}
        <QueRecibirasSection />

        {/* PRICING: Precio con imagen CTA real */}
        <PricingSection />

        {/* RISK REVERSAL: Garantía para tráfico frío */}
        <GuaranteeSection />

        {/* SOCIAL PROOF: Historias reales */}
        <TestimonialsSection />

        {/* NUMBERS: Prueba dura de resultados */}
        <RankingSection />

        {/* CAPTURE: Quiz cualificador + lead capture */}
        <QuizSection />

        {/* CLOSE: Último empujón con pricing card */}
        <FinalCTA />

        {/* OBJECTIONS: Manejar objeciones restantes */}
        <FAQSection />

        {/* UPSELL: Opciones adicionales (después de decisión principal) */}
        <Promo3en1Section />
        <Reto21DiasSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialProofToast />
      <ScrollTracker />
    </div>
  );
}
