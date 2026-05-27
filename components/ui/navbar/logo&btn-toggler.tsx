"use client";
import { useNavbarContext } from "@/context/navbar-context";
import { motion } from "framer-motion";
import Logo from "./logo";

export default function Logo_NavBtn() {
  const {
    showSlider,
    disableAnimation,
    setShrinkLogo,
    shrinkLogo,
    setShowSlider,
  } = useNavbarContext();

  return (
    <motion.div
      onMouseEnter={() => setShrinkLogo(false)}
      onMouseLeave={() =>
        !showSlider && disableAnimation && setShrinkLogo(true)
      }
      layout
      initial={{
        top: "100vh",
        width: 120,
        height: 200,
      }}
      animate={{
        top: ["100vh", "40vh", "40vh", "0vh"],
        width: shrinkLogo ? 120 : "auto",
        height: shrinkLogo ? 200 : "auto",
      }}
      transition={{
        top: {
          duration: 1.9,
          times: [0, 0.3, 0.7, 1],
          ease: "easeInOut",
          delay: 0.4,
        },
        width: {
          duration: 0.5,
          delay: shrinkLogo ? 0.7 : 0,
        },
        height: {
          duration: 0.5,
          delay: shrinkLogo ? 0.7 : 0,
        },
      }}
      className="absolute p-6 z-100 flex-center gap-6 uppercase overflow-hidden bg-red text-center left-1/2 -translate-x-1/2"
    >
      {/* BTN TOGGLER */}
      <button
        onClick={() => {
          setShowSlider((prev) => !prev);
          setShrinkLogo(false);
        }}
        className={`relative flex-center gap-10 py-1.5 *:absolute *:w-full transition-all duration-500 *:h-0.5 *:bg-gold *:left-1/2 *:-translate-x-1/2 *:transition-all *:duration-400 ${shrinkLogo ? "w-11" : "w-25"}`}
        aria-label="navbar-toggler"
      >
        {/* 2 LINES */}
        <motion.span
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.6 }}
          className={`top-0 ${showSlider ? "top-1/2 -translate-y-1/2 -rotate-12 -skew-x-12" : ""}`}
        />
        <motion.span
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.6 }}
          className={`bottom-0 ${showSlider ? "bottom-1/2 translate-y-1/2 rotate-12 skew-x-12" : ""}`}
        />
      </button>
      {/* ANIMATED LETTER LOGO */}
      <Logo />
    </motion.div>
  );
}
