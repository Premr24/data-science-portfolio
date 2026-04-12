"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { User, Briefcase, Code2, Mail, Copy, TerminalSquare } from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle menu with Cmd+K or Ctrl+K
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      // Close menu with the Escape key
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  // If the menu isn't triggered, don't render anything
  if (!open) return null;

  return (
    // Our custom glassmorphism background overlay
    <div 
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] md:pt-[20vh] bg-background/60 backdrop-blur-sm"
      onClick={() => setOpen(false)} // Closes if you click outside the box
    >
      <Command 
        className="w-full max-w-xl bg-surface border border-neutral-800 rounded-xl shadow-2xl overflow-hidden flex flex-col text-neutral-300 mx-4"
        onClick={(e) => e.stopPropagation()} // Prevents clicks inside the box from closing it
      >
        <div className="flex items-center px-4 border-b border-neutral-800">
          <TerminalSquare size={20} className="text-neutral-500 mr-2" />
          <Command.Input 
            autoFocus // Automatically places your cursor in the search box
            placeholder="Type a command or search..." 
            className="w-full py-4 bg-transparent text-white placeholder-neutral-500 focus:outline-none font-mono text-sm"
          />
        </div>
        
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="p-6 text-center text-sm text-neutral-500 font-mono">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="text-xs text-neutral-500 font-mono px-2 py-3">
            <Command.Item 
              onSelect={() => runCommand(() => window.location.hash = "#about")}
              className="flex items-center gap-3 px-3 py-3 mt-1 rounded-md hover:bg-surfaceHighlight hover:text-white cursor-pointer transition-colors aria-selected:bg-surfaceHighlight aria-selected:text-white"
            >
              <User size={16} className="text-accent" />
              <span className="text-sm font-sans">About Me</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.location.hash = "#skills")}
              className="flex items-center gap-3 px-3 py-3 mt-1 rounded-md hover:bg-surfaceHighlight hover:text-white cursor-pointer transition-colors aria-selected:bg-surfaceHighlight aria-selected:text-white"
            >
              <Code2 size={16} className="text-accent" />
              <span className="text-sm font-sans">Technical Arsenal</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.location.hash = "#projects")}
              className="flex items-center gap-3 px-3 py-3 mt-1 rounded-md hover:bg-surfaceHighlight hover:text-white cursor-pointer transition-colors aria-selected:bg-surfaceHighlight aria-selected:text-white"
            >
              <Briefcase size={16} className="text-accent" />
              <span className="text-sm font-sans">Featured Work</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="text-xs text-neutral-500 font-mono px-2 py-3 border-t border-neutral-800">
            <Command.Item 
              onSelect={() => runCommand(() => window.location.hash = "#contact")}
              className="flex items-center gap-3 px-3 py-3 mt-1 rounded-md hover:bg-surfaceHighlight hover:text-white cursor-pointer transition-colors aria-selected:bg-surfaceHighlight aria-selected:text-white"
            >
              <Mail size={16} className="text-accent" />
              <span className="text-sm font-sans">Send me an Email</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => {
                navigator.clipboard.writeText("your.email@example.com"); 
                alert("Email address copied to clipboard!");
              })}
              className="flex items-center gap-3 px-3 py-3 mt-1 rounded-md hover:bg-surfaceHighlight hover:text-white cursor-pointer transition-colors aria-selected:bg-surfaceHighlight aria-selected:text-white"
            >
              <Copy size={16} className="text-accent" />
              <span className="text-sm font-sans">Copy Email Address</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}