"use client";

import { FaCrown } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import SlideChar from "@/components/animations/slide-letters";
import { useNavbarContext } from "@/context/navbar-context";

export default function Logo() {
  const { shrinkLogo } = useNavbarContext();

  return (
    <Link href="/" className="[&_h2]:text-7xl!">
      {/* bom */}
      {/* TOP TEXT IN THE LOGO */}
      <div className=" flex-center flex-row [&>div]:flex-center [&>div]:text-xs [&>div]:leading-none gap-1">
        <div>
          <SlideChar
            speed={0.3}
            once={false}
            delay={0.3}
            init={false}
            condation={shrinkLogo}
            line="since"
            y="0"
          />
          <SlideChar
            speed={0.3}
            once={false}
            delay={0.3}
            init={false}
            condation={shrinkLogo}
            line="1987"
            y="0"
          />
        </div>
        <h2>
          <SlideChar
            speed={0.3}
            once={false}
            delay={0.3}
            init={false}
            condation={shrinkLogo}
            y="100%"
            line="bom"
          />
        </h2>
        <div>
          <SlideChar
            speed={0.3}
            once={false}
            delay={0.3}
            init={false}
            condation={shrinkLogo}
            line="new"
            y="0"
          />
          <SlideChar
            speed={0.3}
            once={false}
            delay={0.3}
            init={false}
            condation={shrinkLogo}
            line="tradition"
            y="0"
          />
        </div>
      </div>

      {/* milicia */}
      {/* BOTTOM LINE OF THE LOGO */}
      <h2 className="relative flex items-center">
        {/* MOVING M LETTER */}
        <motion.span
          animate={{
            translateX: shrinkLogo ? "-50%" : "0%",
            translateY: shrinkLogo ? "-50%" : "0%",
            left: shrinkLogo ? "50%" : 0,
          }}
          transition={{
            duration: 0.3,
            delay: shrinkLogo ? 0.7 : 0,
          }}
          className={`absolute z-10 flex **:text-gold!`}
          id="logo"
        >
          <span className="relative">
            <Crown className="mb-0! absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
            m
          </span>
        </motion.span>

        {/* aniamted text "MOLICIA" */}
        <SlideChar
          speed={0.3}
          once={false}
          delay={0.3}
          init={false}
          condation={shrinkLogo}
          y="100%"
          line="m"
          className="opacity-0"
        />
        <SlideChar
          speed={0.3}
          once={false}
          delay={0.3}
          init={false}
          condation={shrinkLogo}
          y="100%"
          line="olicaio"
        />
      </h2>
    </Link>
  );
}

export function Crown({ className }: { className?: string }) {
  return (
    <FaCrown
      className={`flex justify-self-center text-red text-3xl mb-4 ${className ?? ""}`}
    />
  );
}
