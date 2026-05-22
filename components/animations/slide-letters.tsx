"use client";
import { motion } from "framer-motion";

export default function SlideChar({ line = "cocks" }) {
  let char_ind = 0;
  return (
    <div className="flex items-center">
      {line.split(" ").map((word, i) => (
        <div key={i} className="w-fit leading-none overflow-hidden">
          {word.split("").map((char, j) => {
            char_ind++;
            return (
              <motion.span
                className="inline-block"
                initial={{ opacity: 0.5, y: "100%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.4, delay: char_ind * 0.09 }}
                viewport={{ once: false }}
                key={j}
              >
                {char}
              </motion.span>
            );
          })}
          &nbsp;
        </div>
      ))}
    </div>
  );
}
