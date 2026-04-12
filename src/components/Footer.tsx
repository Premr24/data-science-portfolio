"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 py-8 px-8 w-full bg-background mt-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        // Removed justify-between and added justify-center to lock it in the middle
        className="max-w-6xl mx-auto flex justify-center items-center text-sm font-mono text-neutral-500 text-center"
      >
        <p>
          &copy; {currentYear} Prem Rawal. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}