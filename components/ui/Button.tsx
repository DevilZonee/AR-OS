"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={cn(
        "rounded-xl",
        "border border-white/10",
        "bg-white/10",
        "backdrop-blur-xl",
        "px-5 py-2",
        "text-white",
        "transition-all",
        "hover:bg-white/20",
        className
      )}
    >
      {children}
    </motion.button>
  );
}