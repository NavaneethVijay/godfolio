import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import SectionHeadings from "./SectionHeadings";

export function Experience() {
  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        "React.js & Next.js",
        "Redux & Context API",
        "Tailwind CSS",
        "Material-UI & Chakra UI",
        "React Native for mobile apps",
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        "Node.js & Express.js",
        "RESTful APIs",
        "GraphQL",
        "Microservices Architecture",
      ],
    },
    languages: {
      title: "Languages",
      skills: [
        "Python (Django, Flask)",
        "JavaScript/TypeScript",
        "Java (Spring Boot)",
        "HTML5 & CSS3",
        "SQL",
      ],
    },
    databases: {
      title: "Databases & Storage",
      skills: [
        "MongoDB & Mongoose",
        "MySQL & PostgreSQL",
        "Redis Cache",
        "Firebase",
      ],
    },
    devops: {
      title: "DevOps & Cloud",
      skills: [
        "AWS (EC2, S3, Lambda)",
        "Docker & Kubernetes",
        "CI/CD (Jenkins, GitHub Actions)",
        "Version Control (Git)",
      ],
    },
    tools: {
      title: "Development Tools",
      skills: [
        "VS Code, IntelliJ IDEA",
        "Postman for API testing",
        "Figma for UI/UX design",
        "JIRA & Confluence",
        "npm & yarn package managers",
      ],
    },
  };

  const SkillSection = ({ title, skills }: { title: string; skills: string[] }) => (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li className="font-libreFranklin dark:text-gray-300 tracking-wide " key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center items-center py-10">
        <SectionHeadings
          title="The Family Legacy"
          description="Respect earned over time."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([key, { title, skills }]) => (
          <SkillSection key={key} title={title} skills={skills} />
        ))}
      </div>
    </div>
  );
}
