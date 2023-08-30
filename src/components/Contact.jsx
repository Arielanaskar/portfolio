import { motion } from "framer-motion";
import { textVariant, staggerContainer, slideIn } from "../utils/motion";

export default function Contact() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-padding"
      id="section_4"
    >
      <motion.div
        variants={textVariant()}
        className="text-center contact-header"
      >
        <p className="sectionSubText">Contact Me</p>
        <h2 className="gradient-2">Get in Touch.</h2>
      </motion.div>

      <div className="contact-container">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="contact-content"
          style={{ marginBottom: "-0px" }}
        >
          <form className="contact-form">
            <div className="gradient-bar"></div>
            <h3 className="contact-title">
              Say Hello <span className="wave">👋🏻</span>
            </h3>
            <div className="contact-form-div">
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact-form-div">
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="What do you want to say?"
              ></textarea>
            </div>

            <button className="button-contact">
              {" "}
              Send Message
              <svg
                class="button-contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#fff"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#fff"
                ></path>
              </svg>
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="contact-content"
        >
          <div className="contact-earth">
            <svg
              id="stars"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  className="stars"
                  fill="#FFF"
                  d="M112.456 363.093c-.056 7.866-6.478 14.197-14.344 14.142 7.866.056 14.198 6.48 14.142 14.345.056-7.866 6.48-14.198 14.345-14.142-7.868-.057-14.2-6.48-14.144-14.345zM432.436 274.908c-.056 7.866-6.478 14.198-14.344 14.142 7.866.057 14.197 6.48 14.142 14.345.056-7.866 6.48-14.197 14.345-14.142-7.868-.056-14.2-6.48-14.144-14.345zM159.75 58.352c-.12 16.537-13.62 29.848-30.157 29.73 16.537.118 29.848 13.62 29.73 30.156.118-16.537 13.62-29.848 30.156-29.73-16.54-.117-29.85-13.62-29.73-30.156z"
                />
              </g>
            </svg>
            <motion.div
              animate={{
                y: [-5, 10, -5],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                repeatType: "reverse",
                easings: "easeInOut",
              }}
              style={{
                height: "450px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="earth-animation"
            >
              <img src="/images/earth.png" alt="" srcset="" width="100%" />
            </motion.div>
            <motion.div
              animate={{
                rotate: ["20deg", "-20deg"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                easings: "easeInOut",
              }}
              className="astronout"
            >
              <img src="/images/astronout.png" alt="" />
            </motion.div>
            {/* <img src="/images/rocket.gif" alt="" srcset="" className="rocket" /> */}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}