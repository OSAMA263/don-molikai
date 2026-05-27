"use client";

import {
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";

type NavbarContextType = {
  disableAnimation: boolean;
  shrinkLogo: boolean;
  showSlider: boolean;
  setDisableAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setShrinkLogo: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSlider: React.Dispatch<React.SetStateAction<boolean>>;
};
const NavbarContext = createContext<NavbarContextType | null>(null);

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [disableAnimation, setDisableAnimation] = useState(false);
  const [shrinkLogo, setShrinkLogo] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    // disable scroll, hover logo aniamtion until the first animtion ends
    const timer = setTimeout(() => {
      setDisableAnimation(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavbarContext.Provider
      value={{
        disableAnimation,
        setDisableAnimation,
        shrinkLogo,
        setShrinkLogo,
        showSlider,
        setShowSlider,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  if (!context)
    throw new Error("there values arnt inside the navbar provider");
  return context;
};
