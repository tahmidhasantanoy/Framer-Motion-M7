import { motion } from "framer-motion";

// const initial = { rotate: 0 };
// const animate = { rotate: 360 };

const parent = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
};

const Lesson1 = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="bg-blue-600 size-40"
        variants={parent}
        initial=/* {initial} */ "initial"
        animate=/* {animate} */ "animate"
        transition={{ duration: 3, type: "spring" }}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
