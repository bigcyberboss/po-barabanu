"use client";

import { useEffect, useRef, useState } from "react";

type Animation =
  | "fade-in"
  | "fade-in-up"
  | "fade-in-down"
  | "scale-in"
  | "bounce-in"
  | "slide-in-left"
  | "slide-in-right";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-in-up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        animationName: isVisible ? animation : "none",
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationTimingFunction: "ease-out",
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
