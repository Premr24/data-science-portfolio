"use client";

import { motion } from "framer-motion";
import { Code2, LineChart } from "lucide-react"; // Notice the User icon is removed

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-24 max-w-6xl mx-auto border-t border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </motion.div>

      {/* Changed to a max-width container instead of a grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl space-y-6 text-neutral-400 leading-relaxed text-lg"
      >
        <p>
          I am a Data Scientist and Software Developer based in Nepal, driven by a deep-rooted passion for mathematics and problem-solving. My journey didn't start in a vacuum; it began in robust backend engineering.
        </p>
        <p>
          Having engineered scalable systems using Java and Spring Boot, I realized my favorite part of any project was deriving actionable insights from unstructured data. Because I have always been mathematically inclined, transitioning into the modern Data Science stack was a natural evolution.
        </p>
        
        {/* Upgraded focus boxes to sit side-by-side on desktop */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 pt-6">
          <div className="flex-1 flex items-center gap-4 bg-surface p-6 rounded-lg border border-neutral-800">
            <LineChart className="text-accent flex-shrink-0" size={32} />
            <div>
              <h4 className="text-white font-bold mb-1">Data Science Focus</h4>
              <p className="text-sm text-neutral-500">Python, NumPy, Pandas, Matplotlib, Seaborn</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-4 bg-surface p-6 rounded-lg border border-neutral-800">
            <Code2 className="text-accent flex-shrink-0" size={32} />
            <div>
              <h4 className="text-white font-bold mb-1">Engineering Foundation</h4>
              <p className="text-sm text-neutral-500">Java, Spring Boot, SQL Architecture</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}