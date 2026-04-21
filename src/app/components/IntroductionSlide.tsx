export default function IntroductionSlide() {
  return (
    <div className="size-full flex items-center justify-center p-12">
      <div className="max-w-7xl w-full grid grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-32 h-32 bg-gradient-to-br from-[#FFB800] to-[#FF8A00] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
              YB
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-[#222222] mb-2">김예빈</h2>
              <p className="text-xl text-gray-600">Backend Developer</p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-4 py-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white rounded-full text-sm">
                Java
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white rounded-full text-sm">
                Spring Boot
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white rounded-full text-sm">
                JPA
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white rounded-full text-sm">
                AWS / Infra
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#222222] mb-4">Introduction</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              안정적이고 확장 가능한 시스템 설계를 추구하는 백엔드 개발자입니다.
              실제 서비스 운영 경험을 통해 사용자 중심의 기술 의사결정의 중요성을 배웠습니다.
            </p>

            <h4 className="text-xl font-bold text-[#222222] mb-3">Strengths</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] rounded-full mt-2"></span>
                <span className="text-gray-700">문제 해결 중심 개발</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] rounded-full mt-2"></span>
                <span className="text-gray-700">실제 서비스 운영 경험</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] rounded-full mt-2"></span>
                <span className="text-gray-700">성능 및 구조 개선 관심</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#FFB800] to-[#FF8A00] rounded-2xl p-8 shadow-lg text-white">
            <p className="text-xl font-medium text-center">
              "사용자 경험을 고려한 백엔드 설계를 지향합니다."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
