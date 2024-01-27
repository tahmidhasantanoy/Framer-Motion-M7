import { motion } from "framer-motion";

//Implementing staggerMotion ,delaychild

const child = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const parent = {
  x: { opacity: 0 },
  y: {
    opacity: 1,
    // transition: {
    //   staggerChildren: 0.5,
    // },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
      duration : 3
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ChildMotion = () => {
  return (
    <motion.div
      className="bg-orange-700 size-60 flex flex-wrap gap-6 p-4 justify-center items-center"
      variants={container}
      initial="hidden"
      animate="show"

    >
      <motion.div className="bg-lime-600 size-14" variants={item}></motion.div>
      <motion.div className="bg-lime-600 size-14" variants={item}></motion.div>
      <motion.div className="bg-lime-600 size-14" variants={item}></motion.div>
      <motion.div className="bg-lime-600 size-14" variants={item}></motion.div>
    </motion.div>
  );
};

export default ChildMotion;
