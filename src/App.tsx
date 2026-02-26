import { NavigationBar } from './components';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';

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
        <section id="skill">Skill - 待移植</section>
        <section id="contact">Contact - 待移植</section>
      </main>
    </div>
  );
}
