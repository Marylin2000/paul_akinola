"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const count = window.innerWidth < 768 ? 15 : 30;
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-stone-300/30 dark:bg-stone-600/20 rounded-full blur-[2px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size * 2,
            height: p.size * 2,
          }}
          animate={{
            x: [0, Math.random() * 60 - 30, 0],
            y: [0, Math.random() * 60 - 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
