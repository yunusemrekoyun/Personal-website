"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?...",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?...",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?...",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?...",
  ];

  return (
    <div className="text-secondary dark:text-neutral-100">
      {/* Görsel Galerisi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <div
              className="overflow-hidden rounded-md shadow-xl 
              transition-transform duration-200 bg-white dark:bg-neutral-100"
            >
              <Image
                src={image}
                width={200}
                height={400}
                alt="about"
                className="object-cover block w-full h-40 md:h-60 
                transform transition-transform duration-200 hover:rotate-0"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Metin Alanı */}
      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m John Doe - a passionate developer, avid writer,
          and a connoisseur of awesome design. Welcome to my corner of the
          digital world!
        </Paragraph>
        <Paragraph className="mt-4">
          Since the early days of my journey, I&apos;ve been captivated by the
          art of crafting exceptional digital experiences...
        </Paragraph>
        <Paragraph className="mt-4">
          But my journey doesn&apos;t stop at coding. With a heart full of
          words...
        </Paragraph>
        <Paragraph className="mt-4">
          What sets me apart is my unwavering appreciation for design...
        </Paragraph>
        <Paragraph className="mt-4">
          Through this website, I aim to share my insights, experiences, and
          creations...
        </Paragraph>
        <Paragraph className="mt-4">
          Join me on this journey of bytes and narratives...
        </Paragraph>
        <Paragraph className="mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
