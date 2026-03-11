"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";
import { reachGoal } from "@/lib/metrica";

export default function SectionPrices() {
  const { openBooking } = useBooking();

  return (
    <section className="section" id="prices">
      <AnimateOnScroll animation="fade-in-up">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">
            Простые и честные <span className="text-gradient">цены</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Без скрытых платежей. Платите только за занятия
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <AnimateOnScroll animation="slide-in-left" delay={0}>
          <div
            className="card relative overflow-hidden"
            style={{ borderColor: "rgba(255,107,0,0.5)" }}
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-background text-xs font-bold rounded-bl-xl">
              Популярное
            </div>
            <div className="pt-4">
              <h3 className="font-display font-bold text-xl mb-1">
                Пробный урок
              </h3>
              <p className="text-sm text-muted mb-6">
                Познакомьтесь с барабанами и преподавателем
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-extrabold text-4xl text-primary">
                  500
                </span>
                <span className="text-muted">&#8381;</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Знакомство с инструментом",
                  "Базовые ритмы",
                  "Подбор программы обучения",
                  "Без обязательств",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-primary flex-shrink-0"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton
                onClick={() => {
                  reachGoal("booking_click", { source: "prices_trial" });
                  openBooking();
                }}
                pulse
                className="w-full"
              >
                Записаться
              </CTAButton>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-in-right" delay={100}>
          <div className="card">
            <h3 className="font-display font-bold text-xl mb-1">
              Индивидуальное занятие
            </h3>
            <p className="text-sm text-muted mb-6">
              Персональная программа под ваши цели
            </p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display font-extrabold text-4xl text-foreground">
                1 300
              </span>
              <span className="text-muted">&#8381; / час</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Индивидуальная программа",
                "Работа над техникой",
                "Разбор любимых песен",
                "Запись прогресса",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-primary flex-shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <CTAButton
              onClick={() => {
                reachGoal("booking_click", { source: "prices_individual" });
                openBooking();
              }}
              variant="secondary"
              className="w-full"
            >
              Записаться
            </CTAButton>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
