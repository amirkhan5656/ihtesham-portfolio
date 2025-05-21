"use client";

import { HeroHighlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeDemo } from "@/components/Marqee";
import { BlurFade } from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
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

{
  /* 
// <>
    //   <main className="md:mx-auto md:w-3/5 relative">
    //     <HeroHighlight>
    //       {/* Left animated border */
}
//       <div className="hidden md:block absolute -left-1 top-0 w-1 h-full">
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
//       </div>

//       {/* Right animated border */}
//       <div className="hidden md:block absolute -right-1 top-0 w-1 h-full">
//         <div className="absolute inset-0 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>
//       </div>
//       <section className="relative py-20 px-4 md:px-8 lg:py-32 overflow-hidden rounded-3xl">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-gray-100/20 to-transparent dark:from-gray-800/10 dark:to-transparent rounded-full blur-3xl opacity-60 animate-blob"></div>
//           <div className="absolute top-[60%] -left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-gray-100/20 to-transparent dark:from-gray-800/10 dark:to-transparent rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
//         </div>

//         <div className="container mx-auto relative">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fade-in-up">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
//                 Turning{" "}
//                 <span className="text-gray-900 dark:text-white">ideas</span>{" "}
//                 into{" "}
//                 <span className="text-gray-900 dark:text-white">
//                   digital reality
//                 </span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
//                 I create professional websites and digital solutions that
//                 help businesses connect with their audience and achieve
//                 their goals.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href="/portfolio">
//                   <Button
//                     size="lg"
//                     className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 animate-fade-in-up animation-delay-300"
//                   >
//                     View My Work <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="animate-fade-in-up animation-delay-600"
//                   >
//                     Contact Me
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in-up animation-delay-900">
//               <Image
//                 src="/imran-images.jfif"
//                 alt="Professional headshot"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </HeroHighlight>

//     <section>
//       <h1 className="text-5xl ">What do you want us to Revamp</h1>
//     </section>

//     <section>
//       {/* Create a three button tabs with active like Basic website Revamp, Custome website creation */}
//       <div className="flex space-x-4">
//         <Button className="bg-blue-500 text-white">
//           Basic Website Revamp
//         </Button>
//         <Button className="bg-blue-500 text-white">
//           Custom Website Creation
//         </Button>
//         <Button className="bg-blue-500 text-white">
//           Website Maintenance
//         </Button>
//       </div>
//     </section>
//   </main>

//   <BackgroundGradient className="max-w-sm mx-auto mt-10 p-6 rounded-lg shadow-lg">
//     <div className="flex flex-col space-y-4">
//       <h2 className="text-2xl font-bold">Card Title</h2>
//       <p>Card content goes here...</p>
//       <Button>Action Button</Button>
//     </div>
//   </BackgroundGradient>
//   <section className="w-full py-10 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//       {/* Card 1 */}
//       <div className="flex flex-col items-center p-6">
//         {/* <Image
//               src="/secure-payment.svg"
//               alt="Secure Payment"
//               width={64}
//               height={64}
//               className="mb-4"
//             /> */}
//         <h3 className="text-xl font-semibold mb-2">Make Secure Payment</h3>
//         <p className="text-gray-600 dark:text-gray-300 text-center">
//           Ensure your payment is secure and hassle-free.
//         </p>
//       </div>
//       {/* Card 2 */}
//       <div className="flex flex-col items-center p-6">
//         {/* <Image
//               src="/submit-design.svg"
//               alt="Submit Your Design"
//               width={64}
//               height={64}
//               className="mb-4"
//             /> */}
//         <h3 className="text-xl font-semibold mb-2">Submit Your Design</h3>
//         <p className="text-gray-600 dark:text-gray-300 text-center">
//           Easily upload your design details for us to review.
//         </p>
//       </div>
//       {/* Card 3 */}
//       <div className="flex flex-col items-center p-6">
//         {/* <Image
//               src="/revamped-design.svg"
//               alt="Get your Revamped Design"
//               width={64}
//               height={64}
//               className="mb-4"
//             /> */}
//         <h3 className="text-xl font-semibold mb-2">
//           Get your Revamped Design
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300 text-center">
//           Receive your professionally revamped website design.
//         </p>
//       </div>
//     </div>
//   </section>

//   <section className="relative py-12 px-4">
//     {/* Left animated border */}
//     <div className="hidden md:block absolute -left-1 top-0 w-1 h-full">
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
//     </div>

//     {/* Right animated border */}
//     <div className="hidden md:block absolute -right-1 top-0 w-1 h-full">
//       <div className="absolute inset-0 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>
//     </div>
//     <h2 className="text-3xl font-bold mb-4">Why You Need a Revamp?</h2>
//     <ul className="list-disc pl-6 space-y-2 text-lg">
//       <li>Your product is amazing – but does your design reflect that?</li>
//       <li>
//         A great product deserves a design that not only looks good but also
//         converts.
//       </li>
//       <li>
//         You're busy – figuring out what works and what doesn’t can be
//         overwhelming. We take that off your plate.
//       </li>
//       <li>
//         We handle everything – just send us your website, hero section, app
//         screens, or pitch deck, and we’ll do the rest.
//       </li>
//       <li>
//         Deep analysis & redesign – we identify what’s holding your design
//         back visually and conversion-wise, then craft 1 to 3 improved
//         variations.
//       </li>
//     </ul>
//   </section>

//   <section>
//     Now, I think you should get that god damn design Revamped
//     <Button>
//       Get a revamp
//     </Button>
//   </section>

//   <section>
//     <h2 className="text-3xl font-bold mb-4">What do you want us to Revamp?</h2>
//     <div className="flex space-x-4">
//       <Button className="bg-blue-500 text-white">
//         Send us mail at at contact@amir.com
//       </Button>

//     </div>
//   </section>
// </> */}
