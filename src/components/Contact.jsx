import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function Contact() {
  return (
    <section className="section-padding contact pb-0" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subscription_box text-center">
              <p className="sectionSubText">Contact</p>
              <h2>Get In Touch.</h2>
              <div className="social-media">
                <a href="https://instagram.com/arilanaskar" target="blank">
                  <img
                    src="/images/social-media/instagram.png"
                    alt=""
                    srcset=""
                  />
                </a>
                <a
                  href="https://web.facebook.com/ariel.anaskar.95"
                  target="blank"
                >
                  <img
                    src="/images/social-media/facebook.png"
                    alt=""
                    srcset=""
                  />
                </a>
                <a href="https://wa.me/6285697296936" target="blank">
                  <img
                    src="/images/social-media/whatsapp.png"
                    alt=""
                    srcset=""
                  />
                </a>
                <a
                  href="mailto:arielanaskar95@gmail.com"
                  target="blank"
                >
                  <img src="/images/social-media/email.png" alt="" srcset="" />
                </a>
                <a href="https://github.com/Arielanaskar/" target="blank">
                  <img src="/images/github.png" alt="" srcset="" />
                </a>
              </div>
              <hr />
              <p className="mt-5 text-white">
                Made with by &hearts;{" "}
                <a href="https://instagram.com/arilanaskar_" target="blank">
                  Ariel anaskar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
