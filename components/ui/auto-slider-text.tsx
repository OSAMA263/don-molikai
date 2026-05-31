"use client";
import { motion } from "framer-motion";
const SLIDING_TEXT = [
  "discover",
  "stuffed with meat",
  "pimientos",
  "del piquillo",
];

export function AutoSlider() {
  return (
    <div
      id="auto-slider"
      className="absolute inset-0 text-center opacity-0 font-extrabold uppercase transition-all duration-400"
    >
      <motion.div
        className="space-y-2"
        animate={{
          y: ["0%", "-50%"],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...Array(6)]
          .flatMap(() => SLIDING_TEXT)
          .map((text, i) => (
            <p
              key={i}
              className={i % 2 == 0 ? "text-6xl" : "text-xl"}
            >
              {text}
            </p>
          ))}
      </motion.div>
    </div>
  );
}
