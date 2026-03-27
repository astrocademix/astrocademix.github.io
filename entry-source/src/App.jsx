import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

const App = () => {
  return (
    <div className="relative w-full overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
