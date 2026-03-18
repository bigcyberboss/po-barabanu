"use client";

import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";
import { reachGoal } from "@/lib/metrica";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-drums.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Logo */}
        <img
          src="/images/logo-baraban.png"
          alt="По Барабану"
          className="w-48 sm:w-64 md:w-80 mb-8 animate-fade-in-up"
        />

        <h1
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Научим играть на <span className="text-gradient">барабанах</span>
          <br />с нуля
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          Для детей и взрослых. Индивидуальные занятия с профессиональным
          преподавателем.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <CTAButton
            onClick={() => {
              reachGoal("booking_click", { source: "hero" });
              openBooking();
            }}
            pulse
          >
            Записаться на пробный урок
          </CTAButton>
          <CTAButton href="/prices" variant="secondary">
            Узнать цену
          </CTAButton>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="2"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
