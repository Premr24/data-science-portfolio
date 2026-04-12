"use client";

import { useEffect, useRef } from "react";

export default function DataAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mobile-smart resizing (ignores vertical resize from mobile URL bars)
    let currentWidth = window.innerWidth;
    const resizeCanvas = () => {
      if (window.innerWidth !== currentWidth || canvas.width === 0) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        currentWidth = window.innerWidth;
      }
    };
    
    // Force initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener("resize", resizeCanvas);

    // Interaction parameters (Mouse AND Touch)
    let pointer = { x: -1000, y: -1000 };
    
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        pointer = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else {
        pointer = { x: e.clientX, y: e.clientY };
      }
    };
    
    const handlePointerLeave = () => {
      pointer = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("touchend", handlePointerLeave);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 1.5; 
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.5)"; 
        ctx.fill();
      }
    }

    // Fewer particles on mobile to save battery and performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : Math.min(Math.floor(window.innerWidth / 15), 100);
    const particles = Array.from({ length: particleCount }, () => new Particle());

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 - distance / 600})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Check distance to pointer (mouse or finger)
        const dxPointer = particles[i].x - pointer.x;
        const dyPointer = particles[i].y - pointer.y;
        const distancePointer = Math.sqrt(dxPointer * dxPointer + dyPointer * dyPointer);

        if (distancePointer < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.4 - distancePointer / 375})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("touchend", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 0 }}
    />
  );
}