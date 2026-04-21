interface HeroSectionProps {
  onScrollDown: () => void;
}

export default function HeroSection({ onScrollDown }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-[#FFB800] to-[#FF8A00] flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white blur-3xl"></div>
      </div>

      <div className="relative z-10 text-white max-w-4xl px-8 text-center">
        <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-xs tracking-wider mb-6">
          YAPP APPLICATION PORTFOLIO
        </div>

        <h1 className="text-7xl font-bold mb-4 tracking-tight">
          Kim Yebin
        </h1>

        <p className="text-2xl mb-12 opacity-90">
          Backend Developer
        </p>

        <div className="flex items-center justify-center gap-4 text-sm">
          <span className="px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20">
            Harmony
          </span>
          <span className="opacity-60">·</span>
          <span className="px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20">
            Initiative
          </span>
          <span className="opacity-60">·</span>
          <span className="px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20">
            Expansion
          </span>
        </div>
      </div>

      <button
        onClick={onScrollDown}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}
