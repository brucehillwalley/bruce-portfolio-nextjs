"use client";

import { motion } from "framer-motion";

const PageTransitionProvider = ({ children }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionProvider;