"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about-1.jpeg",
    "/images/about-2.jpeg",
    "/images/about-3.jpeg",
    "/images/about-4.jpeg",
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
                alt={`about-image-${index + 1}`}
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
          I&apos;m Yunus — someone who likes calm places, quiet moments, and not
          overcomplicating things.
        </Paragraph>
        <Paragraph className="mt-4">
          I enjoy walking around the city with music in my ears, grabbing coffee
          alone, or just sitting somewhere and people-watching.
        </Paragraph>
        <Paragraph className="mt-4">
          I&apos;m not the loudest person in the room, but I&apos;m usually the
          one who notices the little stuff. I care about being real more than
          looking impressive.
        </Paragraph>
        <Paragraph className="mt-4">
          Also, I&apos;m pretty okay with silence. Not everything needs to be
          said right away. If you&apos;re reading this, that means you&apos;re
          curious — and I respect that.
        </Paragraph>
      </div>
    </div>
  );
}
