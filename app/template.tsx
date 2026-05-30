"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={pathname}
          initial={{ width: "100dvw", height: "100dvh" }}
          animate={{ width: 120, height: 120 }}
          transition={{
            duration: 0.9,
            ease: [0.6, 0, 0.17, 0.88],
            delay: 0.1,
          }}
          className={`flex-center justify-end pb-10 duration-1200 fixed top-0 z-50 left-1/2 -translate-x-1/2 ease-[cubic-bezier(0.60,0,0.17,0.88)] bg-red `}
        />
      </AnimatePresence>
      {children}
    </>
  );
}
