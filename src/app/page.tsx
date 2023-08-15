"use client";
import { motion, useAnimate, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const item1Varients: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 0.5,
    },
  },
};
const item2Varients: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

export default function Home() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      scope.current,
      {
        opacity: [0.1, 0.2, 0.1],
      },
      { duration: 6, repeat: Infinity, ease: "easeInOut" }
    );
  }, []);

  return (
    <section className="flex w-full h-[calc(100vh-5rem)] " id="hero-section">
      <div className="w-full h-full">
        <div className="w-full h-full relative flex items-center justify-center">
          <motion.h1
            className="text-5xl font-black font-montserrat text-white tracking-wider flex flex-col items-center justify-center gap-10"
            animate={{ transition: { staggerChildren: 0.3 } }}
          >
            <motion.span
              variants={item1Varients}
              initial="hidden"
              animate="visible"
            >
              Business, Investing
            </motion.span>
            <motion.span
              variants={item2Varients}
              initial="hidden"
              animate="visible"
              data-item-1
            >
              Finance & Innovation
            </motion.span>
          </motion.h1>

          <div
            ref={scope}
            className="bg-pattern w-full h-full absolute top-0 z-[-1] opacity-10"
          ></div>
        </div>
      </div>
    </section>
  );
}
