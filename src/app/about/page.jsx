"use client";
import Brain from "../../components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  //+ once:true, only animates first time
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
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
                stroke="#0c4a6e"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#0c4a6e" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#0c4a6e"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: "0px" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-sky-900"
            >
              {" "}
              SKILL{" "}
            </motion.h1>
            {/* SKILL LIST */}

            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: "0px" } : {}}
              className="flex gap-4 flex-wrap"
            >
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
            </motion.div>
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
                stroke="#0c4a6e"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#0c4a6e" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#0c4a6e"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0px" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-sky-900"
            >
              {" "}
              EXPERIENCE{" "}
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0px" } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}

              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white  text-sky-900 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior Frontend Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3  text-sky-900 text-sm italic">
                    I completed the Clarusway Fronted Bootcamp with the desire
                    to offer expertise in JavaScript frameworks.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    02/2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1  text-sky-900 rounded bg-white text-sm font-semibold w-fit">
                    Freelance
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-sky-900 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-sky-900 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white  text-sky-900 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Officer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3  text-sky-900 text-sm italic">
                    I served as an officer in Turkish Air Force.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    08/2009 - 07/2017
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1  text-sky-900 rounded bg-white text-sm font-semibold w-fit">
                    Turkish Air Force
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white  text-sky-900 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Computer Engineering Student
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3  text-sky-900 text-sm italic">
                    I graduated with a Computer Engineering Degree from TuAFA in
                    Istanbul
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    09/2005 - 08/2009
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1  text-sky-900 rounded bg-white text-sm font-semibold w-fit">
                    Turkish Air Force Academy
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-sky-900 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
