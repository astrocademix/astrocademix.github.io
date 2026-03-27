import React from "react";
import {
  FaYoutube,
  FaGithub,
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white py-12 px-4 sm:px-10 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between gap-12 text-sm md:text-base text-gray-300">
        {/* Community */}
        <div className="flex flex-col gap-3 min-w-[200px]">
          <h3 className="text-white font-semibold text-lg">Community</h3>
          <a href="https://www.kaggle.com/claymarksarte" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <FaYoutube /> Kaggle
          </a>
          <a href="https://github.com/McKlay" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <FaGithub /> GitHub
          </a>
          <a href="https://huggingface.co/McKlay" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <FaDiscord /> Hugging Face
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3 min-w-[200px]">
          <h3 className="text-white font-semibold text-lg">Social Media</h3>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <FaInstagram /> Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <FaTwitter /> Twitter
          </a>
          <a href="https://www.linkedin.com/in/clay-mark-sarte-283855147/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* About */}
        <div className="flex flex-col gap-3 min-w-[200px]">
          <h3 className="text-white font-semibold text-lg">About</h3>
          <a href="https://www.researchgate.net/profile/Clay-Mark-Sarte" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            ResearchGate
          </a>
          <a href="#about" className="hover:text-white">Learning about me</a>
          <a href="#contact" className="hover:text-white">Contact Me</a>
        </div>
      </div>
      
        {/* Divider + Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © Clay Mark Sarte 2025 Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
