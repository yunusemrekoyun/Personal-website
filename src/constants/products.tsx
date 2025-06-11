import kozmetik1 from "public/images/kozmetik-site-1.png";
import kozmetik2 from "public/images/kozmetik-site-2.png";
import kozmetik3 from "public/images/kozmetik-site-3.png";

import cini1 from "public/images/cini-site-1.png";
import cini2 from "public/images/cini-site-2.png";
import cini3 from "public/images/cini-site-3.png";

import bbTan1 from "public/images/bbtan-image-1.png";
import bbTan2 from "public/images/bbtan-image-2.png";
import bbTan3 from "public/images/bbtan-image-3.png";

import colorBomb1 from "public/images/color-bomb-1.png";
import colorBomb2 from "public/images/color-bomb-2.png";
import colorBomb3 from "public/images/color-bomb-3.png";

export const products = [
  {
    href: "https://kozmetik.com",
    title: "Kozmetik Sitesi",
    description: "Responsive and fully integrated e-commerce admin platform.",
    thumbnail: kozmetik1,
    images: [kozmetik1, kozmetik2, kozmetik3],
    stack: ["React", "Express", "MongoDB", "Node.js"],
    slug: "kozmetik-sitesi",
    content: (
      <div>
        <p>
          This project was built on the foundation of a Udemy course by Emin
          Basbayan, and then personalized with my own improvements. It&apos;s a
          fullstack MERN application with{" "}
          <strong>token-based authentication</strong>.
        </p>
        <p>
          The admin panel includes dynamic campaign management, product control,
          sales statistics, and user comment moderation. Fully responsive on
          both desktop and mobile devices.
        </p>

        <hr className="my-6" />

        
      </div>
    ),
  },
  {
    href: "https://cini.com",
    title: "Çini Ürünleri",
    description: "Product showroom site built for a real client.",
    thumbnail: cini1,
    images: [cini1, cini2, cini3],
    stack: ["React", "Express", "MongoDB", "Node.js"],
    slug: "cini-urunleri",
    content: (
      <div>
        <p>
          This is a fully dynamic showroom website made for a real client. Every
          section is manageable from the admin panel. No sales system — just
          clean product showcasing.
        </p>
        <p>
          Products and blogs are displayed in gallery style with individual
          pages. The entire site is responsive and optimized for both desktop
          and mobile.
        </p>

        <hr className="my-6" />

      </div>
    ),
  },
  {
    href: "https://bbtan.com",
    title: "BBTan Clone",
    description: "Minimalist block-breaking game built with Unity.",
    thumbnail: bbTan1,
    images: [bbTan1, bbTan2, bbTan3],
    stack: ["Unity", "C#"],
    slug: "bbtan-klonu",
    content: (
      <div>
        <p>
          A project I developed during university, inspired by BBTAN. The game
          is simple but cleanly written, with solid gameplay logic.
        </p>
        <p>
          The landing page features 3 in-game screenshots. I&apos;m planning to
          embed the game as a WebGL build soon.
        </p>

        <hr className="my-6" />

   
      </div>
    ),
  },
  {
    href: "https://colorbomb.com",
    title: "Color Bomb Game",
    description: "Match-3 style mobile puzzle game with colorful design.",
    thumbnail: colorBomb1,
    images: [colorBomb1, colorBomb2, colorBomb3],
    stack: ["Unity", "C#"],
    slug: "color-bomb-oyunu",
    content: (
      <div>
        <p>
          I used pre-designed assets, but all the level design, logic, and
          development are my own. The game currently runs on mobile, and
          I&apos;m preparing a WebGL version as well.
        </p>
        <p>
          Classic Match-3 mechanics like color matching, special items, and
          visual effects are included. It&apos;s simple but fun to play.
        </p>

        <hr className="my-6" />


      </div>
    ),
  },
];
