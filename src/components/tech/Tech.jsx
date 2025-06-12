import { TbBrandKotlin } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiJetpackcompose } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { motion } from "framer-motion";
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
const Tech = () => {
  return (
    <div className="border-b border-neutral-500 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* kotlin  */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="Kotlin"
        >
          <TbBrandKotlin className="text-7xl text-amber-600" />
        </motion.div>
        {/* Jetpackcompose  */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="Jetpack compose"
        >
          <SiJetpackcompose className="text-7xl text-blue-500" />
        </motion.div>
        {/*sql  */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="SQL"
        >
          <BiLogoPostgresql className="text-7xl text-purple-600" />
        </motion.div>
        {/* Androidstudio  */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="Android studio"
        >
          <SiAndroidstudio className="text-7xl text-cyan-400" />
        </motion.div>
        {/* Python  */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="Python"
        >
          <FaPython className="text-7xl text-yellow-400" />
        </motion.div>

        {/* react 
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 tooltip"
          data-tip="React"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Tech;
