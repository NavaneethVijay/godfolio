import { IconFileDownload } from "@tabler/icons-react";
import React from "react";

export default function DownloadResume() {
  return (
    <a
      aria-label="Download Resume"
      title="Download Resume"
      href="/Sai_Navaneeth_V_ Solution_Architect.pdf"
      download
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none "
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <IconFileDownload className="h-4 w-4 mr-2" />
        Download Resume
      </span>
    </a>
  );
}
