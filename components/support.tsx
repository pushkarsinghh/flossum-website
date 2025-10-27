"use client";

import { Ubuntu } from "next/font/google";
import Image from "next/image";

const ubuntu = Ubuntu({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

// 🧑‍💻 Add contributors here:
const contributors = [
  {
    name: "Adarsh Gupta",
    github: "https://github.com/adarshdotdev",
    avatar: "/contributors/adarshdotdev.png",
  },
  {
    name: "coftad",
    github: "https://github.com/coftad",
    avatar: "/contributors/coftad.png",
  },
  {
    name: "Satya Prakash",
    github: "https://github.com/SatyaIsCoding",
    avatar: "/contributors/SatyaIsCoding.png",
  },
  {
    name: "Lazy4js2qy",
    github: "https://github.com/Lazy4js2qy",
    avatar: "/contributors/lazy.png",
  },
];

export default function Support() {
  return (
    <section
      id="sponsor"
      className="mt-0 ml-[3vw] p-4 sm:p-8 md:p-10 pb-0 flex flex-col relative overflow-hidden"
    >
      {/* Subtle background gradient decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl -z-10" />

      {/* 🏷️ Title Section */}
      <div className="flex flex-col gap-3 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
          style={{ fontFamily: ubuntu.style.fontFamily }}
        >
          Support Us
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
          style={{ fontFamily: ubuntu.style.fontFamily }}
        >
          If you find <span className="font-semibold text-gray-900 dark:text-white">Flossum</span> useful,
          consider supporting us to keep the project alive{" "}
          <span className="inline-block animate-pulse">💫</span>
        </p>
      </div>

      {/* 💖 Support Cards */}
      <div className="flex flex-wrap gap-6 mb-16 items-center">
        {/* GitHub Star */}
        <div
          onClick={() =>
            window.open(
              "https://github.com/pushkarsinghh/flossum",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="group relative hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-left-8 duration-700 delay-100"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 dark:from-yellow-300/10 dark:to-orange-400/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 group-hover:ring-2 group-hover:ring-yellow-400/50 dark:group-hover:ring-yellow-300/50 transition-all duration-300">
            <Image
              src="/StarOnGitHub.png"
              alt="Star Us On GitHub"
              height={180}
              width={250}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Buy Me a Coffee */}
        <a
          href="https://buymeacoffee.com/pushkarsinghh"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-left-8 duration-700 delay-200"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 dark:from-yellow-400/10 dark:to-amber-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 group-hover:ring-2 group-hover:ring-yellow-500/50 dark:group-hover:ring-yellow-400/50 transition-all duration-300">
            <Image
              src="/BMAC.png"
              alt="Buy Me a Coffee"
              height={180}
              width={300}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* GitHub Sponsor */}
        <div
          onClick={() =>
            window.open(
              "https://github.com/sponsors/pushkarsinghh",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="group relative hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-left-8 duration-700 delay-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 dark:from-pink-400/10 dark:to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 group-hover:ring-2 group-hover:ring-pink-500/50 dark:group-hover:ring-pink-400/50 transition-all duration-300">
            <Image
              src="/SponsorOnGitHub.png"
              alt="Sponsor on GitHub"
              height={180}
              width={220}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* 🙏 Contributors Section */}
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
          style={{ fontFamily: ubuntu.style.fontFamily }}
        >
          Thanks to our Contributors 💕
        </h2>
        <div className="flex flex-wrap gap-8 items-center">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              onClick={() =>
                window.open(contributor.github, "_blank", "noopener,noreferrer")
              }
              className="group flex flex-col items-center cursor-pointer animate-in fade-in zoom-in-95 duration-500"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 dark:from-purple-400/20 dark:to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                
                {/* Avatar ring */}
                <div className="relative p-1 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full group-hover:from-purple-400 group-hover:to-blue-500 dark:group-hover:from-purple-400 dark:group-hover:to-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
                    <Image
                      src={contributor.avatar}
                      alt={contributor.name}
                      width={80}
                      height={80}
                      className="rounded-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              
              <p
                className="mt-3 text-md text-gray-700 dark:text-gray-300 text-center font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: ubuntu.style.fontFamily }}
              >
                {contributor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}