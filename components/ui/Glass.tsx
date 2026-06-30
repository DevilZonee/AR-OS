import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassProps {
  children: ReactNode;
  className?: string;
}

export default function Glass({
  children,
  className,
}: GlassProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-2xl",
        "shadow-[0_0_40px_rgba(59,130,246,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}