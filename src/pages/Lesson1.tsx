import { motion } from "framer-motion";

// const initial = { rotate: 0 };
// const animate = { rotate: 360 };

const parent = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
};

const fadeParent = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Lesson1 = () => {
  return (
    <>
      <div className="my-6 mb-40">
        <motion.h2
          className="text-5xl"
          variants={fadeParent}
          initial="hidden"
          animate="visible"
          transition={{ duration: 10 }}
        >
          Hey Am a <span className="text-purple-800">"Fade"</span> Example
        </motion.h2>
      </div>
      <div className="flex justify-center items-center">
        <motion.div
          className="bg-blue-600 size-40"
          variants={parent}
          initial=/* {initial} */ "initial"
          animate=/* {animate} */ "animate"
          transition={{
            ease: "easeInOut",
            duration: 3,
            type: "spring",
            // repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default Lesson1;
