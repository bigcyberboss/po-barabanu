import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const SUBMISSIONS_PATH = path.join(process.cwd(), "data", "submissions.json");

interface SubmitBody {
  name: string;
  phone: string;
  age: number;
  forWhom: "self" | "child";
}

export async function POST(request: Request) {
  try {
    const body: SubmitBody = await request.json();

    // Validation
    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Имя обязательно" }, { status: 400 });
    }
    if (!body.phone?.trim() || !/^[\d\s\-+()]{7,18}$/.test(body.phone.trim())) {
      return NextResponse.json({ error: "Некорректный телефон" }, { status: 400 });
    }
    if (!body.age || body.age < 5 || body.age > 99) {
      return NextResponse.json({ error: "Некорректный возраст" }, { status: 400 });
    }

    const forWhomText = body.forWhom === "child" ? "Для ребёнка" : "Для себя";

    const message = [
      "🥁 *Новая заявка на пробный урок!*",
      "",
      `👤 *Имя:* ${body.name.trim()}`,
      `📱 *Телефон:* ${body.phone.trim()}`,
      `🎂 *Возраст:* ${body.age} лет`,
      `📋 *Для кого:* ${forWhomText}`,
      "",
      `🕐 _${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}_`,
    ].join("\n");

    // Send to Telegram if configured
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const tgRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!tgRes.ok) {
        console.error("Telegram API error:", await tgRes.text());
      }
    } else {
      // Log to console if Telegram not configured
      console.log("New booking (Telegram not configured):", message);
    }

    // Save to submissions.json
    try {
      let submissions = [];
      try {
        const raw = await fs.readFile(SUBMISSIONS_PATH, "utf-8");
        submissions = JSON.parse(raw);
      } catch {
        submissions = [];
      }
      submissions.push({
        id: crypto.randomUUID(),
        name: body.name.trim(),
        phone: body.phone.trim(),
        age: body.age,
        forWhom: body.forWhom,
        status: "new",
        createdAt: new Date().toISOString(),
      });
      await fs.writeFile(SUBMISSIONS_PATH, JSON.stringify(submissions, null, 2), "utf-8");
    } catch (err) {
      console.error("Failed to save submission:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json({ error: "Внутренняя ошибка" }, { status: 500 });
  }
}
