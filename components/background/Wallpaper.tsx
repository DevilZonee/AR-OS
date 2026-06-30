"use client";

import { motion } from "framer-motion";

export default function Wallpaper() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Top Glow */}
      <div className="absolute -top-52 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />

      {/* Bottom Left Glow */}
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[160px]" />

      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </motion.div>
  );
}