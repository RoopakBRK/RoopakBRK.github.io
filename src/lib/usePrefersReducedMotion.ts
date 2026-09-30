"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// framer's hook reads the media query during the first client render, which
// disagrees with the server render. Report false until mounted to keep hydration clean.
export function usePrefersReducedMotion() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && Boolean(reduce);
}
