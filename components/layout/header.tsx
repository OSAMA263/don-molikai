"use client";

import Logo from "../ui/navbar/Logo";
import { useState } from "react";

export default function Header() {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <header className="fixed z-60 top-0 left-1/2 -translate-x-1/2 font-extrabold text-gold">
      <Logo {...{ showSlider, setShowSlider }} />
    </header>
  );
}
