import { FaDownload } from "react-icons/fa6"
import { fadeIn, zoomIn } from "../utils/motion";
import { motion } from 'framer-motion';
import Scroll from "./Scroll";

export default function Hero() {
  return (
    <section
      className="hero d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 hero-col-pargf">
            <div className="hero-text">
              <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
              >
                <h3 className="hero-title mb-0">Hi, I'm Ariel Anaskar</h3>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "tween", 0.8, 1)}
                initial="hidden"
                animate="show"
              >
                <h4>
                  I am just a web development maestro <br /> who brings beauty
                  to every line of code i write.
                </h4>
              </motion.div>
              <motion.div
                variants={zoomIn(1.4, 1)}
                initial="hidden"
                animate="show"
              >
                <p className="mb-4">
                  <a
                    className="custom-btn btn custom-link btn-cv"
                    href="/file/ArielAnaskar.pdf" download="ArielAnaskar CV" type="pdf"
                  >
                    Download CV &nbsp; &nbsp;
                    <FaDownload />
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-5 col-12 hero-col-image">
            <div className="hero-image-wrap"></div>
          </div>
        </div>
      </div>
      <Scroll />
    </section>
  );
}
