export default function AboutSection() {
  const techStack = [
    'Java',
    'Spring Boot',
    'JPA',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'AWS',
    'Docker',
    'Kafka'
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-[#222222] mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-8 sticky top-24" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <div className="w-32 h-32 bg-gradient-to-br from-[#FFB800] to-[#FF8A00] mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
                YB
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-2">
                  김예빈
                </h3>
                <p className="text-lg text-gray-600 mb-4">Backend Developer</p>
                <a
                  href="mailto:yb021004@gmail.com"
                  className="text-sm text-gray-500 hover:text-[#FF8A00] transition-colors"
                >
                  yb021004@gmail.com
                </a>
              </div>

              <div className="space-y-6 border-t border-gray-100 pt-6">
                <div>
                  <h4 className="text-xs font-medium text-gray-500 mb-2">EDUCATION</h4>
                  <p className="text-sm text-[#222222]">덕성여자대학교</p>
                  <p className="text-xs text-gray-500">컴퓨터공학전공 / 수학전공 (2021.03 - 2026.02)</p>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-gray-500 mb-2">EXPERIENCE & ACTIVITIES</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>UMC 8기 덕성여대 회장</li>
                    <li>UMC 7기 Spring Boot 파트</li>
                    <li>UMC 6기 Spring Boot 파트</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 space-y-6">
            <div className="bg-white border border-gray-200 p-8" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <h3 className="text-xl font-bold text-[#222222] mb-4">
                Introduction
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                안정적이고 확장 가능한 시스템 설계를 추구하는 백엔드 개발자입니다.
                실제 서비스 운영 경험을 통해 사용자 중심의 기술 의사결정의 중요성을 배웠습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                문제를 발견하고 해결하는 과정에서 성장하며, 팀과 함께 더 나은 제품을 만들어가는 것을 즐깁니다.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <h3 className="text-xl font-bold text-[#222222] mb-6">
                Strengths
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#FFB800]/20 bg-[#FFF8E7] flex items-center justify-center flex-shrink-0 text-[#FF8A00] text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#222222] mb-1">
                      문제 해결 중심 개발
                    </h4>
                    <p className="text-sm text-gray-600">
                      단순 구현을 넘어 근본적인 문제를 파악하고 최적의 솔루션을 찾습니다
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#FFB800]/20 bg-[#FFF8E7] flex items-center justify-center flex-shrink-0 text-[#FF8A00] text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#222222] mb-1">
                      실제 서비스 운영 경험
                    </h4>
                    <p className="text-sm text-gray-600">
                      대규모 트래픽 처리, 성능 최적화, 장애 대응 등 실전 경험 보유
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#FFB800]/20 bg-[#FFF8E7] flex items-center justify-center flex-shrink-0 text-[#FF8A00] text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#222222] mb-1">
                      성능 및 구조 개선
                    </h4>
                    <p className="text-sm text-gray-600">
                      지속적인 모니터링과 분석을 통해 시스템을 개선합니다
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
              <h3 className="text-xl font-bold text-[#222222] mb-4">
                Tech Stack
              </h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}
