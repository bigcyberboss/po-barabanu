"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";

export default function GalleryPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-24 sm:pt-28">
      <section className="section">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="section-title">
              <span className="text-gradient">Фото и видео</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Как выглядит школа и как проходят уроки
            </p>
          </div>
        </AnimateOnScroll>

        {/* Photo grid placeholder */}
        <AnimateOnScroll animation="fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-surface border border-border flex items-center justify-center"
              >
                <div className="text-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" className="mx-auto mb-2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-xs text-muted">Фото скоро</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center">
            <p className="text-muted mb-6">
              Фото и видео школы будут добавлены в ближайшее время.
              <br />А пока - приходите на пробный урок и увидите всё своими глазами!
            </p>
            <CTAButton onClick={openBooking} pulse>
              Записаться на пробный урок
            </CTAButton>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
