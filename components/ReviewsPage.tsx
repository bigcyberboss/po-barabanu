"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";

const YANDEX_REVIEWS_URL = "https://yandex.ru/maps/org/po_barabanu/80576847241/reviews/";

export default function ReviewsPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-24 sm:pt-28">
      <section className="section">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="section-title">
              <span className="text-gradient">Отзывы</span> учеников
            </h1>
            <p className="section-subtitle mx-auto">
              Что говорят наши ученики о занятиях
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in">
          <div className="max-w-2xl mx-auto">
            {/* Yandex reviews card */}
            <div className="card text-center p-8 sm:p-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="var(--primary)">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-2xl mb-3">
                Отзывы на Яндекс Картах
              </h2>
              <p className="text-muted mb-8 max-w-md mx-auto">
                Мы собираем отзывы на Яндекс Картах — там они всегда актуальные
                и проверенные. Нажмите, чтобы прочитать или оставить свой отзыв.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={YANDEX_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                >
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Читать отзывы
                </a>
                <a
                  href={YANDEX_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Оставить отзыв
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mt-12">
            <CTAButton onClick={openBooking} pulse>
              Стать следующим учеником
            </CTAButton>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
