import { motion, useAnimationControls } from "framer-motion";
import { useRef, useState } from "react";
import UseAnimationHooks2 from "./UseAnimationHooks2";

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

const UseAnimationHooks = () => {
  const parentRef = useRef(null);
  const [toggle, setToggle] = useState(true);

  const controll = useAnimationControls();

  const handleToggle = () => {
    if (toggle) {
      setToggle(!toggle);
      controll.start({ x: 200 });
    } else {
      setToggle(!toggle);
      controll.start({ x: -200 });
    }
  };
  return (
    <div>
      <div className="flex justify-center .mb-96">
        <div
          ref={parentRef}
          className="flex justify-center items-center size-[400px] border-red-700 border-2 mt-14"
        >
          <motion.div
            className="bg-sky-600 size-40"
            variants={parent}
            animate={controll}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin
            transition={{
              ease: "easeInOut",
              duration: 3,
              type: "spring",
              //   repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <div className="flex items-end">
            <button
              onClick={handleToggle}
              className="bg-green-700 px-3 py-2 mt-72 rounded-md"
            >
              {toggle ? "Foward" : "Backward"}
            </button>
          </div>
        </div>
      </div>

      <UseAnimationHooks2/>
    </div>
  );
};

export default UseAnimationHooks;
