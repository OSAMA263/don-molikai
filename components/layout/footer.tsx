"use client";

import { CONTACT_LINKS } from "@/data/contact-links";
import MainBtn from "../ui/main-button";
import SlideChar from "../animations/slide-letters";
import Image from "next/image";
import SlideLine from "../animations/slide-line";
import { SPONSORS } from "@/data/sponsors,";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/nav-links";
import { Fragment } from "react/jsx-runtime";
import { Crown } from "../ui/navbar/logo";
import Container from "./container";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer >
      <Container widthCap className="space-y-0! flex-center gap-16 uppercase font-extrabold py-25 h-dvh">
      {/* FOUR NAV LINKS */}
      <div className="flex-center flex-row text-gold! gap-14">
        {NAV_LINKS.toReversed().map(({ url, label }, i) => (
          <Fragment key={"footer" + url}>
            <MainBtn
              className={`border-b ${url == pathname ? "border-gold" : "border-transparent"}`}
              as="a"
              href={url}
            >
              {label}
            </MainBtn>

            {i == 1 && <Crown className="text-6xl!" />}
          </Fragment>
        ))}
      </div>

      {/* TITLE */}
      <div className="flex-center text-7xl">
        <SlideChar line="#new tradition" />
        <SlideChar line="#donmolinico" />
      </div>

      <div className="flex-center flex-row gap-12 text-2xl">
        {/* CONTACT LINKS */}
        {CONTACT_LINKS.map(({ url, label }) => (
          <MainBtn
            className="text-gold!"
            as="a"
            href={url}
            key={label}
          >
            {label}
          </MainBtn>
        ))}
      </div>

      {/* SPONSORS OR WHATEVER */}
      <div className="grid grid-cols-2 w-1/2 mx-auto gap-20 border-y py-10">
        {SPONSORS.map(({ img, label }) => (
          <div className="flex-center gap-5" key={label}>
            <Image className="size-auto" width={100} height={100} src={img} alt={img} />
            <SlideLine className="text-sm text-center">
              {label}
            </SlideLine>
          </div>
        ))}
      </div>

      {/* RIGHTS LULE */}
      <SlideChar
        speed={0.1}
        line="© copyright 2026. all rights reserved."
      /></Container>
    </footer>
  );
}
