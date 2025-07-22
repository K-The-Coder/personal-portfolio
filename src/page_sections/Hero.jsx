import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechLink from "../components/TechLink";

export default function Hero() {
  return (
    <>
      <p>Hi, my name is</p>
      <h1 className="first-name">Keketso</h1>
      <h3>Web and Mobile app Developer</h3>
      <p>
        I create beautiful, functional, and responsive web applications and
        other digital products.
      </p>
      <p>Reach out to me via my socials</p>
      <div className="socials">
        <TechLink
          href="mailto:@kekemabule19990216@gmail.com"
          title="Reach out via Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </TechLink>
        <TechLink
          href="https://www.linkedin.com/in/keketso-mabule-61184b1a5/"
          title="Reach out via LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </TechLink>
        <TechLink
          href="https://github.com/K-The-Coder"
          title="Look at my GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </TechLink>
      </div>
    </>
  )
}
