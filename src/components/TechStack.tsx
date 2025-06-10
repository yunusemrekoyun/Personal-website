import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    { title: "Next.js", src: "/images/logos/next.png", className: "h-10 w-14" },
    { title: "AWS", src: "/images/logos/aws.webp", className: "h-10 w-10" },
    { title: "Figma", src: "/images/logos/figma.png", className: "h-10 w-8" },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",
      className: "h-10 w-10",
    },
    { title: "Node", src: "/images/logos/node.png", className: "h-10 w-12" },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4 text-neutral-800 dark:text-neutral-100"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <div
            key={item.src}
            className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg shadow-sm dark:shadow-md mr-4 mb-4 transition duration-200 flex items-center justify-center"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={200}
              height={200}
              className={twMerge("object-contain", item.className)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
