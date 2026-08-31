import { lazy } from 'react';

import DeferredSection from './components/DeferredSection';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';

const ContactSection = lazy(() => import('./sections/ContactSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const GitHubActivity = lazy(() =>
  import('./sections/GitHubActivity').then(({ GitHubActivity: Component }) => ({
    default: Component,
  })),
);

export function App() {
  return (
    <div className="bg-background text-foreground relative min-h-screen">
      <NavigationBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <DeferredSection id="project" minHeight={900}>
          <ProjectsSection />
        </DeferredSection>
        <DeferredSection id="github" minHeight={650}>
          <GitHubActivity username="wuharry" />
        </DeferredSection>
        <DeferredSection id="contact" minHeight={750}>
          <ContactSection />
        </DeferredSection>
      </main>
    </div>
  );
}
