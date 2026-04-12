"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal } from "lucide-react";
import DataAnimation from "./DataAnimation";

export default function Hero() {
  // 1. Hook into the user's scroll position
  const { scrollY } = useScroll();
  
  // 2. Map scroll distance to background movement (Parallax logic)
  // As the user scrolls down 1000px, move the background down 300px
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 max-w-full mx-auto overflow-hidden">
      
      {/* 3. Wrap our DataAnimation in a motion div that responds to scroll */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <DataAnimation />
      </motion.div>

      {/* The Content (Z-index 10 ensures it sits above the canvas) */}
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4 text-accent font-mono"
        >
          <Terminal size={20} />
          <span>system.init()</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Data Scientist. <br />
          <span className="text-neutral-500">Turning noise into signals.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
        >
          I build predictive models, analyze complex datasets, and design machine learning systems that drive real-world business value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4"
        >
          <a href="#projects" className="bg-white text-background px-8 py-3 rounded-md font-bold hover:bg-neutral-200 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}