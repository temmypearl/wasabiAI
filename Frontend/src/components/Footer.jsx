import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 px-6 md:px-20 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-400">
        
        {/* Brand/Logo Alignment */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          <span className="text-black font-semibold tracking-wide">
            Wasabi × Manus <span className="text-gray-400 font-normal">Innovation Hub</span>
          </span>
        </div>

        {/* Minimalist Navigation Tree */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-black transition duration-150">Home</Link>
          <Link to="/gallery" className="hover:text-black transition duration-150">Gallery</Link>
          <Link to="/submit" className="hover:text-black transition duration-150">Submit</Link>
        </nav>

        {/* Copyright Timestamp */}
        <div>
          &copy; {new Date().getFullYear()} All innovations reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;