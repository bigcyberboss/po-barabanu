"use client";

import { reachGoal, type MetricaEvent } from "@/lib/metrica";

interface TrackedLinkProps {
  href: string;
  event: MetricaEvent;
  eventParams?: Record<string, unknown>;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export default function TrackedLink({
  href,
  event,
  eventParams,
  children,
  ...rest
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={() => reachGoal(event, eventParams)}
      {...rest}
    >
      {children}
    </a>
  );
}
