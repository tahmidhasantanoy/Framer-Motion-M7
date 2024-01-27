import { motion } from "framer-motion";
const Gesture = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <motion.button
          className="bg-cyan-600 px-3 py-2 text-white rounded-md"
          whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.8 }}
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
};

export default Gesture;
