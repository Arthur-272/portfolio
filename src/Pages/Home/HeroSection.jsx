import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Radhey</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Want to geek out over tech with me? I'm always up for a chat and would love to connect!
          </p>
        </div>
        
        <div className="hero--section--actions">
          <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
            <button className="btn btn-primary">Get in Touch</button>
          </Link>
          <div className="hero--section--social-icons">
            <a href="https://github.com/Arthur-272" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/radhey-patel-81952213a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/IMG_4516-removebg-preview.png" alt="Hero Section" />
      </div>
    </section>
  );
}
