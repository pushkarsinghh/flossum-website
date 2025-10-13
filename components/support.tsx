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
      className="mt-0 ml-[3vw] p-4 sm:p-8 md:p-10 pb-0 flex flex-col"
    >
      {/* 🏷️ Title Section */}
      <div className="flex flex-col gap-2">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ fontFamily: ubuntu.style.fontFamily }}
        >
          Support Us
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          style={{ fontFamily: ubuntu.style.fontFamily }}
        >
          If you find <span className="font-semibold">Flossum</span> useful,
          consider supporting us to keep the project alive 💫
        </p>
      </div>

      {/* 💖 Support Cards */}
      <div className="flex flex-wrap gap-6 mt-8 mb-12 items-center">
        {/* GitHub Star */}
        <div
          onClick={() =>
            window.open(
              "https://github.com/pushkarsinghh/flossum",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <Image
            src="/StarOnGitHub.png"
            alt="Star Us On GitHub"
            height={180}
            width={250}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Buy Me a Coffee */}
        <a
          href="https://buymeacoffee.com/pushkarsinghh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <Image
            src="/BMAC.png"
            alt="Buy Me a Coffee"
            height={180}
            width={300}
            className="rounded-xl shadow-md"
          />
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
          className="hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <Image
            src="/SponsorOnGitHub.png"
            alt="Sponsor on GitHub"
            height={180}
            width={220}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* 🙏 Contributors Section */}
      <div>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ fontFamily: ubuntu.style.fontFamily }}
        >
          Thanks to our Contributors 💕
        </h2>
        <div className="flex flex-wrap gap-6 items-center">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              onClick={() =>
                window.open(contributor.github, "_blank", "noopener,noreferrer")
              }
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={contributor.avatar}
                alt={contributor.name}
                width={80}
                height={80}
                className="rounded-full shadow-md"
              />
              <p
                className="mt-2 text-md text-gray-700 dark:text-gray-300 text-center"
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
