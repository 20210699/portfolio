import profileImage from '/dist/assets/20251119 증명사진-CJXQ7jvs.JPG';

export default function AboutSection() {
  const techStack = [
    'Java 17',
    'Spring Boot',
    'Spring Security',
    'JWT/OAuth2',
    'JPA',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'WebSocket/STOMP',
    'FastAPI',
    'OpenAI API',
    'AWS S3',
    'Docker',
    'GitHub Actions'
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
              <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border border-gray-200 bg-white">
                <img
                  src={profileImage}
                  alt="김예빈 프로필 사진"
                  className="size-full object-contain scale-95"
                />
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
                안정적으로 동작하는 백엔드 시스템을 만드는 데 집중하는 개발자입니다.
                동작하는 코드를 만드는 것을 넘어, 예외와 장애 속에서도 흔들리지 않는 구조를 고민합니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                기능을 붙이는 것보다 구조를 정리하는 일에 더 많은 시간을 써왔습니다.
                눈앞의 오류 뒤에 있는 설계 결합과 도메인 모델링의 빈틈을 찾아내,
                같은 문제가 반복되지 않는 형태로 코드를 정리하는 것을 중요하게 생각합니다.
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
                      복잡한 시스템을 구조적으로 정리하는 역량
                    </h4>
                    <p className="text-sm text-gray-600">
                      Spring Boot, FastAPI, 외부 디바이스, WebSocket이 연결된 멀티 서비스 환경에서도
                      각 컴포넌트의 책임과 인터페이스를 정리해 전체 흐름을 안정화합니다
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#FFB800]/20 bg-[#FFF8E7] flex items-center justify-center flex-shrink-0 text-[#FF8A00] text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#222222] mb-1">
                      도메인 중심의 백엔드 구현 경험
                    </h4>
                    <p className="text-sm text-gray-600">
                      인증, 주문/결제, 채팅, AI 학습, 파일 업로드, 통계 등
                      다양한 도메인을 API와 데이터 모델 관점에서 설계하고 구현해왔습니다
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#FFB800]/20 bg-[#FFF8E7] flex items-center justify-center flex-shrink-0 text-[#FF8A00] text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#222222] mb-1">
                      운영 관점의 문제 해결 능력
                    </h4>
                    <p className="text-sm text-gray-600">
                      CI/CD, CORS, 웹훅, 데이터 정합성, 배포 환경 차이처럼
                      실제 운영에서 드러나는 문제를 원인 중심으로 추적하고 개선합니다
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
