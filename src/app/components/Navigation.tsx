interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div className="max-w-7xl mx-auto px-8 py-3.5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('hero')}
            className="text-base font-bold text-[#222222]"
          >
            Portfolio
          </button>

          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('hero')}
              className="text-sm text-gray-600 hover:text-[#222222] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-sm text-gray-600 hover:text-[#222222] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="text-sm text-gray-600 hover:text-[#222222] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-sm text-gray-600 hover:text-[#222222] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
