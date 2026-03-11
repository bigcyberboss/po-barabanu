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

const getInitialTransform = (animation: Animation): string => {
  switch (animation) {
    case "fade-in":
      return "none";
    case "fade-in-up":
      return "translateY(30px)";
    case "fade-in-down":
      return "translateY(-30px)";
    case "scale-in":
      return "scale(0.9)";
    case "bounce-in":
      return "scale(0.8)";
    case "slide-in-left":
      return "translateX(-40px)";
    case "slide-in-right":
      return "translateX(40px)";
    default:
      return "none";
  }
};

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
        transform: isVisible ? "none" : getInitialTransform(animation),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
