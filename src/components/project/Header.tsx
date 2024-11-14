"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconFileDownload, IconHammer, IconMenu3 } from "@tabler/icons-react";
import DownloadResume from "./DownloadResume";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();

    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home page with hash using router
      router.push('/' + hash);
      return;
    }

    // If we are on home page, smooth scroll
    const element = document.querySelector(hash);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
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
    isScrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"
  }`;

  const linkClass = `dark:text-gray-300 text-gray-800 hover:text-gray-600 transition-colors`;

  const Logo = () => (
    <Link href="/" className="text-2xl font-bold dark:text-white text-gray-800">
      NV.
    </Link>
  );

  const NavLinks = () => (
    <div className="flex flex-col md:flex-row flex-start md:items-center gap-10">
       <Link
        href="/"
        className={linkClass}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={linkClass}
      >
        Blog
      </Link>
      <Link href="/experience" className={linkClass}>
        Experience
      </Link>
      <DownloadResume />
    </div>
  );

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        {isMounted && (
          <>
            {isMobile ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <IconMenu3 className="h-6 w-6 dark:text-white text-gray-800" />
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
          </>
        )}
      </div>
    </header>
  );
}
