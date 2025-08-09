"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full mt-1 flex justify-between items-center px-6 py-4 text-[#FF6B6B] font-bold text-3xl relative z-10 mb-8" style={{ fontFamily: '"Bahnschrift Condensed", Bahnschrift, Arial, sans-serif' }}>
      <div className="flex items-center gap-2">
        <Image src="/Flossum-logo-wide.png" alt="Flossum Logo" width={110} height={32} className="h-17 w-50" />
      </div>
      <div className="hidden md:flex gap-6">
        <Link href="#" className="hover:underline">HOME</Link>
        <li className="list-none hover:underline cursor-pointer" onClick={() => {
          const tutorialSection = document.getElementById("tutorial");
          if (tutorialSection) {
            tutorialSection.scrollIntoView({ behavior: "smooth" });
          }
        }}>LEARN</li>
        <li className="list-none hover:underline cursor-pointer" onClick={() => {
          const contributeSection = document.getElementById("contribute");
          if (contributeSection) {
            contributeSection.scrollIntoView({ behavior: "smooth" });
          }
        }}>CONTRIBUTE</li>
        <li className="list-none hover:underline cursor-pointer" onClick={() => {
          const sponsorSection = document.getElementById("sponsor");
          if (sponsorSection) {
            sponsorSection.scrollIntoView({ behavior: "smooth" });
          }
        }}>SPONSOR</li>
      </div>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-[#12121c] text-[#FF6B6B] flex flex-col gap-4 p-6 rounded-xl shadow-lg md:hidden" style={{ fontFamily: '"Bahnschrift Condensed", Bahnschrift, Arial, sans-serif' }}>
          <Link href="#" className="hover:underline" onClick={() => setMenuOpen(false)}>HOME</Link>
            <li
            className="list-none hover:underline cursor-pointer"
            onClick={() => {
              const tutorialSection = document.getElementById("tutorial");
              if (tutorialSection) {
              tutorialSection.scrollIntoView({ behavior: "smooth" });
              }
              setMenuOpen(false);
            }}
            >
            LEARN
            </li>
            <li
            className="list-none hover:underline cursor-pointer"
            onClick={() => {
              // Replace with your ABOUT section id if needed
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
              }
              setMenuOpen(false);
            }}
            >
            ABOUT
            </li>
            <li
            className="list-none hover:underline cursor-pointer"
            onClick={() => {
              const contributeSection = document.getElementById("contribute");
              if (contributeSection) {
              contributeSection.scrollIntoView({ behavior: "smooth" });
              }
              setMenuOpen(false);
            }}
            >
            CONTRIBUTE
            </li>
            <li
            className="list-none hover:underline cursor-pointer"
            onClick={() => {
              const sponsorSection = document.getElementById("sponsor");
              if (sponsorSection) {
              sponsorSection.scrollIntoView({ behavior: "smooth" });
              }
              setMenuOpen(false);
            }}
            >
            SPONSOR
            </li>
        </div>
      )}
    </nav>
  );
}