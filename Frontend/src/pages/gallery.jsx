import { useState, useEffect, useCallback } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProjects: 0
  });

  const categories = ["All", "AI / Machine Learning", "SaaS / Web App", "Web Development", "IoT", "CyberSecurity", "Developer Tools"];

  // Define fetchProjects before using it in useEffect
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        page: pagination.currentPage,
        limit: 12,
        search: searchQuery,
        category: activeCategory
      });
      
      const response = await fetch(`http://localhost:5000/api/projects?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      
      const data = await response.json();
      setProjects(data.projects);
      setPagination({
        currentPage: data.pagination.currentPage,
        totalPages: data.pagination.totalPages,
        totalProjects: data.pagination.totalProjects,
        hasNext: data.pagination.hasNext,
        hasPrev: data.pagination.hasPrev
      });
    } catch (err) {
      setError(err.message);
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  }, [pagination.currentPage, searchQuery, activeCategory]);

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchProjects();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [fetchProjects]);

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, currentPage: newPage }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-6 md:px-20 bg-linear-to-b from-white to-gray-100 min-h-screen">
      
      {/* Header Info */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-4xl font-black tracking-tight text-black">
          All submissions
        </h1>
        <p className="text-gray-400 mt-1 text-sm md:text-base font-medium">
          {pagination.totalProjects} {pagination.totalProjects === 1 ? "project" : "projects"} submitted
        </p>
      </div>

      {/* Search and Filter Control Bar */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between transition duration-300">
          
          {/* Search Input Box */}
          <div className="w-full md:flex-1">
            <input
              type="text"
              placeholder="Search projects by name, team, or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition text-gray-700 placeholder-gray-400"
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
                  onClick={() => {
                    setActiveCategory(category);
                    setPagination(prev => ({ ...prev, currentPage: 1 }));
                  }}
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

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto mt-12">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500">{error}</p>
            <button 
              onClick={fetchProjects}
              className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Try Again
            </button>
          </div>
        )}
        
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filter</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project._id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        {/* Pagination */}
        {!loading && !error && projects.length > 0 && pagination.totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={!pagination.hasPrev}
              className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            >
              ← Previous
            </button>
            
            <div className="flex gap-1">
              {[...Array(Math.min(5, pagination.totalPages))].map((_, i) => {
                let pageNum;
                if (pagination.totalPages <= 5) {
                  pageNum = i + 1;
                } else if (pagination.currentPage <= 3) {
                  pageNum = i + 1;
                } else if (pagination.currentPage >= pagination.totalPages - 2) {
                  pageNum = pagination.totalPages - 4 + i;
                } else {
                  pageNum = pagination.currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-lg transition ${
                      pagination.currentPage === pageNum
                        ? 'bg-black text-white'
                        : 'border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={!pagination.hasNext}
              className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            >
              Next →
            </button>
          </div>
        )}
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Gallery;