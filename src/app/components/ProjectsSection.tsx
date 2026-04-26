import type { Project } from '../types/project';

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function ProjectsSection({
  projects,
  onProjectClick
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-[#222222] mb-4 text-center">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-12">
          실제 서비스 경험을 바탕으로 성장해 온 주요 프로젝트들입니다.
          <br />
          클릭하면 각 프로젝트의 상세 내용을 확인할 수 있습니다.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="bg-white border border-gray-200 overflow-hidden cursor-pointer transition-all hover:border-gray-300 group"
              style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#FFB800] to-[#FF8A00]">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#222222] mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4 pb-4 border-b border-gray-100">
                  <p className="text-xs text-gray-500 mb-1">{project.period}</p>
                  <p className="text-xs font-medium text-[#222222]">
                    {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#FFF8E7] border border-[#FFB800]/20 text-[#FF8A00] text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-[#FF8A00] font-medium group-hover:gap-1.5 flex items-center gap-1 transition-all">
                    View Details
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
