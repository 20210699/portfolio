export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="bg-[#F9FAFB] border-t border-gray-200 py-10"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-10 items-end">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-3">CONTACT</p>
            <h3 className="text-2xl font-bold text-[#222222] mb-3">
              Kim yebeen
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Backend Developer Portfolio
            </p>
          </div>

          <div className="flex flex-col items-start justify-self-end">
            <div className="flex flex-wrap items-center justify-end gap-0">
              <a
                href="mailto:yb021004@gmail.com"
                className="px-1 py-1 text-sm font-medium text-gray-400 hover:text-[#222222] transition-colors"
              >
                Email
              </a>
              <span className="px-2 text-sm leading-none text-[#FF8A00]">|</span>
              <a
                href="https://github.com/20210699"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 py-1 text-sm font-medium text-gray-400 hover:text-[#222222] transition-colors"
              >
                GitHub
              </a>
              <span className="px-2 text-sm leading-none text-[#FF8A00]">|</span>
              <a
                href="https://velog.io/@20210699/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 py-1 text-sm font-medium text-gray-400 hover:text-[#222222] transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
