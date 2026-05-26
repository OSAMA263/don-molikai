"use client";

import { useNavbarContext } from "@/context/navbar-context";
import { motion } from "framer-motion";
import Logo_NavBtn from "./logo&btn-toggler";
import { NAV_LINKS } from "@/data/nav-links";
import MainBtn from "../main-button";
import { usePathname } from "next/navigation";
import { Crown } from "./logo";

export default function NavigationBar() {
  const { showSlider } = useNavbarContext();
  const pathname = usePathname();

  return (
    <div className="flex justify-between w-[98vw] *:flex *:pt-5 *:gap-6 text-4xl uppercase">
      {/* 4 GOLD LINKS */}
      <>
        <div>
          {NAV_LINKS.slice(0, 2).map(({ url, label }) => (
            <MainBtn
              className={url == pathname ? "border-b" : ""}
              as="a"
              key={url}
              href={url}
            >
              {label}
            </MainBtn>
          ))}
        </div>
        <div>
          {NAV_LINKS.slice(2, 4).map(({ url, label }) => (
            <MainBtn
              className={url == pathname ? "border-b" : ""}
              as="a"
              key={url}
              href={url}
            >
              {label}
            </MainBtn>
          ))}
        </div>
      </>

      {/* FULL VIEWPORT RED BG */}
      <motion.div
        initial={{ width: "100dvw", height: "100dvh" }}
        animate={{ width: 120, height: 120 }}
        transition={{
          duration: 1.2,
          ease: [0.6, 0, 0.17, 0.88],
          delay: 2.2,
        }}
        className={`flex-center justify-end pb-10 duration-1200 fixed top-0 z-50 left-1/2 -translate-x-1/2 ease-[cubic-bezier(0.60,0,0.17,0.88)] bg-red ${showSlider ? "w-dvw! h-dvh!" : "w-30 h-30"}`}
      >
        <SliderNavLinks {...{ showSlider, pathname }} />
      </motion.div>

      {/* navbar toggler btn & aniamted letters logo */}
      <Logo_NavBtn />
    </div>
  );
}

const SliderNavLinks = ({
  showSlider,
  pathname,
}: {
  pathname: string;
  showSlider: boolean;
}) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        opacity: showSlider ? 1 : 0,
      }}
      transition={{ delay: showSlider ? 0.8 : 0 }}
      className={`w-full ${!showSlider ? "pointer-events-none" : ""}`}
    >
      <ul>
        {NAV_LINKS.map(({ url, label }) => (
          <li key={"slider" + label} className="border-b flex-center">
            <MainBtn
              as="a"
              href={url}
              className="uppercase w-fit text-9xl *:flex-center *:flex-row *:gap-6"
            >
              {url == pathname && <Crown className="text-gold!" />}
              <span>{label}</span>
              {url == pathname && <Crown className="text-gold!" />}
            </MainBtn>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
