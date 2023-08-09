"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// Typescript
interface props {
  image: string;
  name: string;
  desc: string;
  iconInfo?: {
    iconPack: string;
    iconName: string;
  };
  icones?: React.ReactNode;
}

// Framer motion
const featureVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const Features = ({ image, name, desc, icones }: props) => {
  return (
    <motion.div
      className="phone:w-full phone:h-[400px] tablet:max-w-[450px] laptop:w-[33%]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="phone:w-full phone:h-full flex flex-col items-center gap-2"
        variants={featureVariants}
      >
        {icones}
        <h4 className="text-LightPrimary font-bold text-center phone:text-2xl">
          {name}
        </h4>
        <p className="text-center phone:text-large phone:py-4 phone:px-2">
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
};
