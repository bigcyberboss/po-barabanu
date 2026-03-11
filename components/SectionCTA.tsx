"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";
import { reachGoal } from "@/lib/metrica";

export default function SectionCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="section">
      <AnimateOnScroll animation="scale-in">
        <div
          className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 lg:p-16 text-center"
          style={{
            borderColor: "rgba(255,107,0,0.2)",
            background:
              "linear-gradient(135deg, rgba(255,107,0,0.08), var(--surface), rgba(255,69,0,0.04))",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: "rgba(255,107,0,0.1)" }}
          />
          <div className="relative">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Готовы начать?
            </h2>
            <p className="text-lg sm:text-xl text-muted max-w-lg mx-auto mb-8">
              Запишитесь на пробный урок за 500 &#8381; и почувствуйте ритм
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton
                onClick={() => {
                  reachGoal("booking_click", { source: "cta_section" });
                  openBooking();
                }}
                pulse
              >
                Записаться на пробный урок
              </CTAButton>
              <a
                href="https://t.me/Maksz_1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                onClick={() =>
                  reachGoal("messenger_click", {
                    messenger: "telegram",
                    source: "cta_section",
                  })
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
