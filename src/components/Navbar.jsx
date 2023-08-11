import { useEffect, useState } from "react";

export default function Navbar() {
  const sectionArray = [1, 2, 3, 4];
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionArray.map((value) => {
        const section = document.getElementById("section_" + value);
        return section.offsetTop - 90;
      });
      
      const scrollPosition = window.scrollY + 1;

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= offsets[i]) {
          setActiveSection(i + 1);
          break;
        }
      }

      const stickyWrapper = document.querySelector("#sticky-wrapper");
      const scrollTop = window.scrollY;
      if (scrollTop >= 10) {
        stickyWrapper.classList.add("sticky-wrapper", "is-sticky");
      } else {
        stickyWrapper.classList.remove("sticky-wrapper", "is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
    <div id="sticky-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="index.html" className="navbar-brand mx-lg-0">
            <img src="/images/star.png" alt="" className="star-logo" />
            Portfolio.
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === 1 ? "active" : "inactive"
                  }`}
                  href=" "
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(1);
                  }}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === 2 ? "active" : "inactive"
                  }`}
                  href=" "
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(2);
                  }}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === 3 ? "active" : "inactive"
                  }`}
                  href=" "
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(3);
                  }}
                >
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === 4 ? "active" : "inactive"
                  }`}
                  href=" "
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(4);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
