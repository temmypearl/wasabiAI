import { useState } from "react";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI / Machine Learning"];
  const projectCount = 1; // Can be linked dynamically to your array length

  return (
    <section className="py-12 px-6 md:px-20 bg-linear-to-b from-white to-gray-100">
      
      {/* Header Info */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-4xl font-black tracking-tight text-black">
          All submissions
        </h1>
        <p className="text-gray-400 mt-1 text-sm md:text-base font-medium">
          {projectCount} {projectCount === 1 ? "project" : "projects"} submitted
        </p>
      </div>

      {/* Search and Filter Control Bar */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between transition duration-300">
          
          {/* Search Input Box */}
          <div className="w-full md:flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;