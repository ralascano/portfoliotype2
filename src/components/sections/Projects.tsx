import React from "react";
import ProjectsGrid from "../component/ProjectsGrid";

export const Projects = () => {
  return (
    <div
      className={`relative h-screen w-full bg-cover bg-center flex justify-center bg-style projects-bg`}
    >
      <section
        className="w-5/6 flex flex-row justify-center relative z-10"
        style={{ gap: "3rem" }}
      >
        <ProjectsGrid />
      </section>
    </div>
  );
};
