import { motion, useAnimationControls } from "framer-motion";  //important hook
import { useEffect, useRef } from "react";

/* Here to take custom value can take into the hooks & we can use this value of custom*/

const UseAnimationHooks2 = () => {
  const parentRef = useRef(null);

  const controll = useAnimationControls();

  useEffect(() => {
    controll.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
  }, []);

  const parent = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: { rotate: 360, x: [0, 200, -200, 0], y: [0, 200, -200, 0] },
  };

  return (
    <div>
      <div className="flex justify-center mb-14">
        <div
          ref={parentRef}
          className="flex-col justify-center items-center size-[400px] border-red-700 border-2 mt-14"
        >
          <motion.div
            className="bg-sky-600 rounded-lg size-32"
            variants={parent}
            animate={controll}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin
            custom={1}
            onClick={() => controll.stop()}
            transition={{
              ease: "easeInOut",
              duration: 3,
              type: "spring",
              //   repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="bg-sky-600 rounded-lg size-32"
            variants={parent}
            animate={controll}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin
            custom={2}
            transition={{
              ease: "easeInOut",
              duration: 3,
              type: "spring",
              //   repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="bg-sky-600 rounded-lg size-32"
            variants={parent}
            animate={controll}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin
            custom={3}
            transition={{
              ease: "easeInOut",
              duration: 3,
              type: "spring",
              //   repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default UseAnimationHooks2;
