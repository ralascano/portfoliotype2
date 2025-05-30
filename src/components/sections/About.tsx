import React from "react";
import { experiences, education } from "../../data/timelineData";
import CardCollapse from "../component/CardCollapse";

export const About = () => {
  return (
    <div
      className={`relative h-screen w-full bg-cover bg-center flex justify-center bg-style about-bg`}
    >
      <section
        className="w-5/6 flex flex-row justify-center relative z-10"
        style={{ gap: "3rem", paddingTop: "14vh" }}
      >
        <div style={{ flex: 1 }}>
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Experiencia Profesional
          </h2>
          <div
            className="flex flex-row items-center gap-6"
            style={{ height: "50vh" }}
          >
            {experiences.map((exp, index) => (
              <CardCollapse key={`exp-${index}`} {...exp} />
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Educación
          </h2>
          <div
            className="flex flex-row items-center gap-6 "
            style={{ height: "50vh" }}
          >
            {education.map((edu, index) => (
              <CardCollapse key={`edu-${index}`} {...edu} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
