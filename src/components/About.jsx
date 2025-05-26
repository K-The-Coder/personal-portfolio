
import { DiCss3, DiDart, DiGit, DiHtml5, DiJava, DiPhp, DiReact } from "react-icons/di"
import { FaFigma, FaFlutter } from "react-icons/fa6"
import { RiFirebaseFill } from "react-icons/ri"
import { SiAndroidstudio, SiApachenetbeanside, SiIntellijidea, SiJavascript, SiMysql } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

export default function About() {
    return (
        <>
            <h3>About Me</h3>
            <p>My name is Keketso Mabule and I am an aspiring software developer specializing in mobile and web technologies.
                I am currently based in Bloemfontein, South Africa. My coding journey began in 2018 and I have been introduced to various
                programming paradigms that I still utilise to this day. As a developer, I always try to improve my skills and stay
                up-to-date with the latest trends and technologies.</p>
            <p>At the moment, I am focusing on <a href="https://react.dev/" target="_blank" title="Click here for more information about React.js">React.js</a> and <a href="https://flutter.dev/" target="_blank" title="Click here for more information about Flutter">Flutter</a> for front-end development.
                For the backend, I am focusing on <a href="https://www.java.com/en/" target="_blank" title="Click here for more information about Java">Java</a> and <a href="https://www.php.net/" target="_blank" title="Click here for more information about PHP">PHP</a>. Which one will I use for a project? That will depend on the project's requirements.</p>
            <p>Feel Free to reach out to me <a href="#contact-section">here</a> if you want to get in touch.</p>

            <p className="tech-stack-heading">My current tech stack and tools:</p>
            <div className="tech-stack">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" title="HTML5"><DiHtml5 /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" title="CSS3"><DiCss3 /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" title="JavaScript"><SiJavascript /></a>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" title="React"><DiReact /></a>
                <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer" title="Dart"><DiDart /></a>
                <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" title="Flutter"><FaFlutter /></a>
                <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" title="Java"><DiJava /></a>
                <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer" title="PHP"><DiPhp /></a>
                <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" title="MySQL"><SiMysql /></a>
                <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" title="Firebase"><RiFirebaseFill /></a>
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" title="Git"><DiGit /></a>
                <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" title="IntelliJ IDEA"><SiIntellijidea /></a>
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" title="Figma"><FaFigma /></a>
                <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer" title="Android Studio"><SiAndroidstudio /></a>
                <a href="https://netbeans.apache.org/front/main/index.html" target="_blank" rel="noopener noreferrer" title="Apache Netbeans"><SiApachenetbeanside /></a>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" title="VS Code"><VscVscode /></a>
            </div>
        </>
    )
}