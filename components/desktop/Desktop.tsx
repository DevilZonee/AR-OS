"use client";

import Wallpaper from "../background/Wallpaper";
import DesktopIcon from "./DesktopIcon";
import { desktopIcons } from "@/data/desktop";

export default function Desktop() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Wallpaper />

      <div className="absolute left-10 top-10 flex flex-col gap-5">
        {desktopIcons.map((item) => (
          <DesktopIcon
            key={item.id}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-8 py-3 backdrop-blur-xl">
        <div className="flex gap-6 text-3xl">
          <span>🏠</span>
          <span>👤</span>
          <span>💼</span>
          <span>📄</span>
          <span>⚙️</span>
          <span>💻</span>
        </div>
      </div>
    </main>
  );
}