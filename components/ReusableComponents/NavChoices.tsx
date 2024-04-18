import React from "react";
import { motion } from "framer-motion";

interface props {
  name: string;
  icones: React.ReactNode;
  animationProperties: {
    variant: any;
    animate: any;
  };
}

const NavChoices = ({ name, icones, animationProperties }: props) => {
  return (
    <motion.li
      variants={animationProperties.variant}
      className="cursor-pointer p-2 hover:text-LightPrimary phone:-translate-x-[100%] phone:flex phone:gap-2 phone:pl-10 laptop:translate-x-[0%]"
    >
      <div className="desktop:hidden">{icones}</div>
      {name}
    </motion.li>
  );
};

export default NavChoices;
