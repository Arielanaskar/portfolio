import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

export default function About() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="about section-padding"
      id="section_2"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <motion.div variants={textVariant()}>
              <p className="sectionSubText">Introduction</p>
              <h2 className="sectionHeadText">Overview.</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="about-text">
              Halo, Saya seorang pengembang web spesialis di laravel dan React Js 
              Di situs ini, Anda akan menemukan koleksi
              karya dan pengalaman yang memperlihatkan keterampilan dan keahlian
              saya dalam menciptakan situs menarik secara visual dan ramah
              pengguna. Saya seorang pembelajar cepat dan mudah bekerja sama dengan tim untuk
              solusi efisien, scalable, dan ramah pengguna. Dengan pengetahuan
              dan keahlian, saya siap membantu Anda mencapai tujuan. Terima
              kasih telah berkunjung, semoga Anda menikmati menjelajahi
              portofolio saya!
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
