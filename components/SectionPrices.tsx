"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";
import { reachGoal } from "@/lib/metrica";

interface PriceItem {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
}

export default function SectionPrices({ prices }: { prices: PriceItem[] }) {
  const { openBooking } = useBooking();
  const trial = prices.find((p) => p.id === "trial");
  const individual = prices.find((p) => p.id === "individual");

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
        {trial && (
          <AnimateOnScroll animation="slide-in-left" delay={0} className="h-full">
            <div
              className="card relative overflow-hidden h-full flex flex-col"
              style={{ borderColor: "rgba(255,107,0,0.5)" }}
            >
              {trial.popular && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-background text-xs font-bold rounded-bl-xl">
                  Популярное
                </div>
              )}
              <div className="pt-4 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl mb-1">
                  {trial.title}
                </h3>
                <p className="text-sm text-muted mb-6">
                  {trial.description}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display font-extrabold text-4xl text-primary">
                    {trial.price}
                  </span>
                  <span className="text-muted">&#8381;</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {trial.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <svg
                        aria-hidden="true"
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
            </div>
          </AnimateOnScroll>
        )}

        {individual && (
          <AnimateOnScroll animation="slide-in-right" delay={100} className="h-full">
            <div className="card h-full flex flex-col">
              <h3 className="font-display font-bold text-xl mb-1">
                {individual.title}
              </h3>
              <p className="text-sm text-muted mb-6">
                {individual.description}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-extrabold text-4xl text-foreground">
                  {individual.price.toLocaleString("ru-RU")}
                </span>
                <span className="text-muted">&#8381; / час</span>
              </div>
              <ul className="space-y-3 mb-8">
                {individual.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <svg
                      aria-hidden="true"
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
                    reachGoal("booking_click", { source: "prices_individual" });
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
        )}
      </div>
    </section>
  );
}
