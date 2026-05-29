"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "llave_digital_countdown_end";
const HOURS_48 = 48 * 60 * 60 * 1000;

export function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [expired, setExpired] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const getEndTime = useCallback(() => {
    if (typeof window === "undefined") return Date.now() + HOURS_48;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const end = parseInt(stored, 10);
      if (end > Date.now()) return end;
    }
    const newEnd = Date.now() + HOURS_48;
    localStorage.setItem(STORAGE_KEY, newEnd.toString());
    return newEnd;
  }, []);

  useEffect(() => {
    const endTime = getEndTime();

    const tick = () => {
      const now = Date.now();
      const diff = endTime - now;
      if (diff <= 0) {
        setExpired(true);
        setTimeLeft(0);
        return;
      }
      setTimeLeft(diff);
    };

    // Use setTimeout to avoid synchronous setState in effect body
    const immediate = setTimeout(() => {
      tick();
      setHydrated(true);
    }, 0);

    const interval = setInterval(tick, 1000);
    return () => {
      clearTimeout(immediate);
      clearInterval(interval);
    };
  }, [getEndTime]);

  if (!hydrated) return null;

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 countdown-gradient py-2 px-4 text-center">
      {expired ? (
        <p className="text-white font-bold text-sm md:text-base">
          ⚡ OFERTA EXPIRADA - Precio actual: $297
        </p>
      ) : (
        <p className="text-white font-bold text-sm md:text-base">
          ⚡ OFERTA ESPECIAL{" "}
          <span className="line-through opacity-70">$297</span>{" "}
          <span className="text-yellow-200">Precio actual: $97</span> | Sube en:{" "}
          <span className="font-mono text-yellow-200">
            {pad(hours)}:{pad(minutes)}:{pad(seconds)}
          </span>
        </p>
      )}
    </div>
  );
}
