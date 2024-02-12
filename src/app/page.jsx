"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-sky-900">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-sky-900">
            As a web developer, I am dedicated to crafting digital experiences
            that shape the future. Through my portfolio site, I showcase my
            passion for designing tomorrow's online landscape. With a focus on
            user-centric design and innovative technologies, I strive to create
            websites and applications that elevate the digital experience. Join
            me on this journey as we craft the digital experiences of today and
            design the tomorrow of the web.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="p-4 rounded-lg right-1 ring-black bg-sky-900 text-white font-semibold">
              View My Work
            </button>
            <button className="p-4 rounded-lg right-1 ring-black border-solid border-2 border-sky-900 text-sky-900 font-semibold">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
