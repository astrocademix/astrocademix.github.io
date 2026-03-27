import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";

const Encryption = () => {
  return (
    <div className="flex flex-col items-center justify-center relative min-h-screen w-full h-full -z-20 overflow-hidden px-4">
      {/* Headline */}
      <div className="absolute top-6 z-[5] px-2">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &amp;
          </span>{" "}
          Security.
        </motion.div>
      </div>

      {/* Lock + Button */}
      <div className="flex flex-col items-center justify-center absolute z-[20] -translate-y-16">
        <div className="flex flex-col items-center group cursor-pointer">
          <img
            src="/assets/images/lock-top.png"
            alt="Lock top"
            width={40}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <img
            src="/assets/images/lock-main.png"
            alt="Lock main"
            width={60}
            className="z-10"
          />
        </div>
        <div className="Welcome-box px-4 py-1 z-[20] border mt-6 border-[#7042F88B] opacity-90">
          <h1 className="text-sm text-white">Encryption</h1>
        </div>
      </div>

      {/* Subtext */}
      <div className="absolute z-[20] bottom-[10px] px-4 text-center">
        <p className="text-gray-300 text-base sm:text-lg">
          Secure your data with end-to-end encryption.
        </p>
      </div>

      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover opacity-80"
        >
          <source src="/assets/videos/encryption.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Encryption;
