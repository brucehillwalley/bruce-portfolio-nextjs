"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const text = "Say Hello";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID,
        }
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2  lg:h-full lg:w-1/2 flex items-center justify-center text-6xl text-sky-900">
          <div className="">
            {text.split("").map((char, index) => (
              <motion.span
                key={char + "-" + index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
            😀
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form ref={form} onSubmit={sendEmail} className=" flex flex-col gap-8 h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl justify-center p-24 text-sky-900 font-medium">
          <span>Dear İbrahim,</span>
          <textarea
            rows="6"
            name="user_message"
            className="bg-transparent border-b-2 border-b-sky-900 outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            type="text"
            name="user_email"
            className="bg-transparent border-b-2 border-b-sky-900 outline-none resize-none"
          />
          <span>Regards</span>
          <button className="bg-sky-900 text-white p-2 font-semibold rounded-xl">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
