"use client";

import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";
import { reachGoal } from "@/lib/metrica";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{ background: "rgba(255,107,0,0.05)" }}
        />
        <svg
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] opacity-[0.06]"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle
            cx="400"
            cy="400"
            r="380"
            stroke="var(--primary)"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="400"
            r="300"
            stroke="var(--primary)"
            strokeWidth="0.8"
          />
          <circle
            cx="400"
            cy="400"
            r="220"
            stroke="var(--primary)"
            strokeWidth="0.6"
          />
          <circle
            cx="400"
            cy="400"
            r="140"
            stroke="var(--primary)"
            strokeWidth="0.4"
          />
          <circle
            cx="400"
            cy="400"
            r="60"
            stroke="var(--primary)"
            strokeWidth="0.3"
          />
          <line
            x1="400"
            y1="20"
            x2="400"
            y2="780"
            stroke="var(--primary)"
            strokeWidth="0.3"
          />
          <line
            x1="20"
            y1="400"
            x2="780"
            y2="400"
            stroke="var(--primary)"
            strokeWidth="0.3"
          />
          <line
            x1="120"
            y1="120"
            x2="680"
            y2="680"
            stroke="var(--primary)"
            strokeWidth="0.2"
          />
          <line
            x1="680"
            y1="120"
            x2="120"
            y2="680"
            stroke="var(--primary)"
            strokeWidth="0.2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted">
            Караимская 21 &bull; Есть парковка
          </span>
        </div>

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

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-muted animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-lg">500 &#8381;</span>
            <span>пробный урок</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-lg">
              1 300 &#8381;
            </span>
            <span>за час занятия</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <a
            href="https://t.me/Maksz_1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface hover:border-primary/50 hover:bg-primary/5 text-foreground transition-colors"
            onClick={() =>
              reachGoal("messenger_click", {
                messenger: "telegram",
                source: "hero",
              })
            }
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span className="text-sm font-medium">Написать в Telegram</span>
          </a>
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
