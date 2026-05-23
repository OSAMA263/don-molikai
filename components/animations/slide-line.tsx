"use client"
import { motion } from "framer-motion";

export default function SlideLine({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={className ?? ""}
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        {children}
      </motion.div>
    </div>
  );
}
