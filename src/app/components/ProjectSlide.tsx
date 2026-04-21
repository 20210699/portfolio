interface ProjectSlideProps {
  projectName: string;
  imageUrl: string;
  overview: string;
  techStack: string[];
  role: string;
  troubleShooting: {
    problem: string;
    solution: string;
    result: string;
  };
}

export default function ProjectSlide({
  projectName,
  imageUrl,
  overview,
  techStack,
  role,
  troubleShooting
}: ProjectSlideProps) {
  return (
    <div className="size-full flex items-center justify-center p-12">
      <div className="max-w-7xl w-full grid grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#FFB800] to-[#FF8A00]">
              <img
                src={imageUrl}
                alt={projectName}
                className="size-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#222222] text-center">{projectName}</h3>
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#222222] mb-4">Project Overview</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{overview}</p>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-[#222222] mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#222222] mb-2">Role</h4>
              <p className="text-gray-700">{role}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#222222] mb-6">Trouble Shooting</h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    P
                  </div>
                  <h4 className="text-lg font-bold text-[#222222]">Problem</h4>
                </div>
                <p className="text-gray-700 pl-10">{troubleShooting.problem}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    S
                  </div>
                  <h4 className="text-lg font-bold text-[#222222]">Solution</h4>
                </div>
                <p className="text-gray-700 pl-10">{troubleShooting.solution}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-bold">
                    R
                  </div>
                  <h4 className="text-lg font-bold text-[#222222]">Result</h4>
                </div>
                <p className="text-gray-700 pl-10">{troubleShooting.result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
