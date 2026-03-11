export const SITE = {
  name: "По Барабану",
  tagline: "Школа барабанов",
  description: "Научим играть на барабанах с нуля",
  phone: "", // Макс предоставит
  address: "Караимская 21",
  parking: "Есть парковка",
  social: {
    instagram: "https://instagram.com/po_barananu_drumschool",
    telegram: "https://t.me/Maksz_1",
    vk: "", // Макс предоставит
  },
} as const;

export const PRICES = {
  trial: { amount: 500, label: "Пробный урок", duration: "30 мин" },
  individual: { amount: 1300, label: "Индивидуальное занятие", duration: "60 мин" },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/prices", label: "Цены" },
  { href: "/teachers", label: "Преподаватели" },
  { href: "/gallery", label: "Фото и видео" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;
