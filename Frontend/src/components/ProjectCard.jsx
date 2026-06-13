const ProjectCard = ({ project, onClick }) => {
  const getCategoryIcon = (projectCategory) => {
    const icons = {
      'ai': '🤖',
      'saas': '☁️',
      'web-dev': '🌐',
      'iot': '🔌',
      'cybersecurity': '🔒',
      'dev-tools': '🛠️'
    };
    return icons[projectCategory] || '💡';
  };
  
  const getCategoryColor = (projectCategory) => {
    const colors = {
      'ai': 'bg-purple-100 text-purple-700',
      'saas': 'bg-blue-100 text-blue-700',
      'web-dev': 'bg-green-100 text-green-700',
      'iot': 'bg-orange-100 text-orange-700',
      'cybersecurity': 'bg-red-100 text-red-700',
      'dev-tools': 'bg-indigo-100 text-indigo-700'
    };
    return colors[projectCategory] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div 
          className="h-32 relative overflow-hidden"
          style={{ backgroundColor: project.accentColor || '#F9F9F9' }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-black/5 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-5xl">{getCategoryIcon(project.category)}</span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-lg text-black line-clamp-1">
              {project.projectName}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(project.category)}`}>
              {project.categoryDisplay}
            </span>
          </div>
          
          <p className="text-gray-500 text-sm mb-3">
            by {project.teamName || project.name}
          </p>
          
          {project.techStack && (
            <div className="flex flex-wrap gap-1 mb-4">
              {project.techStack.split(',').slice(0, 3).map((tech, idx) => (
                <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {tech.trim()}
                </span>
              ))}
              {project.techStack.split(',').length > 3 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  +{project.techStack.split(',').length - 3}
                </span>
              )}
            </div>
          )}
          
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>📅 {new Date(project.createdAt).toLocaleDateString()}</span>
            <span>👁️ {project.views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;