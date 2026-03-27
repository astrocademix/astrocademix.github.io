import React from "react";
import { PROJECT_GALLERY } from "@/constants/PROJECT_GALLERY_DATA";
import ProjectCardGallery from "../sub/ProjectCardGallery";

const ProjectGallery = () => {
  return (
    <section
      id="project-gallery"
      className="w-full py-24 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 text-white"
    >
      {Object.entries(PROJECT_GALLERY).map(([category, data]) => (
        <div key={category} className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            {category}
          </h2>

          {Array.isArray(data) ? (
            // Flat list (Documentations)
            <div className="flex flex-wrap justify-center gap-8">
              {data.map((project) => (
                <ProjectCardGallery key={project.id} {...project} />
              ))}
            </div>
          ) : (
            // Sub-categorized (CV, NLP)
            Object.entries(data).map(([level, projects]) => (
              <div key={level} className="mb-12">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {level}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {projects.map((project) => (
                    <ProjectCardGallery key={project.id} {...project} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </section>
  );
};

export default ProjectGallery;
