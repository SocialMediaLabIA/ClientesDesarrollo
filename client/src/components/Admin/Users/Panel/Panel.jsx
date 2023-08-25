import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Panel({ userById }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full bg-[#282828] rounded-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <div>
          <FaRegUserCircle className="w-40 h-40" />
        </div>
        <div>
          <h2 className="text-[2rem] font-semibold capitalize">
            Bienvenido {userById.name + " " + userById.lastname}
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
