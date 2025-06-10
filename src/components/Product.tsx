"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );

  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={product.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height={1000}
          width={1000}
          className="rounded-md object-contain"
        />
        <div className="absolute inset-0 pointer-events-none after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-b after:from-transparent after:to-white dark:after:to-neutral-900 after:z-10" />{" "}
      </motion.div>

      <div className="flex flex-row justify-center my-8 flex-wrap">
        {product.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt="product thumbnail"
              height={1000}
              width={1000}
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-4 border rounded-lg border-neutral-100 dark:border-neutral-700"
            />
          </button>
        ))}
      </div>

      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1">{product.title}</Heading>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs md:text-xs lg:text-xs bg-gray-50 dark:bg-neutral-700 text-secondary dark:text-neutral-200 px-2 py-1 rounded-sm"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      <div>
        <Paragraph className="max-w-xl mt-4 text-neutral-600 dark:text-neutral-300">
          {product.description}
        </Paragraph>
      </div>

      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 dark:text-neutral-300 dark:prose-invert">
        {product?.content}
      </div>

      <a
        href={product.href}
        target="__blank"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 dark:bg-neutral-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 dark:group-hover/button:bg-white/10 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
      >
        Live Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </a>
    </div>
  );
};
