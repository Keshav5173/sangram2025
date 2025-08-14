import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const AnimatedProfileCard = ({ imgPath, Name, Designation, instaLink, linkedIn }) => {
  return (
    <motion.div 
    className="p-[4px] gradient-border">
      <motion.div
        //whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative text-center bg-black text-gray-500 rounded-2xl p-3 overflow-hidden"
      >
        <img
          className="mx-auto mb-4 w-52 h-52 rounded-full object-cover"
          src={imgPath}
          alt=""
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
          {Name}
        </h3>
        <p>{Designation}</p>
        <ul className="flex justify-center mt-4 space-x-4">
          <li>
            <a
              href={instaLink}
              className="text-[#ea4c89] text-2xl hover:text-white dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaInstagram />
            </a>
          </li>
          <li>
            <a
              href={linkedIn}
              className="text-[#3a61b0] text-2xl hover:text-white dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaLinkedin />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedProfileCard;