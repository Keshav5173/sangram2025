// utils/motion.js

export const textVariant = () => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5, // faster
        delay: 0,      // no delay
      },
    },
  };
};

export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.5) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        duration: duration, // faster
        delay: 0,           // removed delay
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.5) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: duration,
        delay: 0, // removed delay
      },
    },
  };
};

export const slideIn = (direction, type = "tween", delay = 0, duration = 0.5) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        duration: duration,
        delay: 0, // removed delay
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren, // small gap only
        delayChildren: 0,                 // no big wait
      },
    },
  };
};
