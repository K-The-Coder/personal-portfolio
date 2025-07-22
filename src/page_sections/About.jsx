import {
  DiCss3,
  DiDart,
  DiGit,
  DiHtml5,
  DiJava,
  DiPhp,
  DiReact,
} from "react-icons/di";
import { FaFigma, FaFlutter } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import {
  SiAndroidstudio,
  SiApachenetbeanside,
  SiIntellijidea,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import TechLink from "../components/TechLink";

export default function About() {
  const techStack = [
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      title: "HTML5",
      icon: <DiHtml5 />,
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      title: "CSS3",
      icon: <DiCss3 />,
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      title: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      href: "https://react.dev/",
      title: "React",
      icon: <DiReact />,
    },
    {
      href: "https://dart.dev/",
      title: "Dart",
      icon: <DiDart />,
    },
    {
      href: "https://flutter.dev/",
      title: "Flutter",
      icon: <FaFlutter />,
    },
    {
      href: "https://www.java.com/en/",
      title: "Java",
      icon: <DiJava />,
    },
    {
      href: "https://www.php.net/",
      title: "PHP",
      icon: <DiPhp />,
    },
    {
      href: "https://www.mysql.com/",
      title: "MySQL",
      icon: <SiMysql />,
    },
    {
      href: "https://firebase.google.com/",
      title: "Firebase",
      icon: <RiFirebaseFill />,
    },
    {
      href: "https://git-scm.com/",
      title: "Git",
      icon: <DiGit />,
    },
    {
      href: "https://www.jetbrains.com/idea/",
      title: "IntelliJ IDEA",
      icon: <SiIntellijidea />,
    },
    {
      href: "https://www.figma.com/",
      title: "Figma",
      icon: <FaFigma />,
    },
    {
      href: "https://developer.android.com/studio",
      title: "Android Studio",
      icon: <SiAndroidstudio />,
    },
    {
      href: "https://netbeans.apache.org/front/main/index.html",
      title: "Apache Netbeans",
      icon: <SiApachenetbeanside />,
    },
    {
      href: "https://code.visualstudio.com/",
      title: "VS Code",
      icon: <VscVscode />,
    },
  ];

  return (
    <>
      <h3>About Me</h3>
      <p>
        My name is Keketso Mabule and I am an aspiring software developer
        specializing in mobile and web technologies. I am currently based in
        Bloemfontein, South Africa. My coding journey began in 2018 and I have
        been introduced to various programming paradigms that I still utilise to
        this day. As a developer, I always try to improve my skills and stay
        up-to-date with the latest trends and technologies.
      </p>
      <p>
        At the moment, I am focusing on{" "}
        <TechLink
          href="https://react.dev/"
          title="Click here for more information about React.js"
        >
          React.js
        </TechLink>{" "}
        and{" "}
        <TechLink
          href="https://flutter.dev/"
          title="Click here for more information about Flutter"
        >
          Flutter
        </TechLink>{" "}
        for front-end development. For the backend, I am focusing on{" "}
        <TechLink
          href="https://www.java.com/en/"
          title="Click here for more information about Java"
        >
          Java
        </TechLink>{" "}
        and{" "}
        <TechLink
          href="https://www.php.net/"
          title="Click here for more information about PHP"
        >
          PHP
        </TechLink>
        . Which one will I use for a project? That will depend on the project's
        requirements.
      </p>
      <p>
        Feel Free to reach out to me <a href="#contact-section">here</a> if you
        want to get in touch.
      </p>

      <p className="tech-stack-heading">My current tech stack and tools:</p>
      <div className="tech-stack">
        {techStack.map(({ href, title, icon }) => (
          <TechLink key={title} href={href} title={title}>
            {icon}
          </TechLink>
        ))}
      </div>
    </>
  )
}