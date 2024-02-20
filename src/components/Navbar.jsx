"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        //+ it effects listItemVariants as a children
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className=" rounded-full p-1 font-extrabold flex items-center justify-center"
        >
         <Image src="/logo.png" alt="logo" width={100} height={24} />
          {/* <span className="text-white mr-1 ">ibal</span>
          <span className="w-12 h-8 rounded-full bg-white text-sky-900 flex items-center justify-center font-extrabold ">
            .dev
          </span> */}
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://github.com/brucehillwalley">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/ibrahim-balcin/">
          <Image src="/linkedin.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://github.com/brucehillwalley">
          <Image src="/dribbble.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://github.com/brucehillwalley">
          <Image src="/instagram.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://github.com/brucehillwalley">
          <Image src="/pinterest.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://github.com/brucehillwalley">
          <Image src="/facebook.png" alt="github" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSİVE MENU */}

      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-sky-900 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-sky-900 rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-sky-900 rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LİST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-sky-900 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
