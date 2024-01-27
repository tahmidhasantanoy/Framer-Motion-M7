import { motion } from "framer-motion";
const Gesture = () => {
  const buttonGesture = {
    hover: {
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
      tap: { scale: 0.8 },
    },
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <motion.button
          className="bg-cyan-600 px-3 py-2 text-white rounded-md"
          variants={buttonGesture}
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => console.log("start")}
          onHoverEnd={() => console.log("end")}
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
};

export default Gesture;
