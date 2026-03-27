// File Name: Projects.jsx
import React from "react";
import ProjectGallery from "@/components/sections/ProjectGallery";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatbot/ChatWidget";

const Projects = () => {
  return (
    <div className="relative w-full overflow-x-hidden scroll-smooth">
      <Navbar />
      <ProjectGallery />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Projects;
