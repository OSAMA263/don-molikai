"use client";

import { FaCrown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeLink from "./home-link";

type PropsTypes = {
  setShowSlider: React.Dispatch<React.SetStateAction<boolean>>;
  showSlider: boolean;
};

export default function Logo({
  showSlider,
  setShowSlider,
}: PropsTypes) {
  const [disableAnimation, setDisableAnimation] = useState(false);
  const [shrinkLogo, setShrinkLogo] = useState(false);

  // disable scroll, hover aniamtion until the first animtion ends
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisableAnimation(true);
      setShrinkLogo(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);
// make a fucking context?
// split the btn toggler from this logo comp, navlinks?
  return (
    <>
      {/* FULL VIEWPORT RED BG */}
      <motion.div
        initial={{ width: "100dvw", height: "100dvh" }}
        animate={{ width: 120, height: 120 }}
        transition={{
          duration: 1.2,
          ease: [0.6, 0, 0.17, 0.88],
          delay: 2.2,
        }}
        className={`flex-center justify-end duration-1200 fixed top-0 z-50 left-1/2 -translate-x-1/2 ease-[cubic-bezier(0.60,0,0.17,0.88)] bg-red ${showSlider ? "w-dvw! h-dvh!" : "w-30 h-30"}`}
      >
        {/* NAVLINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: showSlider ? 1 : 0,
          }}
          className={`text-white! ${!showSlider ? "pointer-events-none" : ""}`}
        >
          <div>looremroemr</div>
          <div>loorsemroemr</div>
          <div>looremroemr</div>
        </motion.div>
      </motion.div>

      {/* LOGO & BTN TOGGLER */}
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
            duration: 2.6,
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
        {/* NAVLINKS TOGGLER */}
        <button
          onClick={() => {
            setShowSlider((prev) => !prev);
            setShrinkLogo(false);
          }}
          className={`relative flex-center gap-10 py-1.5 *:absolute *:w-full transition-all duration-500 *:h-0.5 *:bg-gold *:left-1/2 *:-translate-x-1/2 *:transition-all *:duration-400 ${shrinkLogo ? "w-11" : "w-25"}`}
          aria-label="navbar-toggler"
        >
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

        {/* HOME LINK */}
        <HomeLink shrinkLogo={shrinkLogo} />
      </motion.div>
    </>
  );
}

export function Crown({ className }: { className?: string }) {
  return (
    <FaCrown
      className={`flex justify-self-center text-red text-3xl mb-4 ${className ?? ""}`}
    />
  );
}
