import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between 
                      bg-white/70 backdrop-blur-xl border border-gray-200 
                      rounded-full px-6 py-3 shadow-sm">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>

          <h1 className="text-sm font-semibold tracking-wide">
            Wasabi × Manus <span className="text-gray-500">Innovation Hub</span>
          </h1>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:opacity-60 transition">Home</Link>
          <Link to="/gallery" className="hover:opacity-60 transition">Gallery</Link>
          <Link to="/submit" className="px-4 py-2 rounded-full bg-black text-white hover:scale-105 transition">
            Submit
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;