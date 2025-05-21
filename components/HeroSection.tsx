"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative w-full min-h-[500px] overflow-hidden bg-transparent">
      {/* Dot background */}
      <DotPattern className={cn("absolute inset-0 z-0 w-full h-full")} />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-7xl flex-col px-6 sm:flex-row sm:items-center">
        {/* Left: Text Section */}
        <div className="flex flex-1 flex-col gap-6 text-center sm:text-left bg-transparent">
          <span className="inline-block w-fit rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
            Fullstack Web Dev
          </span>

          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Turning ideas into digital reality
          </h1>

          <p className="text-base text-muted-foreground">
            I create professional websites and digital solutions that help
            businesses connect with their audience and achieve their goals.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="rounded-md bg-primary px-5 py-2 text-white hover:bg-primary/90">
              See My Work
            </button>
            <button className="rounded-md border border-input bg-transparent px-5 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="relative flex flex-1 justify-center mt-10 sm:mt-0 max-w-md h-[300px] bg-transparent">
          <Image
            src="/imran-images.jfif"
            alt="Hero"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
      </div>
    </div>
  );
}

