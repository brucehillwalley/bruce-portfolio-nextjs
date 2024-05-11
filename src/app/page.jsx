"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full gap-2 flex flex-col md:gap-4  lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 md:h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero11.png" alt="hero" fill className="object-contain" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-2/3 gap-4 md:h-1/2 lg:h-full lg:w-1/2 flex flex-col lg:gap-8 items-center justify-center ">
          {/* TITLE */}
          <h1 className="text-2xl s:text-4xl lg:text-5xl font-bold text-sky-900">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-sky-900">
          Leveraging the power of the MERN stack to shape the digital world of tomorrow, I develop user-centric and innovative web applications. MERN, which combines the flexibility of MongoDB, the speed of Express.js, the user interface power of React.js, and the server-side advantages of Node.js, allows me to encompass all application layers using a single programming language, JavaScript. My aim is to deliver intuitive, fast, and scalable digital solutions; the work in my portfolio reflects my vision for the future of the web. 
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg right-1 bg-sky-900 border-solid border-2 border-sky-900  text-white font-semibold">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg right-1 border-solid border-2 text-sky-900  border-sky-900  bg-white font-semibold">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
