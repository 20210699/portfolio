import { useEffect } from 'react';
import type { Project } from '../App';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose
}: ProjectDetailModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8">
      <div
        className="bg-white border border-gray-200 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-[#222222]">{project.name}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="border border-gray-200 overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#F9FAFB] border border-gray-200 p-4">
              <h4 className="text-xs font-medium text-gray-500 mb-2">Period</h4>
              <p className="text-sm text-[#222222]">{project.period}</p>
            </div>
            <div className="bg-[#F9FAFB] border border-gray-200 p-4">
              <h4 className="text-xs font-medium text-gray-500 mb-2">Role</h4>
              <p className="text-sm text-[#222222]">{project.role}</p>
            </div>
            <div className="bg-[#F9FAFB] border border-gray-200 p-4 flex items-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-[#222222] border border-[#222222] text-white text-sm hover:bg-[#333333] transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#222222] mb-3">
              Project Overview
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#222222] mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-[#FFB800] to-[#FF8A00] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#222222] mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#FFF8E7] border border-[#FFB800]/30 p-8">
            <h3 className="text-lg font-bold text-[#222222] mb-6">
              Trouble Shooting
            </h3>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    P
                  </div>
                  <h4 className="text-base font-bold text-[#222222]">Problem</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-13">
                  {project.troubleShooting.problem}
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    S
                  </div>
                  <h4 className="text-base font-bold text-[#222222]">Solution</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-13">
                  {project.troubleShooting.solution}
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center font-bold">
                    R
                  </div>
                  <h4 className="text-base font-bold text-[#222222]">Result</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-13">
                  {project.troubleShooting.result}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-5">
          <button
            onClick={onClose}
            className="w-full px-6 py-2.5 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] border border-[#FFB800] text-white font-medium hover:from-[#FFA700] hover:to-[#FF7900] transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
