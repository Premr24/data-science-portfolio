"use client";

import { motion } from "framer-motion";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer, 
  Tooltip
} from "recharts";

const skillMetrics = [
  { subject: "Math & Stats", level: 95 },
  { subject: "Python & Data", level: 90 },
  { subject: "Machine Learning", level: 85 },
  { subject: "SQL & Vectors", level: 80 },
  { subject: "Backend Arch.", level: 90 },
  { subject: "Java & Spring", level: 85 },
];

const skillCategories = [
  {
    title: "Data Analysis & ML",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"]
  },
  {
    title: "Backend & Engineering",
    skills: ["Java", "Spring Boot", "Spring AI", "RESTful APIs"]
  },
  {
    title: "Database & Tools",
    skills: ["SQL", "Vector Databases", "Git", "Jupyter Notebooks"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-24 max-w-6xl mx-auto border-t border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: The Live Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-[450px] w-full bg-surface rounded-xl border border-neutral-800 p-4 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart 
              cx="50%" 
              cy="50%" 
              outerRadius="55%" 
              data={skillMetrics}
              margin={{ top: 10, right: 40, bottom: 10, left: 40 }}
            >
              <PolarGrid stroke="#262626" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#a3a3a3', fontSize: 11, fontFamily: 'var(--font-geist-mono)' }} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#171717', 
                  borderColor: '#262626',
                  color: '#fff',
                  fontFamily: 'var(--font-geist-sans)',
                  borderRadius: '8px'
                }}
                itemStyle={{ color: '#06b6d4' }}
              />
              <Radar 
                name="Proficiency" 
                dataKey="level" 
                stroke="#06b6d4" 
                strokeWidth={2}
                fill="#06b6d4" 
                fillOpacity={0.3} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Right Side: The Boxed Data Categories */}
        <div className="flex flex-col gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Added the background, padding, and border to create the elevated card look
              className="bg-surface p-6 rounded-xl border border-neutral-800 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                {/* Styled the number prefix to look like a small badge */}
                <span className="text-accent text-sm font-mono bg-background px-2 py-1 rounded-md border border-neutral-800">
                  {`0${index + 1}.`}
                </span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-background text-neutral-300 text-sm font-medium rounded-md border border-neutral-800 hover:border-accent hover:text-accent transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}