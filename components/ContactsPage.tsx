"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CTAButton from "./CTAButton";
import { useBooking } from "./BookingProvider";
import { SITE } from "@/lib/constants";
import { reachGoal } from "@/lib/metrica";

export default function ContactsPage() {
  const { openBooking } = useBooking();

  return (
    <div className="pt-24 sm:pt-28">
      <section className="section">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="section-title">
              <span className="text-gradient">Контакты</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Приходите к нам или напишите в мессенджер
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimateOnScroll animation="slide-in-left">
            <div className="space-y-6">
              {/* Address */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,107,0,0.1)" }}
                  >
                    <svg
                      aria-hidden="true"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      Адрес
                    </h3>
                    <p className="text-muted">{SITE.address}</p>
                    <p className="text-sm text-muted mt-1">
                      Есть бесплатная парковка
                    </p>
                  </div>
                </div>
              </div>

              {/* Telegram */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,107,0,0.1)" }}
                  >
                    <svg
                      aria-hidden="true"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="var(--primary)"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      Telegram
                    </h3>
                    <a
                      href={SITE.social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover transition-colors"
                      onClick={() =>
                        reachGoal("messenger_click", {
                          messenger: "telegram",
                          source: "contacts",
                        })
                      }
                    >
                      @Maksz_1
                    </a>
                    <p className="text-sm text-muted mt-1">
                      Самый быстрый способ связаться
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,107,0,0.1)" }}
                  >
                    <svg
                      aria-hidden="true"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1.5"
                        fill="var(--primary)"
                        stroke="none"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      Instagram
                    </h3>
                    <a
                      href={SITE.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover transition-colors"
                      onClick={() =>
                        reachGoal("messenger_click", {
                          messenger: "instagram",
                          source: "contacts",
                        })
                      }
                    >
                      @po_barananu_drumschool
                    </a>
                    <p className="text-sm text-muted mt-1">
                      Видео и фото с уроков
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,107,0,0.1)" }}
                  >
                    <svg
                      aria-hidden="true"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      Режим работы
                    </h3>
                    <p className="text-muted">Пн - Вс: по записи</p>
                    <p className="text-sm text-muted mt-1">
                      Подстраиваемся под ваш график
                    </p>
                  </div>
                </div>
              </div>

              <CTAButton
                onClick={() => {
                  reachGoal("booking_click", { source: "contacts" });
                  openBooking();
                }}
                pulse
                className="w-full"
              >
                Записаться на пробный урок
              </CTAButton>
            </div>
          </AnimateOnScroll>

          {/* Yandex Map */}
          <AnimateOnScroll animation="slide-in-right" delay={100}>
            <div className="card h-full min-h-[400px] flex flex-col overflow-hidden p-0">
              <iframe
                src="https://yandex.ru/map-widget/v1/?pt=34.1000,44.9424&z=17&l=map&size=450,400"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px", borderRadius: "inherit" }}
                allowFullScreen
                loading="lazy"
                title="Караимская 21, Симферополь"
              />
              <div className="p-4 text-center" style={{ background: "var(--surface)" }}>
                <p className="font-display font-bold text-sm">Караимская 21</p>
                <p className="text-xs text-muted mt-1">
                  Бесплатная парковка рядом со входом
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
