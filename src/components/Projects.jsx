import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Galeno',
      description:
        'Sistema de gestión de inventarios, ventas, generación de reportes y dispensación de medicamentos controlados para farmacias',
      github: 'https://github.com/TUTYWALO/v0-pharmacy-management-software.git',
      demo: 'https://v0-pharmacy-management-software-black.vercel.app/', 
      image: '/img/galeno-logo.png',
    },
    {
      name: 'Comcabp',
      description:
        'Sistema de consulta y registro de comparendos normativos desarrollado en base a información brindada por el SENA',
      github: 'https://github.com/TUTYWALO/COMCABP86SS.git',
      demo: 'https://comcabp-demo.vercel.app', 
      image: '/img/comcabp-logo.png',
    },
    {
      name: 'Resume AI',
      description: 'Resumidor de textos apoyado con la API de Gemini AI',
      github: 'https://github.com/noirtiercano/resumeAPI.git',
      demo: '', 
      image: '/img/resume-ai.png',
    },
  ];

  return (
    <div id="projects">
      <h1 className="font-bold text-3xl mb-16 text-center mt-40">Proyectos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const developmentFilterClasses =
            project.name === 'Resume AI'
              ? 'grayscale opacity-50 blur-sm'
              : '';

          return (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full relative overflow-hidden"
            >
              {project.image && (
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className={`w-full h-40 object-cover rounded-lg mb-3 ${developmentFilterClasses}`}
                  />
                </div>
              )}

              {project.name === 'Resume AI' && (
                <span className="absolute top-6 left-6 bg-red-800 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10">
                  En Desarrollo
                </span>
              )}

              <h2 className="font-semibold text-lg mt-2">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* 🔹 Botones */}
              <div className="mt-auto flex space-x-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver Proyecto
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
