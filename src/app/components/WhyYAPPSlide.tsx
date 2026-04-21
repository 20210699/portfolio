export default function WhyYAPPSlide() {
  return (
    <div className="size-full flex items-center justify-center p-12">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-[#222222] mb-12 text-center">Why YAPP?</h2>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFB800] to-[#FF8A00] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-3xl font-bold">H</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#222222] mb-3">Harmony · 화합</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-3">
                  다양한 팀 프로젝트 경험을 통해 협업의 중요성을 체감했습니다.
                </p>
                <p className="text-gray-600">
                  디자이너, 프론트엔드 개발자와의 긴밀한 소통으로 사용자 중심의 제품을 만들어온 경험을
                  YAPP에서도 발휘하고 싶습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFB800] to-[#FF8A00] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-3xl font-bold">I</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#222222] mb-3">Initiative · 주도</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-3">
                  문제를 발견하고 해결책을 제시하며 실행하는 것을 즐깁니다.
                </p>
                <p className="text-gray-600">
                  성능 개선, 아키텍처 리팩토링 등을 주도적으로 제안하고 실행했던 경험을 바탕으로
                  YAPP 팀에 긍정적인 영향을 주고 싶습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFB800] to-[#FF8A00] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-3xl font-bold">E</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#222222] mb-3">Expansion · 확장</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-3">
                  새로운 기술과 도메인에 대한 학습 욕구가 강합니다.
                </p>
                <p className="text-gray-600">
                  YAPP의 다양한 프로젝트를 통해 기술적 역량을 확장하고,
                  동료들과 함께 성장하는 개발자가 되고 싶습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
