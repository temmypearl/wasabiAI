import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const getCategoryIcon = (categoryType) => {
    const icons = {
      'ai': '🤖',
      'saas': '☁️',
      'web-dev': '🌐',
      'iot': '🔌',
      'cybersecurity': '🔒',
      'dev-tools': '🛠️'
    };
    return icons[categoryType] || '💡';
  };

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/10 backdrop-blur-sm hover:bg-black/20 transition z-10 flex items-center justify-center text-black"
        >
          ✕
        </button>
        
        <div 
          className="h-48 relative overflow-hidden rounded-t-3xl"
          style={{ backgroundColor: project.accentColor || '#F9F9F9' }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-black/10 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <span className="text-7xl">{getCategoryIcon(project.category)}</span>
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-black mb-2">
            {project.projectName}
          </h2>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-gray-600">
              by {project.teamName || project.name}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">
              Submitted {new Date(project.createdAt).toLocaleDateString()}
            </span>
          </div>
          
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
              <span>{getCategoryIcon(project.category)}</span>
              <span>{project.categoryDisplay}</span>
            </span>
          </div>
          
          {project.techStack && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.split(',').map((tech, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {(project.demoUrl || project.githubRepo) && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Links
              </h3>
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-medium"
                  >
                    Live Demo →
                  </a>
                )}
                {project.githubRepo && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition font-medium"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          )}
          
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Submission ID: {project.submissionId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;