import { FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";
import { PiFileSqlFill } from "react-icons/pi";
import { SiTensorflow } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-slate-400">Technologies</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCplusplus className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <PiFileSqlFill className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow className="text-7xl text-red-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
