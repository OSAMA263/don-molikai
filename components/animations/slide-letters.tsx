"use client";
import { motion } from "framer-motion";
type PropsTypes = {
  line: string;
  slide?: boolean;
  className?: string;
  delay?: number;
  y?: string;
  speed?: number;
};

export default function SlideChar(props: PropsTypes) {
  const {
    line = "cocks",
    slide = true,
    className,
    delay = 0,
    y = "65%",
    speed = 0.5,
  } = props;

  let char_ind = 0;
  return (
    <div className={`flex items-center flex-wrap justify-center ${className ?? ""}`}>
      {line.split(" ").map((word, i) => (
        <div key={i} className="flex leading-none flex-wrap justify-center overflow-hidden">
          {word.split("").map((char, j) => {
            char_ind++;
            return (
              <motion.span
                className="inline-block"
                initial={{
                  opacity: 0,
                  y: slide ? y : "0%",
                }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{
                  duration: speed,
                  delay: delay + char_ind * 0.09,
                }}
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
