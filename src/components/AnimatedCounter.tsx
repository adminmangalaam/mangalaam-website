"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import type { KeyframeOptions } from "framer-motion";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

export const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true }); // Animates only once when visible

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!inView) return;

    // Respect reduced motion settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      element.textContent = String(to);
      return;
    }

    // Set initial value
    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        // Convert the animated float to an integer string
        element.textContent = value.toFixed(0);
      },
    });

    // Cleanup: Stop animation if component unmounts
    return () => controls.stop();
  }, [ref, inView, from, to, animationOptions]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: "monospace", // Prevents horizontal layout shifts [00:06:26]
      }}
    />
  );
};
