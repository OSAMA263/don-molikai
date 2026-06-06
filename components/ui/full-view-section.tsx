"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CSSProperties, useRef } from "react";

const MotionImage = motion.create(Image);
export default function ViewPortSection({
  src,
  children,
  className,
  delayScale,
  overlayOnScroll = false,
  style,
}: {
  src?: string;
  children?: React.ReactNode;
  className?: string;
  delayScale?: number;
  overlayOnScroll?: boolean;
  style?: CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });
  const blackOverlay = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <div
        style={style}
        ref={containerRef}
        className={`min-h-dvh ${src ? "h-dvh" : "h-full"} top-0 sticky ${className ?? ""}`}
      >
        {overlayOnScroll && (
          <motion.div
            style={{ opacity: blackOverlay }}
            className="absolute size-full z-10 bg-black pointer-events-none -top-full"
          />
        )}

        {/*  image and text content */}
        <div
          className={`overflow-hidden relative h-full`}
          id="wrapper"
        >
          {children}
          {src && (
            <MotionImage
              src={src}
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2, delay: delayScale ?? 0 }}
              viewport={{ once: true }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHwSUNDX1BST0ZJTEUAAQEAAAHgbGNtcwQgAABtbnRyUkdCIFhZWiAH4gADABQACQAOAB1hY3NwTVNGVAAAAABzYXdzY3RybAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWhhbmR56b9WWj4BtoMjhVVG90+qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAACRjcHJ0AAABIAAAACJ3dHB0AAABRAAAABRjaGFkAAABWAAAACxyWFlaAAABhAAAABRnWFlaAAABmAAAABRiWFlaAAABrAAAABRyVFJDAAABwAAAACBnVFJDAAABwAAAACBiVFJDAAABwAAAACBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAYAAAAcAEMAQwAwAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMPwAABd3///MmAAAHkAAA/ZL///uh///9ogAAA9wAAMBxWFlaIAAAAAAAAG+gAAA48gAAA49YWVogAAAAAAAAYpYAALeJAAAY2lhZWiAAAAAAAAAkoAAAD4UAALbEcGFyYQAAAAAAAwAAAAJmaQAA8qcAAA1ZAAAT0AAAClv/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAbACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyPQ9JaOQcV6DprfZ41zWRYwrG2cVfknCLwa+Bk01qfoNODbsjRuphIpxXO3lszOcc1P8Abip5NWYpklXmqT0HKPK7FK0tW70Ve89I+lFc8lFsSizN+1KOBUkatPWPCTuFdDpv3a0auycPUaZVuoPKXNU7e9CyFc1p6t/q2rlMn7Qea6IJWKqyu7nSmQSDrRVKH7gormlFXJVRn//Z"
              alt={"bg iamge"}
              priority
              fill
              className="object-cover inset-0 -z-1 absolute bg-no-repeat"
            />
          )}
        </div>
      </div>
    </>
  );
}
