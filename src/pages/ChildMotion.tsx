import { motion } from "framer-motion";

//Implementing staggerMotion ,delaychild

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
      duration: 3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ChildMotion = () => {
  return (
    <>
      <h1 className="text-balance text-3xl ml-10">staggerChildren Example </h1>
      <motion.div
        className="bg-orange-700 size-60 flex flex-wrap gap-6 p-4 justify-center items-center ml-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="bg-lime-600 size-14"
          variants={item}
        ></motion.div>
        <motion.div
          className="bg-lime-600 size-14"
          variants={item}
        ></motion.div>
        <motion.div
          className="bg-lime-600 size-14"
          variants={item}
        ></motion.div>
        <motion.div
          className="bg-lime-600 size-14"
          variants={item}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default ChildMotion;
