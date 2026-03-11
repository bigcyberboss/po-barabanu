"use client";

import { useState, useEffect, useCallback } from "react";

type Tab = "submissions" | "prices" | "teachers" | "reviews" | "site";

interface PriceItem {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
}

interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
}

interface Submission {
  id: string;
  name: string;
  phone: string;
  age: number;
  forWhom: "self" | "child";
  status: "new" | "processed";
  createdAt: string;
}

interface SiteData {
  name: string;
  tagline: string;
  phone: string;
  address: string;
  parking: boolean;
  social: {
    instagram: string;
    telegram: string;
    vk: string;
  };
}

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [tab, setTab] = useState<Tab>("submissions");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  // Data states
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [prices, setPrices] = useState<PriceItem[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [site, setSite] = useState<SiteData | null>(null);

  const fetchData = useCallback(async (file: string) => {
    const res = await fetch(`/api/admin?file=${file}`, {
      headers: { Authorization: `Bearer ${password}` },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  }, [password]);

  const loadAll = useCallback(async () => {
    try {
      const [sub, p, t, r, s] = await Promise.all([
        fetchData("submissions.json"),
        fetchData("prices.json"),
        fetchData("teachers.json"),
        fetchData("reviews.json"),
        fetchData("site.json"),
      ]);
      setSubmissions(sub);
      setPrices(p);
      setTeachers(t);
      setReviews(r);
      setSite(s);
    } catch {
      setAuthError("Ошибка загрузки данных");
    }
  }, [fetchData]);

  const handleLogin = async () => {
    setAuthError("");
    try {
      const res = await fetch("/api/admin?file=site.json", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (res.ok) {
        setAuthed(true);
        loadAll();
      } else {
        setAuthError("Неверный пароль");
      }
    } catch {
      setAuthError("Ошибка подключения");
    }
  };

  const saveData = async (file: string, data: unknown) => {
    setSaving(true);
    setSaveMsg("");
    try {
      const res = await fetch("/api/admin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ file, data }),
      });
      if (res.ok) {
        setSaveMsg("Сохранено!");
        setTimeout(() => setSaveMsg(""), 2000);
      } else {
        setSaveMsg("Ошибка сохранения");
      }
    } catch {
      setSaveMsg("Ошибка сети");
    } finally {
      setSaving(false);
    }
  };

  // Login screen
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-sm card">
          <h1 className="font-display font-bold text-2xl mb-6 text-center">Админ-панель</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="admin-pw" className="block text-sm font-medium mb-1.5">Пароль</label>
              <input
                id="admin-pw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Введите пароль"
                className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors outline-none"
              />
            </div>
            {authError && <p className="text-red-400 text-sm text-center">{authError}</p>}
            <button onClick={handleLogin} className="btn-cta w-full">
              Войти
            </button>

          </div>
        </div>
      </div>
    );
  }

  const markProcessed = async (id: string) => {
    try {
      const res = await fetch("/api/admin", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, status: "processed" }),
      });
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status: "processed" } : s))
        );
      }
    } catch {
      console.error("Failed to mark as processed");
    }
  };

  const newCount = submissions.filter((s) => s.status === "new").length;

  const tabs: { key: Tab; label: string; badge?: number }[] = [
    { key: "submissions", label: "Заявки", badge: newCount },
    { key: "prices", label: "Цены" },
    { key: "teachers", label: "Преподаватели" },
    { key: "reviews", label: "Отзывы" },
    { key: "site", label: "Настройки" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8 gap-2">
          <h1 className="font-display font-bold text-xl sm:text-2xl">Админ-панель</h1>
          {saveMsg && (
            <span className={`text-sm ${saveMsg === "Сохранено!" ? "text-green-400" : "text-red-400"}`}>
              {saveMsg}
            </span>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-surface rounded-xl p-1 border border-border overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-shrink-0 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap ${
                tab === t.key
                  ? "bg-primary text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t.label}
              {t.badge ? (
                <span className="ml-1 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold bg-red-500 text-white">
                  {t.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === "submissions" && (
          <SubmissionsEditor submissions={submissions} onMarkProcessed={markProcessed} />
        )}
        {tab === "prices" && (
          <PricesEditor prices={prices} onChange={setPrices} onSave={() => saveData("prices.json", prices)} saving={saving} />
        )}
        {tab === "teachers" && (
          <TeachersEditor teachers={teachers} onChange={setTeachers} onSave={() => saveData("teachers.json", teachers)} saving={saving} />
        )}
        {tab === "reviews" && (
          <ReviewsEditor reviews={reviews} onChange={setReviews} onSave={() => saveData("reviews.json", reviews)} saving={saving} />
        )}
        {tab === "site" && site && (
          <SiteEditor site={site} onChange={setSite} onSave={() => saveData("site.json", site)} saving={saving} />
        )}
      </div>
    </div>
  );
}

/* ====== Sub-editors ====== */

const inputClass = "w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors outline-none";
const labelClass = "block text-xs font-medium text-muted mb-1";

function SaveButton({ onSave, saving }: { onSave: () => void; saving: boolean }) {
  return (
    <button onClick={onSave} disabled={saving} className="btn-cta px-8 py-2.5 text-sm disabled:opacity-50">
      {saving ? "Сохранение..." : "Сохранить"}
    </button>
  );
}

/* Prices Editor */
function PricesEditor({ prices, onChange, onSave, saving }: {
  prices: PriceItem[];
  onChange: (p: PriceItem[]) => void;
  onSave: () => void;
  saving: boolean;
}) {
  const update = (index: number, field: keyof PriceItem, value: unknown) => {
    const updated = [...prices];
    (updated[index] as any)[field] = value;
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      {prices.map((item, i) => (
        <div key={item.id} className="card space-y-4">
          <h3 className="font-display font-bold text-lg">{item.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Название</label>
              <input className={inputClass} value={item.title} onChange={(e) => update(i, "title", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Цена (₽)</label>
              <input className={inputClass} type="number" value={item.price} onChange={(e) => update(i, "price", Number(e.target.value))} />
            </div>
            <div>
              <label className={labelClass}>Длительность</label>
              <input className={inputClass} value={item.duration} onChange={(e) => update(i, "duration", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Описание</label>
              <input className={inputClass} value={item.description} onChange={(e) => update(i, "description", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Преимущества (по одному на строку)</label>
            <textarea
              className={inputClass + " min-h-[80px]"}
              value={item.features.join("\n")}
              onChange={(e) => update(i, "features", e.target.value.split("\n"))}
            />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={item.popular}
              onChange={(e) => update(i, "popular", e.target.checked)}
              className="w-4 h-4 accent-primary"
            />
            Популярное
          </label>
        </div>
      ))}
      <div className="flex justify-end">
        <SaveButton onSave={onSave} saving={saving} />
      </div>
    </div>
  );
}

/* Teachers Editor */
function TeachersEditor({ teachers, onChange, onSave, saving }: {
  teachers: Teacher[];
  onChange: (t: Teacher[]) => void;
  onSave: () => void;
  saving: boolean;
}) {
  const update = (index: number, field: keyof Teacher, value: string) => {
    const updated = [...teachers];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addTeacher = () => {
    onChange([...teachers, {
      id: `teacher-${Date.now()}`,
      name: "",
      role: "",
      bio: "",
      photo: "/images/teacher-placeholder.jpg",
    }]);
  };

  const removeTeacher = (index: number) => {
    onChange(teachers.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {teachers.map((t, i) => (
        <div key={t.id} className="card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg">{t.name || "Новый преподаватель"}</h3>
            {teachers.length > 1 && (
              <button onClick={() => removeTeacher(i)} className="text-red-400 text-sm hover:text-red-300">
                Удалить
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Имя</label>
              <input className={inputClass} value={t.name} onChange={(e) => update(i, "name", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Должность</label>
              <input className={inputClass} value={t.role} onChange={(e) => update(i, "role", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Биография</label>
            <textarea className={inputClass + " min-h-[80px]"} value={t.bio} onChange={(e) => update(i, "bio", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Путь к фото</label>
            <input className={inputClass} value={t.photo} onChange={(e) => update(i, "photo", e.target.value)} />
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <button onClick={addTeacher} className="btn-secondary px-6 py-2.5 text-sm">
          + Добавить преподавателя
        </button>
        <SaveButton onSave={onSave} saving={saving} />
      </div>
    </div>
  );
}

/* Reviews Editor */
function ReviewsEditor({ reviews, onChange, onSave, saving }: {
  reviews: Review[];
  onChange: (r: Review[]) => void;
  onSave: () => void;
  saving: boolean;
}) {
  const update = (index: number, field: keyof Review, value: unknown) => {
    const updated = [...reviews];
    (updated[index] as any)[field] = value;
    onChange(updated);
  };

  const addReview = () => {
    onChange([...reviews, {
      id: Date.now(),
      name: "",
      text: "",
      rating: 5,
      date: new Date().toISOString().split("T")[0],
    }]);
  };

  const removeReview = (index: number) => {
    onChange(reviews.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {reviews.map((r, i) => (
        <div key={r.id} className="card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg">{r.name || "Новый отзыв"}</h3>
            <button onClick={() => removeReview(i)} className="text-red-400 text-sm hover:text-red-300">
              Удалить
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Имя</label>
              <input className={inputClass} value={r.name} onChange={(e) => update(i, "name", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Рейтинг (1-5)</label>
              <input className={inputClass} type="number" min="1" max="5" value={r.rating} onChange={(e) => update(i, "rating", Number(e.target.value))} />
            </div>
            <div>
              <label className={labelClass}>Дата</label>
              <input className={inputClass} type="date" value={r.date} onChange={(e) => update(i, "date", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Текст отзыва</label>
            <textarea className={inputClass + " min-h-[80px]"} value={r.text} onChange={(e) => update(i, "text", e.target.value)} />
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <button onClick={addReview} className="btn-secondary px-6 py-2.5 text-sm">
          + Добавить отзыв
        </button>
        <SaveButton onSave={onSave} saving={saving} />
      </div>
    </div>
  );
}

/* Submissions Editor */
function SubmissionsEditor({ submissions, onMarkProcessed }: {
  submissions: Submission[];
  onMarkProcessed: (id: string) => void;
}) {
  const sorted = [...submissions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (sorted.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-muted">Заявок пока нет</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sorted.map((s) => (
        <div key={s.id} className={`card space-y-3 ${s.status === "new" ? "" : "opacity-60"}`}
          style={s.status === "new" ? { borderColor: "rgba(255,107,0,0.4)" } : undefined}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display font-bold text-base">{s.name}</span>
                <a href={`tel:${s.phone}`} className="text-sm text-primary hover:text-primary-hover transition-colors">{s.phone}</a>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-xs text-muted">
                <span>{s.age} лет</span>
                <span>{s.forWhom === "child" ? "Для ребёнка" : "Для себя"}</span>
                <span>{new Date(s.createdAt).toLocaleString("ru-RU", { timeZone: "Europe/Moscow", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
              </div>
            </div>
            {s.status === "new" ? (
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse flex-shrink-0 mt-1.5" />
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0 mt-1">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          {s.status === "new" && (
            <button
              onClick={() => onMarkProcessed(s.id)}
              className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-medium bg-primary text-background hover:bg-primary-hover transition-colors"
            >
              Обработано
            </button>
          )}
          {s.status !== "new" && (
            <span className="text-xs text-green-400 font-medium">Обработана</span>
          )}
        </div>
      ))}
    </div>
  );
}

/* Site Settings Editor */
function SiteEditor({ site, onChange, onSave, saving }: {
  site: SiteData;
  onChange: (s: SiteData) => void;
  onSave: () => void;
  saving: boolean;
}) {
  const updateField = (field: keyof SiteData, value: unknown) => {
    onChange({ ...site, [field]: value });
  };

  const updateSocial = (field: keyof SiteData["social"], value: string) => {
    onChange({ ...site, social: { ...site.social, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <div className="card space-y-4">
        <h3 className="font-display font-bold text-lg">Основные настройки</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Название</label>
            <input className={inputClass} value={site.name} onChange={(e) => updateField("name", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Слоган</label>
            <input className={inputClass} value={site.tagline} onChange={(e) => updateField("tagline", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Телефон</label>
            <input className={inputClass} value={site.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+7 (XXX) XXX-XX-XX" />
          </div>
          <div>
            <label className={labelClass}>Адрес</label>
            <input className={inputClass} value={site.address} onChange={(e) => updateField("address", e.target.value)} />
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={site.parking}
            onChange={(e) => updateField("parking", e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          Есть парковка
        </label>
      </div>

      <div className="card space-y-4">
        <h3 className="font-display font-bold text-lg">Соцсети</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className={labelClass}>Telegram</label>
            <input className={inputClass} value={site.social.telegram} onChange={(e) => updateSocial("telegram", e.target.value)} placeholder="https://t.me/username" />
          </div>
          <div>
            <label className={labelClass}>Instagram</label>
            <input className={inputClass} value={site.social.instagram} onChange={(e) => updateSocial("instagram", e.target.value)} placeholder="https://instagram.com/username" />
          </div>
          <div>
            <label className={labelClass}>VK</label>
            <input className={inputClass} value={site.social.vk} onChange={(e) => updateSocial("vk", e.target.value)} placeholder="https://vk.com/username" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SaveButton onSave={onSave} saving={saving} />
      </div>
    </div>
  );
}
