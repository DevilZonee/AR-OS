"use client";

import { motion } from "framer-motion";

interface Props {
  icon: string;
  title: string;
}

export default function DesktopIcon({ icon, title }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex w-24 flex-col items-center gap-2 rounded-xl p-3 transition hover:bg-white/10"
    >
      <div className="text-5xl">{icon}</div>

      <span className="text-sm text-white">{title}</span>
    </motion.button>
  );
}