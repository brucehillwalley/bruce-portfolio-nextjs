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
                className=""
                src="/signature.png"
                alt="signature"
                width={242}
                height={40}
              />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITLE */}
            <h1 className="font-bold text-2xl text-sky-900"> SKILL </h1>
            {/* SKILL LIST */}

            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Material UI
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Cypress
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Context API
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Redux / Redux Toolkit
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Firebase
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                Contentful
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-900 text-white hover:bg-white hover:text-sky-900">
                REST API
              </div>
            </div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl text-sky-900"> EXPERIENCE </h1>
            {/* EXPERIENCE LIST */}
            <div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="">
                {/* LEFT */}

                {/* CENTER */}
                
                {/* RIGHT */}
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
