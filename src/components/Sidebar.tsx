"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { DarkModeToggle } from "./DarkModeToggle"; // en üste import et

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-neutral-100 dark:bg-neutral-900 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between transition-colors"
          >
            <div className="flex-1 overflow-visible">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div
              onClick={() => isMobile() && setOpen(false)}
              className="space-y-4"
            >
              <Badge href="/resume" text="Read Resume" />
              <DarkModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 dark:border-neutral-700 rounded-full backdrop-blur-sm flex items-center justify-center z-50 bg-white dark:bg-neutral-800"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary dark:text-white" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary dark:text-neutral-400 hover:text-primary dark:hover:text-white transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) &&
              "bg-white dark:bg-neutral-800 shadow-lg text-primary dark:text-white"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500 dark:text-sky-400"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading
        as="p"
        className="text-sm md:text-sm lg:text-sm pt-10 px-2 text-secondary dark:text-neutral-400"
      >
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary dark:text-neutral-400 hover:text-primary dark:hover:text-white transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon className="h-4 w-4 flex-shrink-0" />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  const [isBitmoji, setIsBitmoji] = useState(false);

  const handleClick = () => {
    setIsBitmoji((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center mb-6 overflow-visible relative z-50">
      <motion.div
        onTap={handleClick}
        whileTap={{
          y: [-10, -60, 0],
          rotate: [0, 30, -20, 0],
          scale: [1, 1.6, 0.9, 1],
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
        className="relative z-[999]"
      >
        <Image
          src={
            isBitmoji
              ? "/images/profile-picture/bitmoji.png"
              : "/images/profile-picture/profile.jpg"
          }
          alt="Yunus Emre Koyun"
          width={100}
          height={100}
          className="rounded-full object-cover aspect-square drop-shadow-2xl transition"
        />
      </motion.div>

      <p className="font-bold text-primary dark:text-white text-base mt-2">
        Yunus Emre Koyun
      </p>
      <p className="font-light text-secondary dark:text-neutral-400 text-sm">
        Fullstack Developer
      </p>
    </div>
  );
};
