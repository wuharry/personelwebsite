import { NavigationBar } from './components';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import ProjectsContent from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

// src/App.tsx
export function App() {
  return (
    <div className="bg-background text-foreground relative min-h-screen">
      <NavigationBar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="skill">
          <SkillsSection />
        </section>
        <section id="project">
          <ProjectsContent />
        </section>
        <section id="active"> 動態- 待移植</section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
