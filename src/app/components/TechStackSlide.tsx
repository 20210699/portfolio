export default function TechStackSlide() {
  const techCategories = [
    {
      title: 'Backend',
      items: ['Java', 'Spring Boot', 'Spring MVC', 'JPA/Hibernate', 'Node.js']
    },
    {
      title: 'Database',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch']
    },
    {
      title: 'Infrastructure',
      items: ['AWS (EC2, RDS, S3)', 'Docker', 'Kubernetes', 'Nginx', 'Jenkins']
    },
    {
      title: 'Tools',
      items: ['Git', 'GitHub', 'Jira', 'Confluence', 'Postman']
    }
  ];

  return (
    <div className="size-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-[#222222] mb-12 text-center">Tech Stack</h2>

        <div className="grid grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB800] to-[#FF8A00] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {category.title[0]}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#222222]">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF8A00]"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
