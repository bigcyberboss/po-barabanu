/* Yandex Metrica helpers */

// Counter ID — задаётся через env или напрямую
export const METRICA_ID = process.env.NEXT_PUBLIC_METRICA_ID || "";

// Типы событий аналитики
export type MetricaEvent =
  | "form_submit"
  | "phone_click"
  | "messenger_click"
  | "booking_click"
  | "prices_view";

// Безопасный доступ к ym — может быть не загружен
function getYm(): ((id: number, method: string, ...args: unknown[]) => void) | null {
  if (typeof window !== "undefined" && typeof (window as any).ym === "function") {
    return (window as any).ym;
  }
  return null;
}

/** Отправить цель (goal) в Яндекс Метрику */
export function reachGoal(goal: MetricaEvent, params?: Record<string, unknown>) {
  const ym = getYm();
  const id = Number(METRICA_ID);
  if (!ym || !id) return;
  ym(id, "reachGoal", goal, params);
}

/** Отправить хит (pageview) вручную — для SPA-переходов */
export function hit(url: string) {
  const ym = getYm();
  const id = Number(METRICA_ID);
  if (!ym || !id) return;
  ym(id, "hit", url);
}

/** Передать параметры визита */
export function params(data: Record<string, unknown>) {
  const ym = getYm();
  const id = Number(METRICA_ID);
  if (!ym || !id) return;
  ym(id, "params", data);
}
