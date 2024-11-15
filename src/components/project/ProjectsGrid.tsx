"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  Icon12Hours,
  IconBoxAlignRightFilled,
  IconBrandAuth0,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTypescript,
  IconBrandVscode,
  IconBrowser,
  IconClipboardCopy,
  IconDatabaseCog,
  IconFileBroken,
  IconServer2,
  IconSignature,
  IconSubtask,
  IconTableColumn,
  IconTerminal,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProjectsGrid() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-0">
      <BentoGrid className="md:auto-rows-[22rem] grid-cols-1 md:grid-cols-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const ArcBrowser = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="rounded-2xl overflow-hidden items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="/tools/arc.png"
          alt="arc"
          className="w-full h-40 object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};
const VSCode = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const WarpTerminal = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-1  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="/tools/warp.png"
          alt="arc"
          className="w-full h-40 object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};
const DefaultStack = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center space-x-2">
          <IconBrandTypescript className="h-10 w-10 text-neutral-500" />
          <IconBrandReact className="h-10 w-10 text-neutral-500" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Typescript, React, Tailwind CSS
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Frontend
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <IconDatabaseCog className="h-10 w-10 text-neutral-500" />
          <IconServer2 className="h-10 w-10 text-neutral-500" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Hono, Drizzle, Postgres
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Backend
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center space-x-2">
          <IconBrandSupabase className="h-10 w-10 text-neutral-500" />
          <IconBrandAuth0 className="h-10 w-10 text-neutral-500" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Supabase, Stack Auth
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Services
        </p>
      </motion.div>
    </motion.div>
  );
};
const RayCast = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="rounded-2xl overflow-hidden items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="/tools/raycast.png"
          alt="raycast"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const TickTick = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="rounded-2xl overflow-hidden border border-neutral-100 dark:border-white/[0.2]  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="/tools/tick-tick.png"
          alt="ticktick"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: (
      <Link href="https://arc.net/" target="_blank" className="underline">
        Arc Browser
      </Link>
    ),
    description: (
      <span className="text-sm">
        Arc reshapes browsing for productivity, organizing tabs and tools
        perfectly around my workflow—now it’s my go-to browser.
      </span>
    ),
    header: <ArcBrowser />,
    className: "md:col-span-1",
    icon: <IconBrowser className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "VS Code",
    description: (
      <span className="text-sm">
        VS Code feels like home for coding—customizable, powerful, and packed
        with extensions that adapt to any project I tackle.
      </span>
    ),
    header: <VSCode />,
    className: "md:col-span-1",
    icon: <IconBrandVscode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: (
      <Link href="https://www.warp.dev/" target="_blank" className="underline">
        Warp Terminal
      </Link>
    ),
    description: (
      <span className="text-sm">
        Warp’s modern interface and command suggestions transformed my terminal
        experience—faster, smoother, and way more enjoyable
      </span>
    ),
    header: <WarpTerminal />,
    className: "md:col-span-2",
    icon: <IconTerminal className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My default stack",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <DefaultStack />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: (
      <Link
        href="https://www.raycast.com/"
        target="_blank"
        className="underline"
      >
        Raycast
      </Link>
    ),
    description: (
      <span className="text-sm">
        Raycast keeps me in my flow, instantly bringing up tools and commands
        without breaking focus—it’s indispensable.
      </span>
    ),
    header: <RayCast />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: (
      <Link href="https://ticktick.com/" target="_blank" className="underline">
        Tick Tick
      </Link>
    ),
    description: (
      <span className="text-sm">
        TickTick keeps my projects organized effortlessly, with reminders and
        tracking that help me stay productive and focused.
      </span>
    ),
    header: <TickTick />,
    className: "md:col-span-1",
    icon: <IconSubtask className="h-4 w-4 text-neutral-500" />,
  },
];
