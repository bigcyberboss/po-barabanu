"use client";

import { useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";
import { reachGoal } from "@/lib/metrica";

const faq = [
  {
    q: "Нужен ли свой инструмент?",
    a: "Нет, всё оборудование есть в студии. Приходите налегке!",
  },
  {
    q: "Сколько длится пробный урок?",
    a: "Пробный урок длится 30 минут - достаточно, чтобы попробовать и понять, нравится ли вам.",
  },
  {
    q: "Можно ли перенести занятие?",
    a: "Да, предупредите за 24 часа и мы подберём другое время.",
  },
  {
    q: "С какого возраста берёте?",
    a: "С 8 лет. Для детей адаптируем программу под их возраст и интересы.",
  },
];

export default function PricesPage() {
  const { openBooking } = useBooking();

  useEffect(() => {
    reachGoal("prices_view");
  }, []);

  return (
    <div className="pt-24 sm:pt-28">
      <section className="section">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="section-title">
              <span className="text-gradient">Цены</span> на обучение
            </h1>
            <p className="section-subtitle mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
        </AnimateOnScroll>

        {/* Price cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <AnimateOnScroll animation="slide-in-left" className="h-full">
            <div
              className="card relative overflow-hidden h-full flex flex-col"
              style={{ borderColor: "rgba(255,107,0,0.5)" }}
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-background text-xs font-bold rounded-bl-xl">
                Начните здесь
              </div>
              <div className="pt-4 flex flex-col flex-1">
                <h2 className="font-display font-bold text-2xl mb-1">
                  Пробный урок
                </h2>
                <p className="text-sm text-muted mb-6">
                  Знакомство с инструментом и преподавателем
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display font-extrabold text-5xl text-primary">
                    500
                  </span>
                  <span className="text-muted text-lg">&#8381;</span>
                </div>
                <p className="text-xs text-muted mb-6">30 минут</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Знакомство с барабанами",
                    "Первые ритмы уже на уроке",
                    "Подбор программы обучения",
                    "Рекомендации по развитию",
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
                <div className="mt-auto">
                  <CTAButton
                    onClick={() => {
                      reachGoal("booking_click", { source: "prices_page_trial" });
                      openBooking();
                    }}
                    pulse
                    className="w-full"
                  >
                    Записаться на пробный
                  </CTAButton>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-in-right" delay={100} className="h-full">
            <div className="card h-full flex flex-col">
              <h2 className="font-display font-bold text-2xl mb-1">
                Индивидуальное занятие
              </h2>
              <p className="text-sm text-muted mb-6">
                Персональная программа под ваши цели
              </p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display font-extrabold text-5xl text-foreground">
                  1 300
                </span>
                <span className="text-muted text-lg">&#8381;</span>
              </div>
              <p className="text-xs text-muted mb-6">60 минут</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Индивидуальная программа",
                  "Работа над техникой и стилем",
                  "Разбор любимых песен",
                  "Запись и анализ прогресса",
                  "Гибкое расписание",
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
              <div className="mt-auto">
                <CTAButton
                  onClick={() => {
                    reachGoal("booking_click", {
                      source: "prices_page_individual",
                    });
                    openBooking();
                  }}
                  variant="secondary"
                  className="w-full"
                >
                  Записаться
                </CTAButton>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* FAQ */}
        <AnimateOnScroll animation="fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-center mb-8">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="card">
                  <h3 className="font-display font-semibold text-base mb-2">
                    {item.q}
                  </h3>
                  <p className="text-sm text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
