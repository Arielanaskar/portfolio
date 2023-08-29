import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="col-lg-4 col-md-6 col-12"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="project"
      >
        <div className="content-project">
          <img src={image} alt={name} className="project-image" />

          <div className="card-img_hover project-header">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="project-link"
            >
              <img
                src="/images/github.png"
                alt="github"
                className="project-link-image"
              />
            </div>
          </div>
        </div>

        <div className="project-text">
          <h3 className="project-name">{name}</h3>
          <p className="project-description">{description}</p>
        </div>

        <div className="project-tag">
          {tags.map((tag) => (
            <div key={tag.name} className={`${tag.name} icon-tech`}></div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default function Project() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="projects section-padding"
      id="section_3"
    >
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className="sectionSubText">My Work</p>
          <h2 className="sectionHeadText">Projects.</h2>
        </motion.div>

        <div className="projects-text-container">
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="projects-text">
            Selama di sekolah, saya telah menguasai berbagai bahasa pemrograman,
            serta menguji keterampilan saya dengan menciptakan beragam proyek
            web yang menarik dan fungsional, berikut dibawah ini merupakan
            contoh nyata dari proyek yang pernah saya buat.
            Setiap proyek secara singkat dijelaskan dengan tautan ke repositori kode dan demo langsung di
            dalamnya.
          </motion.p>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
