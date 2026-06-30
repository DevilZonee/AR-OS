"use client";

interface Props {
  progress: number;
}

export default function LoadingBar({ progress }: Props) {
  return (
    <div className="w-80 h-2 rounded-full bg-white/10 overflow-hidden mt-8">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}