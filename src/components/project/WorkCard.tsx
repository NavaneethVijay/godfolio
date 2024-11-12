import Link from "next/link";
import React from "react";

interface WorkCardProps {
  title: string;
  description: string;
  href: string;
  technologies: string[];
  logoSvg?: React.ReactNode;
}

export default function WorkCard({
  title,
  description,
  href,
  technologies,
  logoSvg,
}: WorkCardProps) {
  return (
    <Link
      className="group hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-800 w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="pointer-events-none ">
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
          style={{
            maskImage:
              "radial-gradient(300px at 211.5px 42px, white, transparent)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          style={{
            maskImage:
              "radial-gradient(300px at 211.5px 42px, white, transparent)",
          }}
        ></div>
      </div>
      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0"></span>
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0"></span>
        <div className=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
          <div className="my-4">{logoSvg}</div>
          <div className="font-libreFranklin">
            <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
              {description}
            </p>
            <div className="pt-4 flex md:flex-row flex-wrap">
              {technologies.map((tech, index) => (
                <p
                  key={index}
                  className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
