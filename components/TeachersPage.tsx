"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";

export default function TeachersPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-24 sm:pt-28">
      <section className="section">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="section-title">
              Наши <span className="text-gradient">преподаватели</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Профессиональные музыканты с опытом преподавания
            </p>
          </div>
        </AnimateOnScroll>

        {/* Teacher card */}
        <AnimateOnScroll animation="scale-in">
          <div className="max-w-2xl mx-auto">
            <div className="card text-center">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 rounded-full bg-surface mx-auto mb-6 flex items-center justify-center border-2" style={{ borderColor: "rgba(255,107,0,0.3)" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-2xl mb-1">Макс</h2>
              <p className="text-primary text-sm font-medium mb-4">Основатель и преподаватель</p>
              <p className="text-muted max-w-md mx-auto mb-8">
                Профессиональный барабанщик с многолетним опытом выступлений и преподавания.
                Обучает игре на барабанах детей и взрослых любого уровня подготовки.
                Индивидуальный подход к каждому ученику.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Рок", "Поп", "Джаз", "Метал", "Фанк", "Латино"].map((style) => (
                  <span key={style} className="px-3 py-1 rounded-full bg-surface border border-border text-xs text-muted">
                    {style}
                  </span>
                ))}
              </div>
              <CTAButton onClick={openBooking} pulse>
                Записаться к Максу
              </CTAButton>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Note */}
        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <p className="text-center text-sm text-muted mt-8">
            Фото преподавателя будет добавлено в ближайшее время
          </p>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
