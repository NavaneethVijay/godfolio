import SectionHeadings from "@/components/project/SectionHeadings";
import { IconCode, IconProgress } from "@tabler/icons-react";
import { BriefcaseIcon } from "lucide-react";
import React, { ReactHTML, ReactNode } from "react";

interface JobExperience {
  year: number;
  title: string;
  company: string;
  description: ReactNode;
}

const getStackBadge = (stack: string) => {
  return (
    <span className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-sm italic bg-gray-50 mr-2 px-1">
      {stack}
    </span>
  );
};
const experiences: JobExperience[] = [
  {
    year: new Date().getFullYear(),
    title: "Technical Lead",
    company: "Codilar Technologies Pvt. Ltd",
    description: (
      <div>
        Working as a Technical Lead, I am involved in gathering client
        requirements and providing tailored solutions to meet the business
        needs. I also ensure we follow industry standard coding practices. I
        work closely with the Client and the Teams to deliver projects on time
        and within budget while refining processes for efficiency and quality.
        Currently working on Nextjs, building decoupled applications.
        <div className="flex gap-2 mt-4">
          {getStackBadge("nextjs")}
          {getStackBadge("storybook")}
          {getStackBadge("jest")}
          {getStackBadge("nodejs")}
          {getStackBadge("expressjs")}
        </div>
      </div>
    ),
  },
];

export default function experience() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <section className="mt-20 pt-10">
        <SectionHeadings
          title="Journey Through the Ranks"
          description="From trusted roles to key projects, each step crafted with loyalty and expertise"
        />
      </section>
      <div className="relative mt-20">
        {experiences.map((experience, index) => {
          return (
            <div
              key={index}
              className="mb-8 flex justify-between items-start w-full font-libreFranklin"
            >
              <div className="z-20 flex items-center order-1">
                <h1 className="mx-auto mt-4 text-gray-400 font-cinzel font-semibold text-lg">
                  {experience.year}
                </h1>
              </div>

              <div className="order-2 rounded-lg shadow-xl w-9/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-xl">{experience.title}</h3>
                <h4 className="mb-3 font-semibold text-primary text-md">
                  {experience.company}
                </h4>
                <div className="text-base leading-snug tracking-wide text-gray-300 dark:text-neutral-300">
                  {experience.description}
                </div>
              </div>

              <div className="order-3 w-3/12"></div>
            </div>
          );
        })}
        <div
          className="absolute h-full w-1 bg-neutral-800 left-6 top-6 transform -translate-x-1/2"
          data-id="14"
        ></div>
      </div>
    </div>
  );
}
