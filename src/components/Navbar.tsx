"use client";

import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // The sticky navbar with a blur effect
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-8 md:px-24">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <a href="#" className="text-white font-bold text-xl flex items-center gap-2">
            <Terminal className="text-accent" size={24} />
            <span>Prem.Data</span>
          </a>

          {/* Desktop Menu (Hidden on phones) */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-mono text-neutral-400 hover:text-white transition-colors"
              >
                // {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button (Hidden on desktops) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-neutral-900">
          <div className="px-8 py-6 flex flex-col gap-6 shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} // Closes menu when clicked
                className="text-neutral-300 font-mono text-lg hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}