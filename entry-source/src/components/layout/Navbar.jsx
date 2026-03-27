const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src="/assets/images/react-icon.png" alt="AstroCademiX logo" className="h-8 w-8" />
          <span className="text-white font-semibold text-lg tracking-wide">AstroCademiX</span>
        </div>

        <nav className="bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 rounded-full px-6 py-2 flex flex-wrap justify-center gap-4 text-white font-medium text-sm backdrop-blur-sm shadow-md">
          <a href="#hero" className="cursor-pointer hover:text-purple-300">Entrance</a>
          <a href="/home/" className="cursor-pointer hover:text-purple-300">Learn More</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
