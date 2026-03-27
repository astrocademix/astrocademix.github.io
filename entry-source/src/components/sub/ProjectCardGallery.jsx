import React from "react";

const ProjectCardGallery = ({ name, description, link, tech, image }) => {
  return (
    <div className="bg-[#1c1c2b] rounded-xl shadow-md overflow-hidden w-[300px] sm:w-[340px] hover:scale-[1.03] transition-transform duration-300 border border-purple-500/20">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover object-center"
      />

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech?.map((item, i) => (
            <span
              key={i}
              className="text-xs bg-purple-800/30 px-2 py-1 rounded-full text-purple-300"
            >
              {item}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all"
          >
            View Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCardGallery;
