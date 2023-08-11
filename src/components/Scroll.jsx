import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function Scroll() {
  const scrollToSection = (value) => {
    const section = document.getElementById("section_" + value);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90,
        behavior: "smooth",
      });
    }
  };
  return (
    <a
      href=" "
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(2);
      }}
      className="scroll-down-link"
    >
      <motion.div
        variants={fadeIn("down", "tween", 2.0, 1)}
        initial="hidden"
        animate="show"
        className="scroll-down"
      >
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="scroll-icon"
        />
      </motion.div>
    </a>
  );
}
