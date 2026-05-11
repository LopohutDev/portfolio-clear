"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  mode?: "scroll" | "mount";
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  mode = "scroll",
}: FadeInProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  const initial = {
    opacity: 0,
    ...(yOffset !== 0 && { y: yOffset }),
    ...(xOffset !== 0 && { x: xOffset }),
  };

  const target = { opacity: 1, y: 0, x: 0 };

  // Before JS hydrates: render plain div so content is visible to crawlers
  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  if (mode === "mount") {
    return (
      <motion.div
        initial={initial}
        animate={target}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={target}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
