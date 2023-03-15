import React from 'react';
import projectsArr from './ProjectArray';

const Projects = () => {
  return (
    <section
      id="projects"
      className="md:bg-slate-900 p-4 md:py-12 md:px-14 lg:px-36"
    >
      <h3 className="text-5xl lg:text-7xl md:text-center lg:text-start font-bold">
        Explore my{' '}
        <span className="before:w-28 lg:before:w-48 before:right-32 lg:before:right-1 md:before:right-3 before:h-1 before:bg-orange-600 relative before:absolute before:-bottom-1">
          work
        </span>
      </h3>

      <div className="proj-cards flex flex-col gap-10 mt-16">
        {projectsArr?.map((project) =>
          project.id % 2 !== 0 ? (
            <div
              className="card border rounded-md border-gray-500 p-2 md:border-none md:flex gap-5 items-center"
              key={project.id}
            >
              <div>
                <h3
                  className="hidden mb-3 text-center md:block font-bold uppercase tracking-wider text-xl relative before:absolute before:bottom-0
                  before:left-0 before:w-20 lg:before:w-48 before:h-0.5 before:bg-slate-300 text-green-500"
                >
                  {project.title}
                </h3>
                <div className="card-img overflow-hidden rounded-tr-md rounded-tl-md">
                  <img
                    src={project.image}
                    alt="Project Screenshot"
                    className="w-full lg:w-98 lg:h-82 h-56 md:h-64"
                  />
                </div>
              </div>
              <div className="card-content mt-3 md:w-1/2 lg:w-1/2">
                <h3 className="font-bold uppercase md:hidden">
                  {project.title}
                </h3>
                <p className="text-slate-500 mt-4">{project.description}</p>

                <div className="languages hidden md:flex flex-wrap gap-2 my-4">
                  {project.languages?.map((language) => (
                    <div
                      className="badge bg-slate-300 text-slate-900 px-2 py-1 rounded-full"
                      data-type="badge"
                      key={language}
                    >
                      {language}
                    </div>
                  ))}
                </div>

                <div
                  className="
                  my-6 card-actions flex justify-center lg:justify-start gap-4"
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    className="border border-orange-500 px-3 py-2 rounded uppercase hover:bg-orange-500 ease-out duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    className="border border-transparent bg-orange-500 px-3 py-2 rounded uppercase hover:border-orange-500 hover:bg-transparent ease-out duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="card border rounded-md border-gray-500 p-2 md:border-none md:flex md:flex-row-reverse gap-5 items-center"
              key={project.id}
            >
              <div>
                <h3
                  className="hidden mb-3 text-center md:block font-bold uppercase tracking-wider text-xl relative before:absolute before:bottom-0
                  before:left-0 before:w-20 lg:before:w-48 before:h-0.5 before:bg-slate-300 text-green-500"
                >
                  {project.title}
                </h3>
                <div className="card-img overflow-hidden rounded-tr-md rounded-tl-md">
                  <img
                    src={project.image}
                    alt="Project Screenshot"
                    className="w-full lg:w-98 lg:h-82 h-56 md:h-64"
                  />
                </div>
              </div>
              <div className="card-content mt-3 md:w-1/2 lg:w-1/2">
                <h3 className="font-bold uppercase md:hidden">
                  {project.title}
                </h3>
                <p className="text-slate-500 mt-4">{project.description}</p>

                <div className="languages hidden md:flex flex-wrap gap-2 my-4">
                  <div className="languages hidden md:flex flex-wrap gap-2 my-4">
                    {project.languages?.map((language) => (
                      <div
                        className="badge bg-slate-300 text-slate-900 px-2 py-1 rounded-full"
                        data-type="badge"
                        key={language}
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="
                  my-6 card-actions flex justify-center lg:justify-start gap-4"
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    className="border border-orange-500 px-3 py-2 rounded uppercase hover:bg-orange-500 ease-out duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    className="border border-transparent bg-orange-500 px-3 py-2 rounded uppercase hover:border-orange-500 hover:bg-transparent ease-out duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
