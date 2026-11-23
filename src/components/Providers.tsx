"use client";

import { MotionConfig } from "framer-motion";

/** Honours the visitor's prefers-reduced-motion setting across every animation. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
