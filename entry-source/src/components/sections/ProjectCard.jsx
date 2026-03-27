import React from "react";

const ProjectCard = ({ name, image, description, link }) => {
  return (
    <div className="w-full sm:w-[360px] bg-[#1a1a2e] border border-[#2e2e48] rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] hover:shadow-xl opacity-80">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover object-center"
        />
        <div className="p-5">
          <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
