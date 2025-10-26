import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
}

export const BlurFade = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 20,
  blur = "10px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: yOffset,
        filter: `blur(${blur})`,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: yOffset,
              filter: `blur(${blur})`,
            }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
