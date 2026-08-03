import { Footer } from "./components/layout/Footer";
import { SiteHeader } from "./components/layout/SiteHeader";
import { AvailabilitySection } from "./components/sections/AvailabilitySection";
import { Cases } from "./components/sections/Cases";
import { CompetenciesSection } from "./components/sections/CompetenciesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { Hero } from "./components/sections/Hero";
import { ProfileSection } from "./components/sections/ProfileSection";
import { StackMarquee } from "./components/sections/StackMarquee";
import { WorkMethodSection } from "./components/sections/WorkMethodSection";
import { BackgroundScene } from "./components/ui/BackgroundScene";
import { useInteractionEffects } from "./hooks/useInteractionEffects";
import { useScrollEffects } from "./hooks/useScrollEffects";

export default function App() {
  useInteractionEffects();
  useScrollEffects();

  return (
    <>
      <BackgroundScene />
      <div className="background-vignette" aria-hidden="true" />
      <div className="scroll-progress" data-scroll-progress aria-hidden="true"><span /></div>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo principal</a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <StackMarquee />
        <ProfileSection />
        <CompetenciesSection />
        <WorkMethodSection />
        <Cases />
        <ExperienceSection />
        <EducationSection />
        <AvailabilitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
