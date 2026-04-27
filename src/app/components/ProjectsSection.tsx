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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="group relative min-h-[320px] cursor-pointer overflow-hidden border border-black/5 transition-transform duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)'
              }}
            >
              <div className="absolute inset-0">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

              <div className="relative flex min-h-[320px] flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
                    Project
                  </span>
                  <span className="text-xs text-white/75">
                    {project.period}
                  </span>
                </div>

                <div>
                  <h3 className="max-w-[10ch] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {project.name}
                  </h3>
                </div>

                <div className="absolute inset-x-0 bottom-0 translate-y-full border-t border-white/15 bg-black/45 p-8 backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0">
                  <p className="mb-4 text-sm leading-relaxed text-white/88">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-white/75">
                      {project.role}
                    </span>
                    <span className="text-xs font-medium text-white">
                      상세 보기
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
