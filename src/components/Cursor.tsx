"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Cursor() {
  // 1. useMotionValue bypasses React rendering entirely for zero-latency tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsMobile(false);
    }

    const updateMousePosition = (e: MouseEvent) => {
      // 2. Instantly update the DOM graphics engine
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[100] flex items-center justify-center mix-blend-screen"
      // 3. Attach the raw, instant values directly to the style
      style={{ 
        x: cursorX, 
        y: cursorY 
      }}
      // 4. Only animate the scale and color. Leave the movement alone!
      animate={{
        scale: isHovering ? 1.8 : 1,
        backgroundColor: isHovering ? "rgba(6, 182, 212, 0.15)" : "transparent",
      }}
      transition={{ 
        scale: { type: "spring", stiffness: 400, damping: 28 },
        backgroundColor: { duration: 0.2 }
      }}
    >
      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
    </motion.div>
  );
}