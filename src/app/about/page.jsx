"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutPage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:48 xl:gap-64 ">
          {/* BIOGRAPY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl text-sky-900"> BIOGRAPY </h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg text-sky-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              ex saepe ea voluptatibus assumenda quasi consequatur ad similique,
              iste aut commodi nesciunt nostrum blanditiis dolor.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-sky-900">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN */}
            <div className="self-end">
              <Image
                className="-mt-36"
                src="/signature.png"
                alt="signature"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITLE */}
            <h1 className="font-bold text-2xl text-sky-900"> SKILL </h1>
            {/* SKILL LIST */}
          <div className=""></div>
            {/* SKILL SCROLL SVG */}
            
          
          
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
