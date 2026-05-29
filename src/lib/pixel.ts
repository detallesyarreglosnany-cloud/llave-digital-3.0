// ===== Facebook Pixel Tracking =====
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).fbq) {
    (window as unknown as { fbq: (cmd: string, event: string, p?: Record<string, unknown>) => void }).fbq("track", eventName, params);
  }
}

export function trackCustomEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).fbq) {
    (window as unknown as { fbq: (cmd: string, event: string, p?: Record<string, unknown>) => void }).fbq("trackCustom", eventName, params);
  }
}

export function trackInitiateCheckout() {
  trackEvent("InitiateCheckout", { value: 97, currency: "USD" });
}

export function trackLead() {
  trackEvent("Lead");
}

export function trackPageView() {
  trackEvent("PageView");
}

export function trackViewContent(contentName: string) {
  trackEvent("ViewContent", { content_name: contentName });
}

export function trackAddToCart() {
  trackEvent("AddToCart", { value: 97, currency: "USD" });
}

// ===== Custom Events for Funnel Tracking =====
export function trackScrollDepth(depth: number) {
  trackCustomEvent("ScrollDepth", { percent: depth });
}

export function trackSectionView(sectionName: string) {
  trackCustomEvent("SectionView", { section: sectionName });
}

export function trackQuizStart() {
  trackCustomEvent("QuizStart");
}

export function trackQuizComplete(score: number) {
  trackCustomEvent("QuizComplete", { score });
}

export function trackQuizQuestion(step: number, question: string) {
  trackCustomEvent("QuizQuestionAnswered", { step, question });
}

export function trackHotLead() {
  trackCustomEvent("HotLead");
}

// ===== UTM Parameter Capture =====
export function captureUTMs(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const utms: Record<string, string> = {};
  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      utms[key] = value;
      localStorage.setItem(`ld_${key}`, value);
    } else {
      const stored = localStorage.getItem(`ld_${key}`);
      if (stored) utms[key] = stored;
    }
  });
  return utms;
}

// Initialize UTMs on first load
if (typeof window !== "undefined") {
  captureUTMs();
}
