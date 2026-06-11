// import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-white via-gray-50 to-white">

      <div className="text-center max-w-3xl">

        {/* Badge */}
        <div className="inline-block px-4 py-1 mb-6 text-xs tracking-widest uppercase 
                        bg-gray-100 border border-gray-200 rounded-full">
          2026 Hackathon
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Wasabi × Manus <br />
          <span className="text-gray-500 font-normal">Innovation Hub</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed">
          Build something that matters. Submit your project, showcase your innovation,
          and explore ideas from creators around the world.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/submit"
            className="px-6 py-3 rounded-full bg-black text-white font-medium 
                       hover:scale-105 transition"
          >
            Submit your project →
          </Link>

          <Link
            to="/gallery"
            className="px-6 py-3 rounded-full border border-gray-300 
                       hover:bg-gray-100 transition"
          >
            Browse submissions
          </Link>

        </div>
      </div>
    </section>
  );
};



export default Hero;