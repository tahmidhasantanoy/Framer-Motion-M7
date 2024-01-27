import { motion } from "framer-motion";

/* 
//some tricks : 
1.parent & children's obejt's key must be same
2.parent & children's obejt's key value must be same the use (staggerChildren)
 */

const parent = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      staggerChildren: 1,
      duration: 3,
    },
  },
};

const fadeParent = {
  initial: { rotate: 0 },
  animate: { rotate: 180 },
};

const MotionInsideMotions = () => {
  return (
    <>
      <h1 className="text-center">MotionInsideMotions</h1>
      <div className="flex justify-center items-center">
        <motion.div
          className="bg-blue-600 size-40 flex flex-wrap justify-center items-center p-3 gap-3"
          variants={parent}
          initial=/* {initial} */ "initial"
          animate=/* {animate} */ "animate"
          //   transition={{
          //     ease: "easeInOut",
          //     duration: 3,
          //     type: "spring",
          //     // repeat: Infinity,
          //     repeatType: "reverse",
          //     staggerChildren: 1,
          //   }}
        >
          <motion.div
            variants={fadeParent}
            className="bg-sky-200 size-10"
          ></motion.div>
          <motion.div
            variants={fadeParent}
            className="bg-sky-200 size-10"
          ></motion.div>
          <motion.div
            variants={fadeParent}
            className="bg-sky-200 size-10"
          ></motion.div>
          <motion.div
            variants={fadeParent}
            className="bg-sky-200 size-10"
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default MotionInsideMotions;
