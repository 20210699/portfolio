import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import { projects } from './data/projects';
import type { Project } from './types/project';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="size-full bg-[#F9FAFB] overflow-y-auto">
      <Navigation onNavigate={scrollToSection} />

      <HeroSection onScrollDown={() => scrollToSection('about')} />
      <AboutSection />
      <ProjectsSection projects={projects} onProjectClick={setSelectedProject} />
      <ContactSection />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
