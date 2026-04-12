"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; 
import { projects } from "@/data/projects";

// Custom GitHub SVG component
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.5 5 1.5 5 1.5a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-24 max-w-6xl mx-auto border-t border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Work</h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-surface rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-surfaceHighlight rounded-md text-accent">
                <ExternalLink size={24} />
              </div>
              
              {project.githubLink !== "" && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-neutral-400 mb-6 flex-grow leading-relaxed text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="px-3 py-1 text-xs font-mono bg-background text-accent rounded-full border border-neutral-800"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}