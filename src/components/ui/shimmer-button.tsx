import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  background?: string;
  children: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "rgba(255, 255, 255, 0.3)",
      shimmerSize = "0.15em",
      borderRadius = "0.75rem",
      background = "hsl(var(--primary))",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl px-6 py-3 font-semibold transition-all hover:scale-105 active:scale-95",
          className
        )}
        style={{
          background,
          borderRadius,
        }}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
          }}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
