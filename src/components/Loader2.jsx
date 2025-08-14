import React from "react";
import { motion } from "framer-motion";

const Loader2 = ({className}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
      className={` flex justify-center items-center w-full h-screen bg-black`}
    >
      <div className="flex flex-col justify-center items-center">
        <motion.i
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0 }}
          className="lg:text-8xl text-5xl text-[#ffeb3b] font-semibold"
        >
          VARCHAS&apos;24
        </motion.i>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          className="lg:text-4xl text-2xl text-[#fff495]"
        >
          IIT JODHPUR
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader2;