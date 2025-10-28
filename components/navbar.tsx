"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`w-full flex justify-between items-center px-6 py-4 text-[#FF6B6B] font-bold text-3xl sticky top-0 z-50 mb-8 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-[#12121c]/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
      style={{
        fontFamily: '"Bahnschrift Condensed", Bahnschrift, Arial, sans-serif',
      }}
    >
      {/* Gradient line at bottom when scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B6B]/50 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Logo */}
      <Link href="#" className="flex items-center gap-2 group relative z-10">
        <div className="absolute inset-0 bg-[#FF6B6B]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          src="/Flossum-logo-wide.png"
          alt="Flossum Logo"
          width={110}
          height={32}
          className="h-17 w-50 transition-transform duration-300 group-hover:scale-105 relative"
          unoptimized
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link
          href="#"
          className="relative group transition-colors duration-300 hover:text-[#FF8B8B]"
        >
          <span className="relative z-10">HOME</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B6B] group-hover:w-full transition-all duration-300" />
        </Link>

        <li
          className="list-none relative group cursor-pointer transition-colors duration-300 hover:text-[#FF8B8B]"
          onClick={() => scrollToSection("tutorial")}
        >
          <span className="relative z-10">LEARN</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B6B] group-hover:w-full transition-all duration-300" />
        </li>

        <li
          className="list-none relative group cursor-pointer transition-colors duration-300 hover:text-[#FF8B8B]"
          onClick={() => scrollToSection("contribute")}
        >
          <span className="relative z-10">CONTRIBUTE</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B6B] group-hover:w-full transition-all duration-300" />
        </li>

        <li
          className="list-none relative group cursor-pointer transition-colors duration-300 hover:text-[#FF8B8B]"
          onClick={() => scrollToSection("support")}
        >
          <span className="relative z-10">SUPPORT</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B6B] group-hover:w-full transition-all duration-300" />
        </li>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden relative z-10 p-2 rounded-lg hover:bg-[#FF6B6B]/10 active:scale-95 transition-all duration-200"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="relative w-7 h-7">
          <Menu
            size={28}
            className={`absolute inset-0 transition-all duration-300 ${
              menuOpen
                ? "opacity-0 rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            size={28}
            className={`absolute inset-0 transition-all duration-300 ${
              menuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full right-6 mt-2 bg-white/95 dark:bg-[#12121c]/95 backdrop-blur-xl text-[#FF6B6B] rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 md:hidden overflow-hidden transition-all duration-500 border border-[#FF6B6B]/20 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto max-h-96"
            : "opacity-0 -translate-y-4 pointer-events-none max-h-0"
        }`}
        style={{
          fontFamily: '"Bahnschrift Condensed", Bahnschrift, Arial, sans-serif',
        }}
      >
        {/* Gradient accent at top */}
        <div className="h-1 bg-gradient-to-r from-[#FF6B6B] via-[#FF8B8B] to-[#FF6B6B]" />

        <div className="flex flex-col p-6 gap-1">
          <Link
            href="#"
            className="px-4 py-3 rounded-xl hover:bg-[#FF6B6B]/10 transition-all duration-200 hover:translate-x-1"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>

          <li
            className="list-none px-4 py-3 rounded-xl hover:bg-[#FF6B6B]/10 cursor-pointer transition-all duration-200 hover:translate-x-1"
            onClick={() => scrollToSection("tutorial")}
          >
            LEARN
          </li>

          <li
            className="list-none px-4 py-3 rounded-xl hover:bg-[#FF6B6B]/10 cursor-pointer transition-all duration-200 hover:translate-x-1"
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </li>

          <li
            className="list-none px-4 py-3 rounded-xl hover:bg-[#FF6B6B]/10 cursor-pointer transition-all duration-200 hover:translate-x-1"
            onClick={() => scrollToSection("contribute")}
          >
            CONTRIBUTE
          </li>

          <li
            className="list-none px-4 py-3 rounded-xl hover:bg-[#FF6B6B]/10 cursor-pointer transition-all duration-200 hover:translate-x-1"
            onClick={() => scrollToSection("support")}
          >
            SUPPORT
          </li>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden -z-10 animate-in fade-in duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
