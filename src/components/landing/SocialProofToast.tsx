"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";

const toastMessages = [
  "🔥 María de Caracas activó su Llave Digital hace 2 min",
  "🔥 Ana desde Bogotá se unió hace 5 min",
  "🔥 Luisa en Lima activó su Llave Digital hace 3 min",
  "🔥 Carmen desde Quito se unió hace 4 min",
  "🔥 Patricia de Caracas activó su Llave Digital hace 1 min",
  "🔥 Gabriela desde México se unió hace 6 min",
  "🔥 Rosa en Buenos Aires activó su Llave Digital hace 2 min",
  "🔥 Yolimar desde Valencia se unió hace 3 min",
];

export function SocialProofToast() {
  const [shown, setShown] = useState(false);

  const showToast = useCallback(() => {
    const msg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
    toast(msg, {
      duration: 5000,
      id: "social-proof",
      style: {
        fontSize: '1.05rem',
        padding: '14px 20px',
      },
    });
  }, []);

  useEffect(() => {
    if (shown) return;
    // Show first toast after 5 seconds
    const firstTimeout = setTimeout(() => {
      setShown(true);
      showToast();
    }, 5000);

    return () => clearTimeout(firstTimeout);
  }, [shown, showToast]);

  useEffect(() => {
    if (!shown) return;
    // Show subsequent toasts every 8-12 seconds
    const interval = setInterval(() => {
      showToast();
    }, 15000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, [shown, showToast]);

  return null;
}
