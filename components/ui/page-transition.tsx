"use client";

import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <motion.div
      initial={{ width: 120, height: 120 }}
      animate={{ width: "100dvw", height: "100dvh" }}
      exit={{
        width: 120,
        height: 120,
        transition: {
          duration: 1.3,
          ease: [0.6, 0, 0.17, 0.88],
          delay: 1.6,
        },
      }}
      className={`flex-center justify-end pb-10 duration-1200 fixed top-0 z-50 left-1/2 -translate-x-1/2 ease-[cubic-bezier(0.60,0,0.17,0.88)] bg-red `}
    />
  );
}
