import { createFileRoute } from "@tanstack/react-router";
import {
  AtmosphericBackground,
  ArchiveSurface,
} from "@/components/portfolio/AtmosphericBackground";
import { TarotNav } from "@/components/portfolio/TarotNav";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { ArchiveSeal } from "@/components/portfolio/ArchiveSeal";
import { RamScrollbar } from "@/components/portfolio/RamScrollbar";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <ArchiveSeal />
      <RamScrollbar />
      <AtmosphericBackground />
      <ArchiveSurface>
        <TarotNav />
        <main id="main">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <PortfolioFooter />
      </ArchiveSurface>
    </>
  );
}
