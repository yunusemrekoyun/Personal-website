"use client";

import { Container } from "@/components/Container";
import { Highlight } from "@/components/Highlight";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-black text-primary dark:text-white flex items-center gap-2"
      >
        <span>👋</span> Selam! Ben Yunus Emre Koyun
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-secondary dark:text-neutral-300 mt-4 max-w-xl text-base md:text-lg"
      >
        Web uygulamaları, oyun geliştirme ve sistem mimarileriyle uğraşmayı
        seviyorum. <Highlight>Fullstack</Highlight> geliştiriciyim ve performans
        + estetik ikilisini birlikte ele alırım.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-secondary dark:text-neutral-300 mt-4 max-w-xl text-base md:text-lg"
      >
        React, Node.js, Unity ve MongoDB ile projeler geliştiriyor, karmaşık
        sistemleri sadeleştiriyorum. Kodu sadece yazmam, aynı zamanda anlatırım.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4 text-primary dark:text-white"
      >
        Nelerle uğraşıyorum?
      </motion.h2>

      <Products />
      <TechStack />
    </Container>
  );
}
