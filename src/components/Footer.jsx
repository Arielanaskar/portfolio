import React from "react";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Ariel Anaskar</h1>
        <ul className="footer-list">
          <li>
            <a
              href=" "
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(1);
              }}
              className="footer-link"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href=" "
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(2);
              }}
              className="footer-link"
            >
              About
            </a>
          </li>

          <li>
            <a
              href=" "
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(3);
              }}
              className="footer-link"
            >
              Projects
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://instagram.com/arilanaskar_/"
            className="footer-social-link"
            target="blank"
          >
            <img src="/images/social-media/instagram.png" alt="" srcset="" />
          </a>

          <a
            href="https://github.com/Arielanaskar?tab=repositories"
            className="footer-social-link"
            target="blank"
          >
            <img src="/images/github.png" alt="" srcset="" />
          </a>

          <a
            href="https://web.facebook.com/ariel.anaskar.95"
            className="footer-social-link"
            target="blank"
          >
            <img src="/images/social-media/facebook.png" alt="" srcset="" />
          </a>

          <a
            href="https://wa.me/6285697296936"
            className="footer-social-link"
            target="blank"
          >
            <img src="/images/social-media/whatsapp.png" alt="" srcset="" />
          </a>

          <a
            href="mailto:arielanaskar95@gmail.com"
            className="footer-social-link"
            target="blank"
          >
            <img src="/images/social-media/email.png" alt="" srcset="" />
          </a>
        </div>
        <span className="footer-copy">
          &#169; Ariel Anaskar. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
