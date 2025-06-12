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

import folderNavigator1 from "public/images/folder-navigator-1.png";

export const products = [
  {
    href: "https://kozmetik.com",
    title: "E-Commerce Cosmetic Site",
    description:
      "A responsive and fully-featured e-commerce platform built with the MERN stack and token-based authentication.",
    thumbnail: kozmetik1,
    images: [kozmetik1, kozmetik2, kozmetik3],
    stack: ["React", "Express", "MongoDB", "Node.js"],
    slug: "kozmetik-sitesi",
    content: (
      <div>
        <p>
          A responsive and fully-featured e-commerce platform built with the{" "}
          <strong>MERN stack</strong> and{" "}
          <strong>token-based authentication</strong>. Designed for both desktop
          and mobile users, the platform delivers a seamless shopping experience
          from product discovery to checkout.
        </p>
        <p>
          Includes a powerful admin dashboard for managing dynamic campaigns,
          products, inventory, user comments, and viewing real-time sales
          analytics — all wrapped in a clean and intuitive interface.
        </p>

        <hr className="my-6" />
      </div>
    ),
  },
  {
    href: "https://cini.com",
    title: "Product and Blog Showroom",
    description:
      "A fully dynamic and responsive product showroom platform developed for a real client.",
    thumbnail: cini1,
    images: [cini1, cini2, cini3],
    stack: ["React", "Express", "MongoDB", "Node.js"],
    slug: "cini-urunleri",
    content: (
      <div>
        <p>
          A fully dynamic and responsive product showroom platform developed for
          a real client. The site features an admin dashboard for complete
          control over products, categories, blogs, and user interactions —
          without any sales system, making it ideal for portfolio-style product
          presentation.
        </p>
        <p>
          Products and blog posts are displayed in an elegant, gallery-style
          layout with individual detail pages. Users can like, comment, and save
          items to their wishlist. The platform also includes role-based access
          control, image compression, and rich-text editing — all optimized for
          a smooth experience across desktop and mobile devices.
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
  {
    href: "https://foldernavigator.com",
    title: "Folder Navigator App",
    description:
      "Lightweight folder explorer built with Electron and voice/text command support.",
    thumbnail: folderNavigator1,
    images: [folderNavigator1],
    stack: ["Electron", "JavaScript", "Node.js"],
    slug: "folder-navigator-app",
    content: (
      <div>
        <p>
          Folder Navigator is a lightweight Electron application that lets you
          navigate folders at lightning speed using voice or text commands. It
          features back-forward history management, list-grid view, and smart
          search, allowing you to effortlessly explore your files in one screen.
        </p>

        <hr className="my-6" />
      </div>
    ),
  },
];
