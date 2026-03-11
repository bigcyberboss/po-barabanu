"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";

const placeholderReviews = [
  {
    name: "Анна",
    age: "28 лет",
    text: "Всегда мечтала играть на барабанах, но думала, что это сложно. Макс показал, что это доступно каждому! Уже после первого урока сыграла простой бит.",
    rating: 5,
  },
  {
    name: "Дмитрий",
    age: "35 лет",
    text: "Отличная школа! Удобное расположение, качественное оборудование. Занимаюсь уже 3 месяца - прогресс ощутимый.",
    rating: 5,
  },
  {
    name: "Мария",
    age: "Мама Тимура, 10 лет",
    text: "Сын в восторге! Каждый раз с нетерпением ждёт занятия. Макс отлично находит подход к детям.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "var(--primary)" : "none"}
          stroke={i < count ? "var(--primary)" : "var(--border)"}
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {placeholderReviews.map((review, i) => (
            <AnimateOnScroll key={review.name} animation="fade-in-up" delay={i * 100}>
              <div className="card h-full flex flex-col">
                <Stars count={review.rating} />
                <p className="text-sm text-muted mt-4 mb-6 flex-1 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-display font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted">{review.age}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center">
            <p className="text-muted text-sm mb-6">
              Реальные отзывы учеников будут добавлены в ближайшее время
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
