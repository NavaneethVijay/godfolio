import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import { IconDownload } from "@tabler/icons-react";
import { BackgroundBeams } from "../ui/background-beams";

export default function HeroSection() {
  const words = ["awesome", "difficult", "technical", "your"];
  return (
    // <BackgroundBeamsWithCollision>
    <div
      className="md:h-[45rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-black relative
    flex flex-col gap-10 items-center w-full justify-center overflow-hidden text-center px-6 md:px-0 py-20 md:py-10
    "
    >
      <div>
        <div>
          <h2 className="font-cinzel relative z-20 text-4xl font-bold text-black dark:text-white font-sans tracking-tight leading-tight">
            Hey there!
          </h2>
          <h2 className="relative z-20 font-cinzel text-4xl lg:text-6xl ml-4 bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 md:py-4">
            I'm Navaneeth Vijay
          </h2>

          <h2 className="font-norican text-2xl md:text-4xl tracking-wide relative mx-auto inline-block text-center [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            I solve <FlipWords words={words} /> problems
          </h2>
        </div>
        <div className="flex flex-col mt-10 gap-4">
          <h3 className="z-20 text-lg md:text-xl dark:text-neutral-400 max-w-4xl mx-auto font-light font-libreFranklin">
            A practical and solutions-driven software engineer specializing in
            creating scalable, efficient systems that blend technical integrity
            with seamless user experiences.
          </h3>
          <div className="flex flex-col justify-center items-center">
            <div className="relative z-20 mt-8 md:mt-10">
              <span className="font-medium py-1 border-gray-900 border-b text-base hover:text-primary md:text-lg">
                <a href="mailto:sainavaneeth@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-send inline-block mr-2"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  sainavaneeth@gmail.com
                </a>
              </span>
            </div>
            <div>
              <ul className="relative z-20 flex text-gray-900 dark:text-neutral-400 text-lg font-mono my-8">
                <li className="pr-4 md:pr-8">
                  <a
                    href="https://instagram.com/navneeth_vijay"
                    className="hover:text-primary"
                  >
                    <span className="hidden">instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram w-5 h-5 md:w-6 md:h-6"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </li>
                <li className="pr-4 md:pr-8">
                  <a
                    href="https://github.com/NavaneethVijay"
                    className="hover:text-primary"
                  >
                    <span className="hidden">github</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github w-5 h-5 md:w-6 md:h-6"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </li>
                <li className="pr-4 md:pr-8">
                  <a
                    href="https://twitter.com/navaneeth_V29"
                    className="hover:text-primary"
                  >
                    <span className="hidden">twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter w-5 h-5 md:w-6 md:h-6"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </li>
                <li className="pr-4 md:pr-8">
                  <a
                    href="https://codepen.io/NavaneethVijay"
                    className="hover:text-primary"
                  >
                    <span className="hidden">codepen</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-codepen w-5 h-5 md:w-6 md:h-6"
                    >
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                      <line x1="12" y1="22" x2="12" y2="15.5"></line>
                      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                      <line x1="12" y1="2" x2="12" y2="8.5"></line>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
    // </BackgroundBeamsWithCollision>
  );
}
