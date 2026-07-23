import { createFileRoute } from "@tanstack/react-router";
import { AbyssCanvas } from "@/components/AbyssCanvas";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Void } from "@/components/scenes/Void";
import { Arrival } from "@/components/scenes/Arrival";
import { Memory } from "@/components/scenes/Memory";
import { Constellation } from "@/components/scenes/Constellation";
import { Experience } from "@/components/scenes/Experience";
import { Projects } from "@/components/scenes/Projects";
import { Intelligence } from "@/components/scenes/Intelligence";
import { Vision } from "@/components/scenes/Vision";
import { Contact } from "@/components/scenes/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Vats — Beyond the Abyss" },
      {
        name: "description",
        content:
          "An interactive cinematic journey through the work of Vaibhav Vats — AI Front-End Developer, Creative Technologist, Frontend Engineer.",
      },
      { property: "og:title", content: "Vaibhav Vats — Beyond the Abyss" },
      {
        property: "og:description",
        content: "An interactive cinematic journey through the work of Vaibhav Vats.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter+Tight:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative grain vignette">
      <AbyssCanvas />
      <ScrollProgress />
      <div className="fixed top-6 left-6 md:top-10 md:left-10 z-50 font-mono text-[10px] tracking-[0.4em] uppercase text-ether/80">
        ⟡ VV / Abyss
      </div>
      <div className="relative z-10">
        <Void />
        <Arrival />
        <Memory />
        <Constellation />
        <Experience />
        <Projects />
        <Intelligence />
        <Vision />
        <Contact />
      </div>
    </main>
  );
}
