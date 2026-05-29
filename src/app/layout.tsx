import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Descubre si es para Ti, haciendo el quiz rápido",
  description:
    "Cansada de decirle a tu hijo \"esta vez no, no me alcanza\", y quedarte con esa sensación de impotencia?.",
  keywords: [
    "ingresos desde casa",
    "inteligencia artificial",
    "mujeres latinas",
    "trabajo desde casa",
    "Llave Digital",
    "Daniela Silva",
    "IA para ingresos",
    "negocios digitales",
  ],
  authors: [{ name: "Daniela Silva" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Solo cupo para 5 mujeres que quieran realmente invertir en sus habilidades",
    description:
      "Sácale el mayor provecho a la IA y conviertela en tu vendedora 24/7",
    type: "website",
  },
};

// JSON-LD Structured Data for SEO Rich Snippets
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Llave Digital 3.0",
  description:
    "Sistema de IA paso a paso para generar ingresos desde tu celular con La Franquicia IA. Acompañamiento personalizado de Daniela Silva.",
  brand: {
    "@type": "Brand",
    name: "Llave Digital",
  },
  image: "https://llave-digital-3-0.vercel.app/images/promo-activa.jpeg",
  offers: {
    "@type": "Offer",
    price: "97",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://go.hotmart.com/S105487769E?ap=27b1",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "900",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Necesito experiencia técnica o en IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Llave Digital está diseñado para personas sin experiencia. Te guiamos paso a paso desde cero. La IA hace el trabajo pesado, tú solo sigues el sistema.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo necesito dedicarle al día?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con 1-2 horas al día es suficiente. Muchas de nuestras alumnas son mamás que lo hacen mientras sus hijos duermen. No necesitas dedicarle 8 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona desde cualquier país?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Solo necesitas un celular con internet. Tenemos alumnas facturando desde Venezuela, Colombia, México, Argentina, Chile, Perú y muchos más países.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es una estafa o una pirámide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Es un sistema de afiliados legítimo. Vendes productos reales de valor y recibes comisiones por cada venta. No necesitas reclutar personas ni hacer pagos recurrentes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Y si no me funciona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tienes garantía de 7 días. Si no estás satisfecha, te devolvemos tu dinero sin preguntas. No tienes nada que perder y todo que ganar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto puedo ganar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las personas venden el producto a $97 y ganan el 50% de comisión por cada venta. Con solo 10 ventas al mes, ya son $485 mensuales. Algunas alumnas facturan mucho más. Los resultados varían según tu dedicación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacerlo todo desde mi celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, puedes ver las clases y aprender desde tu celular. Sin embargo, si quieres vender con publicidad paga, las configuraciones de la cuenta de Meta, el píxel y las campañas publicitarias se hacen desde una computadora.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        {/* FACEBOOK PIXEL */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1260230959614748');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1260230959614748&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* GOOGLE ANALYTICS 4 — ID: G-NKDQ3X6SCD */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NKDQ3X6SCD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NKDQ3X6SCD', {
                page_title: document.title,
                send_page_view: true
              });
            `,
          }}
        />

        {/* JSON-LD: Product Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />

        {/* JSON-LD: FAQ Schema for Google FAQ Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster
          theme="dark"
          position="bottom-left"
          toastOptions={{
            style: {
              background: "#1A1714",
              border: "1px solid rgba(201, 168, 76, 0.3)",
              color: "#E8E0D4",
            },
          }}
        />
      </body>
    </html>
  );
}
