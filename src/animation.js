export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transtion: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transtion: {
      duration: 1,
    },
  },
};
/* 
const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
const container = {
  hidden: { x: 100 },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 1,
      when: "afterChildren",
    },
  },
};
 */
