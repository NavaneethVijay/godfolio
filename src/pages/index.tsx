"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconBrandGithub,
  IconClipboardCopy,
  IconFileBroken,
  IconFileDownload,
  IconSignature,
  IconTableColumn,
  IconVideo,
} from "@tabler/icons-react";
import HeroSection from "@/components/project/HeroSection";
import { Experience } from "@/components/project/Experience";
import { ProjectsGrid } from "@/components/project/ProjectsGrid";
import Work from "@/components/project/Work";
import SectionHeadings from "@/components/project/SectionHeadings";
import Intro from "@/components/project/IntroText";
import Head from "next/head";
import ContactMe from "@/components/project/contactMe";

export default function HomePage() {
  return (
    <>
      <div>
        <HeroSection />
        <section className="mx-auto py-10 bg-black">
          <SectionHeadings
            title="The Family Ties"
            description="It’s all about loyalty and drive."
          />
          <div className="relative">
            {/* <img className="absolute top-0 left-0 " src="/strings.webp" alt="family" /> */}
            <div className="max-w-4xl mx-auto">
              <div className="text-lg dark:text-neutral-300  text-neutral-500 mt-10 font-libre-franklin">
                <Intro />
              </div>

              <div className="flex justify-center">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <IconFileDownload className="h-4 w-4 mr-2" />
                    Download Resume
                  </span>
                </button>
              </div>

              <div className="grid grid-rows-[10rem] grid-cols-6 md:grid-cols-6 gap-6 px-6 md:px-0 mt-10  md:grid-rows-none">
                <div className="rounded-xl col-span-6 md:col-span-4 flex flex-col">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/3Fzlg5r1IjhLk2qRw667od?utm_source=generator"
                    width="100%"
                    height="300px"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="col-span-4 md:col-span-2">
                  <img
                    style={{ height: "232px" }}
                    className="object-cover w-full h-90 rounded-xl overflow-hidden flex items-stretch"
                    src="/bangalore.png"
                    alt="family"
                  />
                </div>
                <div className="col-span-2 md:hidden">
                  <img
                    style={{ height: "232px" }}
                    className="object-cover w-full h-90 rounded-xl overflow-hidden flex items-stretch"
                    src="/anime.jpg"
                    alt="family"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-10">
          <h3 className="text-2xl text-center lg:text-5xl font-godfather">
            "Instinctively conscientious and incredibly curious"
          </h3>
        </section>

        <section className="mx-auto graph-paper py-10">
          <div className="mb-10">
            <SectionHeadings
              title="The Family Business"
              description="Only the best tools in the business."
            />
          </div>
          <ProjectsGrid />
        </section>
        <section className="container mx-auto py-10">
          <Experience />
        </section>
        <section className="py-10">
          <div className="mb-10">
            <SectionHeadings
              title="The Portfolio Offer"
              description="Projects you can’t refuse."
            />
          </div>
          <Work />
        </section>
        <section className="container mx-auto py-10">
          <SectionHeadings
            title="The Connection Favor"
            description="Let’s make an offer."
          />
          <div className="max-w-4xl mx-auto">
            <ContactMe />
          </div>
        </section>
      </div>
    </>
  );
}
