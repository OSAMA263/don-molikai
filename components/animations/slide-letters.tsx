"use client";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
type PropsTypes = {
  line: string;
  slide?: boolean;
  className?: string;
  delay?: number;
  y?: string;
  speed?: number;
  condation?: boolean;
  init?: boolean;
  once?: boolean;
};

export default function SlideChar(props: PropsTypes) {
  const {
    line = "cocks",
    slide = true,
    className,
    delay = 0,
    y = "65%",
    speed = 0.5,
    condation,
    init = true,
    once = true,
  } = props;

  let char_ind = 0;
  const flexCol = className?.includes("flex-col");

  return (
    <div
      className={`flex items-center flex-wrap uppercase font-extrabold justify-center ${className ?? ""}`}
    >
      {line.split(" ").map((word, i, arr) => (
        <Fragment key={i}>
          <div className="flex leading-none justify-center overflow-hidden">
            {word.split("").map((char, j) => {
              char_ind++;
              return (
                <motion.span
                  className="inline-block"
                  initial={
                    init
                      ? {
                          opacity: 0,
                          y: slide ? y : "0%",
                        }
                      : {}
                  }
                  whileInView={
                    condation === undefined
                      ? {
                          opacity: 1,
                          y: "0%",
                        }
                      : {}
                  }
                  animate={
                    condation !== undefined
                      ? {
                          opacity: condation ? 0 : 1,
                          y: condation ? y : "0%",
                        }
                      : {}
                  }
                  transition={{
                    duration: speed,
                    delay: (condation ? delay : 0) + char_ind * 0.09,
                  }}
                  viewport={{ once }}
                  key={j}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
          {/* add white space only if the word is not the last in the line */}

          {i < arr.length - 1 && (
            <span className={flexCol ? "hidden" : ""}>&nbsp;</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
