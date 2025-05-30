import React from "react";
import TiltCard from "../component/TiltCard";

export const Hero = () => {
  return (
    <div
      className={`relative h-screen w-full bg-cover bg-center flex justify-center items-center hero-bg bg-style`}
    >
      <div className="w-5/6 flex justify-center items-center relative z-10">
        <div className=" basis-2/5 flex flex-col gap-6 text-white">
          <h1 className="text-7xl font-extrabold leading-none">
            <div>Ricardo</div>
            <div>
              <div>Lascano</div>
              <p className="uppercase text-sm tracking-widest text-white-500">
                Ingeniero Informático
              </p>
            </div>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl">
            Soy desarrollador full-stack con experiencia en la dirección de
            equipos, donde he tenido la responsabilidad de crear y presentar
            soluciones que se han implementado con éxito en varios proyectos. Lo
            que más destaco de mi persona es el{" "}
            <span className="underline underline-offset-4">compromiso</span>, ya
            que para mí ese es el contrato no verbal más importante que se puede
            hacer con las personas.
          </p>
        </div>
        <div className="basis-3/5 flex justify-center items-center">
          <TiltCard />
        </div>
      </div>
    </div>
  );
};
