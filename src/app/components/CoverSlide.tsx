export default function CoverSlide() {
  return (
    <div className="size-full bg-gradient-to-br from-[#FFB800] to-[#FF8A00] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[800px] font-bold text-white/20">
          Y
        </div>
      </div>

      <div className="relative z-10 text-center text-white">
        <div className="mb-8">
          <h1 className="text-7xl font-bold mb-4 tracking-tight">PORTFOLIO</h1>
          <p className="text-3xl font-medium mb-6">YAPP 지원자 김예빈</p>
          <div className="flex items-center justify-center gap-4 text-xl">
            <span className="opacity-90">Harmony</span>
            <span className="opacity-60">·</span>
            <span className="opacity-90">Initiative</span>
            <span className="opacity-60">·</span>
            <span className="opacity-90">Expansion</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-sm animate-bounce">
        Scroll to explore →
      </div>
    </div>
  );
}
