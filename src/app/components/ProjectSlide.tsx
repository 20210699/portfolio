interface ProjectSlideProps {
  projectName: string;
  imageUrl: string;
  overview: string;
  techStack: string[];
  role: string;
  troubleShooting: {
    title: string;
    trouble: string;
    solution: string;
    result: string;
  }[];
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
                    className="px-3 py-1.5 bg-[#FFF8E7] border border-[#FFB800]/20 text-[#FF8A00] text-sm font-medium"
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

            <div className="space-y-8">
              {troubleShooting.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#FFB800]/30 rounded-xl bg-[#FFFDF6] p-5"
                >
                  <h4 className="text-xl font-bold text-[#222222] mb-3">
                    {item.title}
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-red-600 mb-2">Trouble</p>
                      <p className="text-gray-700">{item.trouble}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-blue-600 mb-2">Solution</p>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-green-600 mb-2">Result</p>
                      <p className="text-gray-700">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
