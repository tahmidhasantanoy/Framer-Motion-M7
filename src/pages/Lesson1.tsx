import { motion } from "framer-motion";
import { useRef } from "react";

// const initial = { rotate: 0 };
// const animate = { rotate: 360 };

const parent = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: { rotate: 360, x: [0, 200, -200, 0], y: [0, 200, -200, 0] },
};

const fadeParent = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Lesson1 = () => {
  const parentRef = useRef(null);

  return (
    <>
      <div className="my-6 mb-28 text-center">
        <motion.h2
          className="text-5xl"
          variants={fadeParent}
          initial="hidden"
          animate="visible"
          transition={{ duration: 10 }}
          whileTap={{ font: "bold" }}
        >
          Hey Am a <span className="text-purple-800">"Fade"</span> Example
        </motion.h2>
      </div>
      <div className="flex justify-center">
        <div
          ref={parentRef}
          className="flex justify-center items-center size-[400px] border-red-700 border-2"
        >
          <motion.div
            className="bg-sky-600 size-40"
            variants={parent}
            initial=/* {initial} */ "initial"
            animate=/* {animate} */ "animate"
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin
            transition={{
              ease: "easeInOut",
              duration: 3,
              type: "spring",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Lesson1;
