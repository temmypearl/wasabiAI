import { useState } from 'react';

const Submit = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submissionId, setSubmissionId] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/projects/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          accentColor: selectedColor,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit project');
      }
      
      console.log("🚀 Project Submitted Successfully:", data);
      setSubmissionId(data.submissionId);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        teamName: "",
        projectName: "",
        category: "",
        techStack: "",
        demoUrl: "",
        githubRepo: "",
      });
      setSelectedColor("#F9F9F9");
      
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmissionId(null);
      }, 8000);
    } catch (err) {
      setError(err.message);
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-28 pb-20 px-6 md:px-20 bg-linear-to-b from-white to-gray-100 min-h-screen">
      
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
        
        {/* Success Alert Banner */}
        {isSubmitted && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-4 text-center text-sm font-medium transition duration-300 animate-fade-in">
            🎉 Project "{formData.projectName}" successfully submitted!<br />
            {submissionId && <span className="text-xs mt-1 block">Submission ID: {submissionId}</span>}
          </div>
        )}
        
        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-2xl p-4 text-center text-sm font-medium">
            ❌ {error}
          </div>
        )}
        
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
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
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
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
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
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
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
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
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
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition cursor-pointer"
            >
              <option value="" disabled>Select a category</option>
              <option value="ai">AI / Machine Learning</option>
              <option value="saas">SaaS / Web App</option>
              <option value="web-dev">Web Development</option>
              <option value="iot">IoT</option>
              <option value="cybersecurity">CyberSecurity</option>
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
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
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
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
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
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
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

        {/* Action Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white font-medium py-4 rounded-full shadow-md hover:bg-gray-900 active:scale-[0.99] transition duration-150 flex items-center justify-center space-x-2 text-sm md:text-base cursor-pointer ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit project</span>
              <span>→</span>
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Submit;