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
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 760 && true);

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
    initial: {
      x: isMobile ? "-100%" : "0%",
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
      opacity: isMobile ? 0 : 1,
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
      x: isMobile ? "-100%" : "0%",
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

  return (
    <>
      {showNavBar && <Overlay clickEvent={() => animateSidebar()} />}
      <motion.nav
        variants={sidebarVariant}
        animate={sidebarAnimation}
        initial="initial"
        className={`fixed bg-Secondary flex z-20 phone:flex-col phone:h-screen phone:w-72 laptop:items-center laptop:h-12 laptop:flex-row laptop:ease-in-out laptop:duration-300 laptop:justify-center laptop:w-full ${
          scrollDirection === "Steady"
            ? "desktop:top-0"
            : scrollDirection === "Down"
            ? "desktop:-top-28"
            : "desktop:top-0"
        }`}
      >
        <h3 className="text-center phone:text-3xl font-bold text-LightPrimary px-6 py-4 laptop:py-0">
          TaskFlow
        </h3>
        <motion.ul
          variants={ulVariant}
          animate={ulAnimation}
          initial="hidden"
          className="flex phone:flex-1 phone:flex-col phone:w-full phone:mt-12 phone:gap-8 laptop:mt-0 laptop:w-[700px] laptop:gap-8 laptop:flex-row laptop:items-center"
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
        className={`rounded-md items-center p-2 right-2 top-2 w-14 flex flex-col gap-2 z-30 cursor-pointer ease-in-out duration-300 phone:fixed laptop:hidden ${
          scrollDirection === "Steady"
            ? "top-0"
            : scrollDirection === "Down"
            ? "-top-28"
            : "top-0"
        }`}
      >
        <div
          className={`${
            showNavBar &&
            "rotate-45 origin-top-left translate-y-[50%] translate-x-[16%]"
          } ease-in-out duration-100 w-[75%] border-2 border-LightPrimary`}
        ></div>
        <div
          className={`${
            showNavBar && "origin-center opacity-0"
          } ease-in-out duration-100 w-[75%] border-2 border-LightPrimary`}
        ></div>
        <div
          className={`${
            showNavBar &&
            "-rotate-45 origin-bottom-left -translate-y-[20%] translate-x-[10%]"
          } ease-in-out duration-100 w-[75%] border-2 border-LightPrimary`}
        ></div>
      </div>
    </>
  );
};

export default Nav;
