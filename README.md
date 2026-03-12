# По Барабану — Школа барабанов

Сайт школы барабанов «По Барабану». Лендинг для записи на занятия, заявки уходят в Telegram.

Тёмная тема, чёрно-оранжевая палитра, адаптив под мобилки.

## Стек

Next.js 14 (App Router), TypeScript, Tailwind CSS 3.4, Sharp для картинок.
Шрифты — Outfit и Inter через Google Fonts.
Аналитика — Yandex Metrica. Заявки — Telegram Bot API.

## Что внутри

7 страниц: главная, цены, преподаватели, галерея, отзывы, контакты, админка.

Форма записи на пробное занятие отправляет данные через бота в Telegram.
Админка позволяет редактировать цены, преподавателей и отзывы (данные хранятся в JSON).
SEO настроен — sitemap, robots.txt, OpenGraph.

## Структура

app/ — страницы и API
components/ — React-компоненты (Header, Footer, Hero, BookingForm и т.д.)
data/ — JSON-данные (prices, teachers, reviews, site)
lib/ — константы и хелперы

## Запуск

```bash
npm install
cp .env.example .env.local
# заполнить .env.local
npm run dev
```

## Переменные окружения

В `.env.example` описаны все нужные переменные:

`TELEGRAM_BOT_TOKEN` — токен бота для заявок
`TELEGRAM_CHAT_ID` — ID чата (можно несколько через запятую)
`NEXT_PUBLIC_METRICA_ID` — счётчик Yandex Metrica
`ADMIN_PASSWORD` — пароль админки

## Деплой

```bash
npm run build
npm start
```

Для VPS — раскомментировать `output: "standalone"` в `next.config.mjs`:

```bash
npm run build
node .next/standalone/server.js
```

Процесс через PM2, Nginx как reverse proxy.
