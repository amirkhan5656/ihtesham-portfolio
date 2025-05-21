"use client";


import { HeroSection } from "@/components/HeroSection";
import { MarqueeDemo } from "@/components/Marqee";
import { BlurFade } from "@/components/magicui/blur-fade";
// import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/ContactForm";
import WebDevTabs from "@/components/web-dev-tabs";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="max-w-4xl mx-auto">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about" className="py-4">
          <div className="">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>

            <p className="text-lg leading-relaxed">
              I’m <span className="font-semibold text-primary">Amir Khan</span>,
              a passionate{" "}
              <span className="font-semibold text-primary">
                fullstack web developer
              </span>{" "}
              and soon-to-be{" "}
              <span className="font-semibold text-primary">
                Computer Science graduate
              </span>{" "}
              (<span className="italic">Nov 2025</span>). As an independent{" "}
              <span className="font-semibold text-primary">freelancer</span>, I
              specialize in revamping{" "}
              <span className="font-semibold text-primary">
                outdated websites
              </span>{" "}
              into fast, modern experiences that truly perform. I'm also an{" "}
              <span className="font-semibold text-primary">
                environmentalist
              </span>{" "}
              who believes in{" "}
              <span className="font-semibold text-primary">
                sustainable design
              </span>{" "}
              and building solutions that make a real difference.
            </p>
          </div>
        </section>

        <section id="skills" className="py-4">
          <MarqueeDemo />
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        {/* Make this section in center */}
        <section
          id="contacts"
          className="flex flex-col items-center justify-center min-h-screen text-center px-4"
        >
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Need something different? <br />
                  Don't mind sharing
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let us know if we are your fit, for your awesome exceptional work!
                </p>
              </div>
            </div>
          </BlurFade>
          <ContactForm />
        </section>
        <section id="hire-me">
          <WebDevTabs/>
        </section>
      </div>

      
    </main>
  );
}

