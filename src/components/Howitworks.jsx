import { useState } from "react";

const SubmitProject = () => {
  // Form & UI States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    teamName: "",
    projectName: "",
    category: "",
    techStack: "",
    demoUrl: "",
    githubRepo: "",
  });
  
  const [selectedColor, setSelectedColor] = useState("#F9F9F9");

  // Color selection swatches matched from image layout
  const colors = [
    { hex: "#F9F9F9", bg: "bg-[#F9F9F9]", border: "border-gray-300" },
    { hex: "#1A1A1A", bg: "bg-[#1A1A1A]", border: "border-transparent" },
    { hex: "#2D4A43", bg: "bg-[#2D4A43]", border: "border-transparent" },
    { hex: "#1E3A60", bg: "bg-[#1E3A60]", border: "border-transparent" },
    { hex: "#4A1E4A", bg: "bg-[#4A1E4A]", border: "border-transparent" },
    { hex: "#3B2A22", bg: "bg-[#3B2A22]", border: "border-transparent" },
    { hex: "#143D28", bg: "bg-[#143D28]", border: "border-transparent" },
    { hex: "#2A1414", bg: "bg-[#2A1414]", border: "border-transparent" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Project Data:", { ...formData, accentColor: selectedColor });
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-linear-to-b from-white to-gray-100 min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-black">
          Submit your project
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Fill in the details below — takes about 3 minutes.
        </p>
      </div>

      {/* Form Workspace */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
        
        {/* Card 1: Your Details */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 transition duration-300">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
            Your Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
              Team Name
            </label>
            <input
              type="text"
              name="teamName"
              placeholder="Solo or team name (optional)"
              value={formData.teamName}
              onChange={handleInputChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition"
            />
          </div>
        </div>

        {/* Card 2: Project Details */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 transition duration-300 space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Project Details
          </h2>
          
          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
              Project Name *
            </label>
            <input
              type="text"
              name="projectName"
              required
              placeholder="What's it called?"
              value={formData.projectName}
              onChange={handleInputChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
              Category *
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleInputChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition cursor-pointer appearance-none"
            >
              <option value="" disabled hidden>Select a category</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="saas">SaaS / Web App</option>
              <option value="dev-tools">Developer Tools</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
              Tech Stack
            </label>
            <input
              type="text"
              name="techStack"
              placeholder="React, Python, OpenAI, Supabase..."
              value={formData.techStack}
              onChange={handleInputChange}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition"
            />
          </div>
        </div>

        {/* Card 3: Links & Appearance */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 transition duration-300">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
            Links & Appearance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Demo URL
              </label>
              <input
                type="url"
                name="demoUrl"
                placeholder="https://..."
                value={formData.demoUrl}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Github / Repo
              </label>
              <input
                type="url"
                name="githubRepo"
                placeholder="https://github.com/..."
                value={formData.githubRepo}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-black transition"
              />
            </div>
          </div>

          {/* Color Matrix Integration */}
          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-3">
              Card Accent Color
            </label>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => setSelectedColor(color.hex)}
                  className={`w-9 h-9 rounded-full border-2 transition-all duration-200 ${color.bg} ${color.border} ${
                    selectedColor === color.hex
                      ? "ring-2 ring-offset-2 ring-black scale-105"
                      : "hover:scale-105"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Action Button styled inline with architecture */}
        <button
          type="submit"
          className="w-full bg-black text-white font-medium py-4 rounded-full shadow-md hover:bg-gray-900 active:scale-[0.99] transition duration-150 flex items-center justify-center space-x-2 text-sm md:text-base cursor-pointer"
        >
          <span>Submit project</span>
          <span>→</span>
        </button>

      </form>
    </section>
  );
};

export default SubmitProject;