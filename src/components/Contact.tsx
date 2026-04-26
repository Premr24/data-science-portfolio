"use client";

import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.5 5 1.5 5 1.5a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const KaggleIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.234.118-.353.354-.353h2.431c.234 0 .351.119.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.122.034.232-.034.332l-7.605 7.275 7.949 10.088c.086.104.1.206.006.307z"/>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgpnnka", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log("Network or Fetch Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-8 md:px-24 max-w-6xl mx-auto border-t border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Whether you have a question about my data models, want to discuss a potential project, or just want to connect, my inbox is always open.
          </p>

          <div className="space-y-6">
            <a href="mailto:rawalprem274@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-accent transition-colors group">
              <div className="p-3 bg-surface rounded-lg group-hover:bg-surfaceHighlight transition-colors border border-neutral-800">
                <Mail size={20} />
              </div>
              <span className="font-mono text-sm">rawalprem274@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/prem-rawal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-accent transition-colors group">
              <div className="p-3 bg-surface rounded-lg group-hover:bg-surfaceHighlight transition-colors border border-neutral-800">
                <LinkedinIcon size={20} />
              </div>
              <span className="font-mono text-sm">LinkedIn</span>
            </a>

            <a href="https://github.com/Premr24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-accent transition-colors group">
              <div className="p-3 bg-surface rounded-lg group-hover:bg-surfaceHighlight transition-colors border border-neutral-800">
                <GithubIcon size={20} />
              </div>
              <span className="font-mono text-sm">GitHub</span>
            </a>

            <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-accent transition-colors group">
              <div className="p-3 bg-surface rounded-lg group-hover:bg-surfaceHighlight transition-colors border border-neutral-800">
                <KaggleIcon size={20} />
              </div>
              <span className="font-mono text-sm">Kaggle</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-surface p-8 rounded-lg border border-neutral-800"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-neutral-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-accent hover:text-white transition-colors text-sm font-mono"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2 font-mono">Name</label>
                <input
                  type="text" id="name" name="name" required
                  disabled={status === "submitting"}
                  className="w-full bg-background border border-neutral-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2 font-mono">Email</label>
                <input
                  type="email" id="email" name="email" required
                  disabled={status === "submitting"}
                  className="w-full bg-background border border-neutral-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all disabled:opacity-50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2 font-mono">Message</label>
                <textarea
                  id="message" name="message" required rows={4}
                  disabled={status === "submitting"}
                  className="w-full bg-background border border-neutral-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none disabled:opacity-50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-400/10 rounded-md border border-red-400/20">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-white text-background font-bold py-3 px-6 rounded-md hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <><Loader2 size={18} className="animate-spin" />Sending...</>
                ) : (
                  <><Send size={18} />Send Message</>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}