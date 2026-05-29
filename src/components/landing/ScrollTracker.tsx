"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/pixel";

export function ScrollTracker() {
  const milestones = useRef(new Set([25, 50, 75, 90]));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      milestones.current.forEach((milestone) => {
        if (scrollPercent >= milestone) {
          trackScrollDepth(milestone);
          milestones.current.delete(milestone);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
