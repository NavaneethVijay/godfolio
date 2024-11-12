"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconFileDownload, IconHammer, IconMenu3 } from "@tabler/icons-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
  }`;

  const linkClass = `dark:text-gray-300 text-gray-800 hover:text-gray-600 transition-colors`;

  const Logo = () => (
    <Link href="/" className="text-2xl font-bold dark:text-white text-gray-800">
      NV.
    </Link>
  );

  const NavLinks = () => (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <Link href="/articles" className={linkClass}>
        About
      </Link>

      <Link href="/articles" className={linkClass}>
       Dev Tools
      </Link>
      <Link href="/articles" className={linkClass}>
        Work
      </Link>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <IconFileDownload className="h-4 w-4 mr-2" />
          Download Resume
        </span>
      </button>
    </div>
  );

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <IconMenu3 className="h-6 w-6 dark:text-white text-gray-800" />
                {/* <Menu className="h-6 w-6 dark:text-white text-gray-800" /> */}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex space-x-6">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}
