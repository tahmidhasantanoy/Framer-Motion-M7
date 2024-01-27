import { motion, useCycle } from "framer-motion";
import React, { useEffect, useRef } from "react";

const UseCycleHook = () => {
  const parentRef = useRef(null);

  const boxOfAxis = [
    { x: 0, y: 0 },
    { x: -100, y: -100 },
    { x: 100, y: 100 },
  ];

  //   const [x, cycle] = useCycle(0,100, -100);
  const [animate, cycle] = useCycle(...boxOfAxis);

  return (
    <div>
      <h2 className="text-2xl text-center">Use Cycle Example :(Framer Motion)</h2>
      <div className="flex justify-center mb-14">
        <div
          ref={parentRef}
          className="flex justify-center items-center size-[200px] border-red-700 border-2 mt-14"
        >
          <motion.div
            className="bg-sky-600 rounded-lg size-32 flex justify-center"
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin
            // animate = {{x:x}}
            animate={animate}
            onTap={() => cycle()}
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
