"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";

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

        {/* Yandex Maps reviews widget */}
        <AnimateOnScroll animation="fade-in-up">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="card overflow-hidden p-0">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=34.100416,44.943357&z=17&oid=80576847241&mode=search"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: "inherit" }}
                allowFullScreen
                loading="lazy"
                title="Отзывы о школе По Барабану на Яндекс Картах"
              />
            </div>
            <div className="text-center mt-4">
              <a
                href="https://yandex.ru/maps/org/po_barabanu/80576847241/reviews/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover transition-colors text-sm font-medium"
              >
                Все отзывы на Яндекс Картах →
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center">
            <p className="text-muted text-sm mb-6">
              Оставьте свой отзыв на Яндекс Картах — он автоматически появится здесь
            </p>
            <CTAButton onClick={openBooking} pulse>
              Стать следующим учеником
            </CTAButton>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
