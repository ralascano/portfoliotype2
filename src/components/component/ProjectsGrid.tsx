import { motion } from "framer-motion";
import clsx from "clsx";

const projectsData = {
  title: "Proyectos",
  content: [
    {
      title: "Golden Comunicaciones GDcomunications S.A.",
      content: "Desarrollador web y analista de código",
      link: "",
      tags: [
        "Developer",
        "Web Developer",
        "Angular",
        "Java",
        "Javascript",
        "Nodejs",
        "Express.js",
        "ReactJs",
        "Back-end",
        "Front-end",
      ],
    },
    {
      title: "Blog de Música",
      content:
        "Un blog de música que renderiza archivos en formato Markdown (md)",
      link: "https://music-blog-r.netlify.app/",
      tags: [
        "Vite",
        "Javascript",
        "Node.js",
        "Express.js",
        "React.js",
        "Frontend",
      ],
    },
    {
      title: "CDN de Imágenes para Blog de Música",
      content: "Un CDN que aloja las imágenes utilizadas en un blog de música",
      link: "https://cdn-blog.netlify.app/",
      tags: ["JavaScript", "Frontend", "CDN"],
    },
    {
      title: "Angular ejemplo de factura (Invoice)",
      content:
        "Un ejemplo de una factura para gestionar formularios y estados dentro de Angular",
      tags: ["angular", "formulario", "componentes"],
      link: "https://github.com/ralascano/angular-invoice-example",
    },
    {
      title: "ASTRO 5",
      content:
        "Curso ASTRO 5: Server Islands, View Transitions + Aplicación DESDE CERO",
      tags: ["astro", "server", "islands"],
      link: "https://main--astro-dev-books.netlify.app/",
    },
    {
      title: "Landscape 1",
      content: "Creando un landscape con base en un ejemplo en Canva",
      tags: ["landscape", "javascript", "pure"],
      link: "https://wondrous-gingersnap-5f5564.netlify.app/",
    },
    {
      title: "Batería virtual",
      content:
        "Haciendo un ejemplo de una batería virtual utilizando eventos en JS",
      tags: ["events", "javascript", "pure"],
      link: "https://vocal-crepe-53aed4.netlify.app/",
    },
    {
      title: "Simón Dice",
      content: "Haciendo un ejemplo del juego Simón dice",
      tags: ["jquery", "javascript", "pure"],
      link: "https://comfy-baklava-aeabc6.netlify.app/",
    },
    {
      title: "ERP ejemplo back-end",
      content: "CRUD de productos para un ERP",
      tags: ["Nodejs", "Express.js", "back-end"],
      link: "https://github.com/ralascano/erp-crud",
    },
  ],
};

export default function ProjectsGrid() {
  return (
    <div className="py-20 px-6 bg-transparent">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-white"
        style={{ paddingBottom: "10vh" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {projectsData.title}
      </motion.h2>

      <div
        className="overflow-y-auto pr-2"
        style={{
          maxHeight: "50vh",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.content.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-xl shadow-lg p-6 bg-gray-50 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>

              <p className="text-gray-600 mb-4">{project.content}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={clsx(
                      "text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700 font-medium",
                      "transition-colors hover:bg-teal-200"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
