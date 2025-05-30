import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { VscTerminalCmd } from "react-icons/vsc";
import { FaUbuntu } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { SiNeovim } from "react-icons/si";
import { SiInkscape } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { TbBrandAstro } from "react-icons/tb";
import ContactForm from "../component/ContactForm";

const technologies = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaSass />, label: "SASS" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaNodeJs />, label: "Node" },
  { icon: <DiMongodb />, label: "MongoDb" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaGitlab />, label: "Gitlab" },
  { icon: <RiNextjsFill />, label: "Next.js" },
  { icon: <FaReact />, label: "React" },
  { icon: <TbBrandReactNative />, label: "ReactNative" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <VscTerminalCmd />, label: "CMD" },
  { icon: <SiNeovim />, label: "Neovim" },
  { icon: <FaUbuntu />, label: "Ubuntu" },
  { icon: <FaWindows />, label: "Windows" },
  { icon: <SiInkscape />, label: "Inkscape" },
  { icon: <FaFigma />, label: "Figma" },
  { icon: <TbBrandAstro />, label: "Astro" },
];

const tagStyle = {
  display: "flex",
  alignItems: "center",
  background: "#eee",
  borderRadius: "6px",
  color: "black",
  fontSize: "0.6rem",
  fontWeight: 500,
  gap: "4px",
  padding: "0.2rem 0.6rem",
};

export const Contact = () => {
  return (
    <div
      className={`relative h-screen w-full bg-cover bg-center flex justify-center bg-style projects-bg`}
    >
      <section
        className="w-5/6  relative z-10"
        style={{
          gap: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Skills
          </h2>
          <div>
            <div
              style={{
                display: "inline-flex",
                gap: "35px",
                flexWrap: "wrap",
              }}
            >
              {technologies.map(({ icon, label }) => (
                <div key={label} style={tagStyle}>
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
