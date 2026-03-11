"use client";

import { useState } from "react";
import { reachGoal } from "@/lib/metrica";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormFor = "self" | "child";

export default function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [forWhom, setForWhom] = useState<FormFor>("self");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Введите имя";
    if (!phone.trim()) errs.phone = "Введите телефон";
    else if (!/^[\d\s\-+()]{7,18}$/.test(phone.trim()))
      errs.phone = "Некорректный номер телефона";
    if (!age.trim()) errs.age = "Введите возраст";
    else {
      const ageNum = parseInt(age);
      if (isNaN(ageNum) || ageNum < 5 || ageNum > 99)
        errs.age = "Возраст от 5 до 99";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          age: parseInt(age),
          forWhom,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        reachGoal("form_submit", { forWhom, age: parseInt(age) });
      } else {
        setErrors({
          form: "Ошибка отправки. Попробуйте ещё раз или напишите в Telegram.",
        });
      }
    } catch {
      setErrors({ form: "Ошибка сети. Попробуйте ещё раз." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setName("");
    setPhone("");
    setAge("");
    setForWhom("self");
    setErrors({});
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-surface border border-border rounded-2xl p-6 sm:p-8 animate-scale-in shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Закрыть"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {success ? (
          /* Success screen */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-bounce-in">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">
              Спасибо за заявку!
            </h3>
            <p className="text-muted mb-6">
              Мы свяжемся с вами для выбора удобного времени
            </p>
            <button onClick={handleClose} className="btn-cta px-8 py-3">
              Отлично
            </button>
          </div>
        ) : (
          /* Form */
          <>
            <h3 className="font-display font-bold text-2xl mb-1">
              Записаться на пробный урок
            </h3>
            <p className="text-sm text-muted mb-6">
              Пробное занятие - 500 &#8381;
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-sm font-medium mb-1.5"
                >
                  Имя
                </label>
                <input
                  id="booking-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors outline-none"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="booking-phone"
                  className="block text-sm font-medium mb-1.5"
                >
                  Телефон
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors outline-none"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <label
                  htmlFor="booking-age"
                  className="block text-sm font-medium mb-1.5"
                >
                  Возраст ученика
                </label>
                <input
                  id="booking-age"
                  type="number"
                  min="5"
                  max="99"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Возраст"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors outline-none"
                />
                {errors.age && (
                  <p className="text-red-400 text-xs mt-1">{errors.age}</p>
                )}
              </div>

              {/* For whom */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Для кого
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setForWhom("self")}
                    className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                      forWhom === "self"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted hover:border-muted"
                    }`}
                  >
                    Для себя
                  </button>
                  <button
                    type="button"
                    onClick={() => setForWhom("child")}
                    className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                      forWhom === "child"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted hover:border-muted"
                    }`}
                  >
                    Для ребёнка
                  </button>
                </div>
              </div>

              {errors.form && (
                <p className="text-red-400 text-sm text-center">
                  {errors.form}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-cta w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
