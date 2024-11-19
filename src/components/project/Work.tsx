import { Github, MoveRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import SectionHeadings from "./SectionHeadings";
import WorkCard from "./WorkCard";
import {
  IconAutomation,
  IconBrandGmail,
  IconBrandNextjs,
  IconBrandNodejs,
  IconDatabaseDollar,
  IconPhotoAi,
  IconPhotoSpark,
  IconShoppingCart,
  IconTestPipe2,
} from "@tabler/icons-react";

// Define the project type
interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  logoSvg?: React.ReactNode;
}

// Array of projects
const projects: Project[] = [
  {
    logoSvg: <IconBrandNodejs className="h-10 w-10 text-neutral-600" />,
    title: "Self-hosted image optimizer",
    description:
      "This project aims to provide image optimization for your projects. It is heavily inspried by Next.js Under the hood it uses Squoosh from GoogleChromeLabs All the details of the codes are available here",
    techStack: ["Nodejs", "Javascript"],
    githubUrl: "https://github.com/NavaneethVijay/squoosh-server",
  },
  {
    logoSvg: <IconDatabaseDollar className="h-10 w-10 text-neutral-600" />,
    title: "Custom ecommerce cart rules generator",
    description:
      "A standalone custom ecommerce cart rules creator for marketing campaigns using node.js with PIM and OMS integrations options",
    techStack: ["Node.js", "Redis", "Typescript", "Postgres"],
    githubUrl: "https://github.com/NavaneethVijay/rule-engine-api",
  },
  {
    logoSvg: <IconBrandGmail className="h-10 w-10 text-neutral-600" />,
    title: "Email manager",
    description:
      "Integrate your gmail workflow into a simpler flow, manage your emails as tasks in one place",
    techStack: ["Node.js", "Mailchimp", "Sendgrid"],
    githubUrl: "https://github.com/NavaneethVijay/email-manager",
  },
  {
    logoSvg: <IconAutomation className="h-10 w-10 text-neutral-600" />,
    title: "Automated Visual testing using backstopjs",
    description:
      "A self-hosted visual regression testing tool built on top of BackstopJS. Perfect for catching visual regressions before deploying to production.",
    techStack: ["Backstopjs", "Playwright", "Nodejs", "React"],
    githubUrl: "https://github.com/NavaneethVijay/backstopjs-visual-testing",
  },
  {
    logoSvg: <IconPhotoSpark className="h-10 w-10 text-neutral-600" />,
    title: "Quotes Maker",
    description: "Simple quote image maker using tailwindcss and Vuejs",
    techStack: ["Vue.js", "vercel", "TailwindCSS"],
    githubUrl: "https://github.com/NavaneethVijay/vuote-maker",
  },
  {
    logoSvg: <IconShoppingCart className="h-10 w-10 text-neutral-600" />,
    title: "Magento 2 theme with tailwindcss and alpinejs",
    description:
      "Magento 2 sass based theme with tailwindcss and alpinejs configuration.",
    techStack: ["Magento 2", "TailwindCSS", "Alpinejs"],
    githubUrl:
      "https://github.com/NavaneethVijay/magento2-sass-tailwindcss-theme",
  },
];

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-0">
        {projects.map((project, index) => (
          <WorkCard
            key={index}
            title={project.title}
            description={project.description}
            href={project.githubUrl}
            technologies={project.techStack}
            logoSvg={project.logoSvg}
          />
        ))}
      </div>
    </div>
  );
}
