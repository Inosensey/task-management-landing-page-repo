"use client";

import React, { useEffect, useState } from "react";
import NavChoices from "./NavChoices";
import Overlay from "./Overlay";
import MaterialSymbolsHouseOutlineRounded from "@/icones/MaterialSymbolsHouseOutlineRounded";
import MaterialSymbolsFeaturedPlayListOutlineRounded from "@/icones/MaterialSymbolsFeaturedPlayListOutlineRounded";
import MaterialSymbolsInfoOutlineRounded from "@/icones/MaterialSymbolsInfoOutlineRounded";
import MaterialSymbolsContactPageOutlineRounded from "@/icones/MaterialSymbolsContactPageOutlineRounded";
import { useAnimation, motion } from "framer-motion";

const Nav = () => {
  // States
  const [currentViewPoint, setCurrentViewPoint] = useState<number>(0);
  const [lastViewPoint, setLastViewPoint] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<string>("Steady");
  const [showNavBar, setShowNavBar] = useState<boolean>(false);

  // Save view point
  const saveViewPoint = () => {
    setCurrentViewPoint(window.scrollY);
  };

  // Check if user is scrolling
  const checkIfUserIsScrolling = () => {
    // Get view point
    setLastViewPoint(currentViewPoint);

    // Check scrolling
    currentViewPoint === 0 && setScrollDirection("Steady");
    currentViewPoint > lastViewPoint && setScrollDirection("Down");
    currentViewPoint < lastViewPoint && setScrollDirection("Up");
  };

  // Framer motion logics

  // useAnimation
  const sidebarAnimation = useAnimation();
  const ulAnimation = useAnimation();
  const liAnimation = useAnimation();

  // Variants
  const sidebarVariant = {
    hidden: {
      x: "-100%",
    },
    show: {
      x: "0%",
      transition: {
        type: "tween",
      },
    },
  };
  const ulVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const liVariant = {
    hidden: {
      x: "-100%",
    },
    show: {
      x: "0%",
    },
  };

  const animateSidebar = () => {
    if (!showNavBar) {
      sidebarAnimation.start("show");
      ulAnimation.start("show");
      liAnimation.start("show");
      document.body.style.overflow = "hidden";
    } else {
      sidebarAnimation.set("hidden");
      ulAnimation.start("hidden");
      liAnimation.start("hidden");
      document.body.style.overflow = "auto";
    }
    setShowNavBar((current) => !current);
  };

  // useEffect
  useEffect(() => {
    window.addEventListener("scroll", saveViewPoint);

    return () => {
      window.removeEventListener("scroll", saveViewPoint);
    };
  }, []);

  useEffect(() => {
    checkIfUserIsScrolling();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentViewPoint]);
  return (
    <>
      {showNavBar && <Overlay clickEvent={() => animateSidebar()} />}
      <motion.nav
        variants={sidebarVariant}
        animate={sidebarAnimation}
        initial="hidden"
        className={`fixed bg-Secondary flex z-20 phone:flex-col phone:h-screen phone:w-72 desktop:ease-in-out desktop:duration-300 desktop:justify-center desktop:h-12 desktop:w-full ${
          scrollDirection === "Steady"
            ? "desktop:top-0"
            : scrollDirection === "Down"
            ? "desktop:-top-28"
            : "desktop:top-0"
        }`}
      >
        <h3 className="text-center phone:text-3xl font-bold text-LightPrimary px-6 py-4">
          TaskFlow
        </h3>
        <motion.ul
          variants={ulVariant}
          animate={ulAnimation}
          initial="hidden"
          className="flex phone:flex-1 phone:flex-col phone:w-full phone:justify-center phone:gap-8 desktop:w-[700px] desktop:gap-8 desktop:items-center"
        >
          <NavChoices
            animationProperties={{
              variant: liVariant,
              animate: liAnimation,
            }}
            icones={<MaterialSymbolsHouseOutlineRounded />}
            name="Home"
          />
          <NavChoices
            animationProperties={{
              variant: liVariant,
              animate: liAnimation,
            }}
            icones={<MaterialSymbolsFeaturedPlayListOutlineRounded />}
            name="About"
          />
          <NavChoices
            animationProperties={{
              variant: liVariant,
              animate: liAnimation,
            }}
            icones={<MaterialSymbolsInfoOutlineRounded />}
            name="Features"
          />
          <NavChoices
            animationProperties={{
              variant: liVariant,
              animate: liAnimation,
            }}
            icones={<MaterialSymbolsContactPageOutlineRounded />}
            name="Contact Us"
          />
        </motion.ul>
      </motion.nav>

      {/* Burger Icon */}
      <div
        onClick={() =>
          // showNavBar ? setShowNavBar(false) : setShowNavBar(true)
          animateSidebar()
        }
        className={`border items-center p-2 z-30 right-0 top-2 w-14 flex flex-col gap-2 cursor-pointer phone:fixed desktop:hidden`}
      >
        <div
          className={`${
            showNavBar && "rotate-45 origin-top-left"
          } ease-in-out duration-100 w-[87%] border-2 border-LightPrimary`}
        ></div>
        <div
          className={`${
            showNavBar && "origin-center opacity-0"
          } ease-in-out duration-100 w-[87%] border-2 border-LightPrimary`}
        ></div>
        <div
          className={`${
            showNavBar && "-rotate-45 origin-bottom-left"
          } ease-in-out duration-100 w-[87%] border-2 border-LightPrimary`}
        ></div>
      </div>
    </>
  );
};

export default Nav;
