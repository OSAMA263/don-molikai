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
import Container from "./container";
import Crown from "../ui/navbar/crown";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      <Container
        widthCap
        className="space-y-0! max-sm:mt-6 flex-center gap-16 uppercase font-extrabold py-25 h-dvh"
      >
        {/* FOUR NAV LINKS */}
        <div className="flex-center flex-row max-sm:flex-col text-gold! lg:gap-14 gap-4">
          {NAV_LINKS.toReversed().map(({ url, label }, i) => (
            <Fragment key={"footer" + url}>
              <MainBtn
                className={`border-b ${url == pathname ? "border-gold" : "border-transparent"}`}
                as="a"
                href={url}
              >
                {label}
              </MainBtn>

              {i == 1 && <Crown className="text-5xl! max-sm:hidden" />}
            </Fragment>
          ))}
        </div>

        {/* TITLE */}
        <div className="flex-center lg:text-7xl text-4xl">
          <SlideChar line="#new tradition" />
          <SlideChar line="#donmolinico" />
        </div>

        <div className="flex-center flex-row gap-12 lg:text-2xl">
          {/* CONTACT LINKS */}
          {CONTACT_LINKS.map(({ url, label }) => (
            <MainBtn
              className="text-gold!"
              as="a"
              blank
              href={url}
              key={label}
            >
              {label}
            </MainBtn>
          ))}
        </div>

        {/* SPONSORS OR WHATEVER */}
        <div className="grid sm:grid-cols-2 xl:w-1/2 w-[95%] mx-auto gap-20 border-y py-10">
          {SPONSORS.map(({ img, label }) => (
            <div className="flex-center gap-5" key={label}>
              <Image
                className="size-auto"
                width={100}
                height={100}
                src={img}
                alt={img}
              />
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
        />
      </Container>
    </footer>
  );
}
