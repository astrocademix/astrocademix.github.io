import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/PROJECT_DATA";
import { Link } from "react-router-dom"; // ✅ changed from react-scroll

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-24 sm:py-32 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 px-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      {/* View All Projects Button */}
      <Link
        to="/projects"
        className="mt-12 px-6 py-3 bg-purple-600 text-white rounded-xl text-base sm:text-lg font-semibold hover:bg-purple-700 cursor-pointer transition-all"
      >
        View All Projects
      </Link>
    </section>
  );
};

export default Projects;
