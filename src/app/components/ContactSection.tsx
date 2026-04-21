export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="bg-[#F9FAFB] border-t border-gray-200 py-6"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <div className="text-sm text-[#222222]">
            <span className="font-medium">Kim Yebin</span>
            <span className="mx-2 text-gray-400">—</span>
            <span className="text-gray-600">Backend Developer</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yebin-kim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#222222] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://blog.yebin-dev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#222222] transition-colors"
            >
              Blog
            </a>
            <a
              href="mailto:yebin.kim@example.com"
              className="text-sm text-gray-600 hover:text-[#222222] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
