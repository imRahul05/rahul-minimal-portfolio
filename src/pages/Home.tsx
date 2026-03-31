import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ConnectSection } from '../components/ConnectSection';
import { GitHubActivity } from '../components/GitHubActivity';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { SkillsSection } from '../components/SkillsSection';
import { ContactSection } from '../components/ContactSection';
export function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ConnectSection />
      <ExperienceTimeline />
       <GitHubActivity />
      <ContactSection />

    </div>);

}
