import { motion, useCycle } from "framer-motion";
import React, { useEffect, useRef } from "react";

const parent = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: { rotate: 360, x: [0, 200, -200, 0], y: [0, 200, -200, 0] },
};

const UseCycleHook = () => {
  const parentRef = useRef(null);

  const [x, cycle] = useCycle(100, -100);

  return (
    <div>
      <div className="flex justify-center mb-14">
        <h2 className="text-2xl">Use Cycle Example :</h2>
        <div
          ref={parentRef}
          className="flex-col justify-center items-center size-[400px] border-red-700 border-2 mt-14"
        >
          <motion.div
            className="bg-sky-600 rounded-lg size-32"
            variants={parent}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin
            transition={{
              ease: "easeInOut",
              duration: 3,
              type: "spring",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default UseCycleHook;
