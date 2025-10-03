"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/presentation", label: "Le Cabinet" },
  { href: "/equipe", label: "Équipe" },
  { href: "/domaines", label: "Domaines" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-expo glass-morphism shadow-sm",
      compact ? "py-2" : "py-4"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo-mva.png" alt="MVA AVOCATS" className="h-8 w-auto" />
          <span className="font-inter font-semibold text-lg text-primary">MVA AVOCATS</span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map(link => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={clsx(
                  "px-3 py-2 rounded-lg transition-all duration-300 font-inter font-medium",
                  pathname === link.href 
                    ? "text-primary bg-primary/10 border-l-2 border-primary" 
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <span className={clsx("w-5 h-0.5 bg-gray-700 transition-all duration-300", mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1")}></span>
            <span className={clsx("w-5 h-0.5 bg-gray-700 transition-all duration-300", mobileMenuOpen ? "opacity-0" : "opacity-100")}></span>
            <span className={clsx("w-5 h-0.5 bg-gray-700 transition-all duration-300", mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1")}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "md:hidden glass-morphism border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden",
        mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <ul className="px-6 py-4 space-y-2">
          {links.map(link => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={clsx(
                  "block py-3 px-4 rounded-lg transition-colors font-inter font-medium",
                  pathname === link.href 
                    ? "text-primary bg-primary/10 border-l-4 border-primary" 
                    : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
