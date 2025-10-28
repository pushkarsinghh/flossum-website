"use client";
import Head from "next/head";

export default function Hero() {
  return (
    <div>
      <Head>
        <meta property="og:image" content="./public/FlossumBanner.png" />
      </Head>
      <div className="relative flex flex-col justify-center items-center h-auto mx-[5vw] mb-0 mt-[2vw] py-[7vw] text-white bg-gradient-to-br from-[#f45455] via-[#f45455] to-[#e63946] border-0 rounded-[2vw] px-[3vw] overflow-hidden shadow-2xl">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[10%] left-[5%] w-[20vw] h-[20vw] bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-[15%] right-[10%] w-[25vw] h-[25vw] bg-yellow-300 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1
            className="text-[9vw] font-extrabold font-stretch-semi-condensed mb-[1vw] leading-tight drop-shadow-lg animate-fade-in"
            style={{
              fontFamily: '"Agency FB", Arial, sans-serif',
              textShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            TextFX for Terminals
            {/* Enhanced sparkle emoji with animation */}
            <div className="inline-block text-[6vw] animate-bounce-subtle mb-[2vw]">
              ✨
            </div>
          </h1>

          {/* Subtitle for context */}
          <p
            className="text-[2.5vw] font-light opacity-95 mb-[4vw] max-w-[60vw] mx-auto"
            style={{ fontFamily: '"Bahnschrift", Arial, sans-serif' }}
          >
            Beautiful text styling for your command line
          </p>

          {/* Enhanced CTA Button */}
          <div
            className="inline-block mt-[2vw] group"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
            }}
          >
            <div
              className="relative text-[#F45455] bg-gradient-to-br from-[#FFEAB5] via-[#FFE49D] to-[#ffd47b] border-[0.3vw] py-[1.2vw] px-[4vw] text-[5vw] flex items-center justify-center font-extrabold rounded-[2vw] text-center border-[#F45455] cursor-pointer transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-1 active:scale-95"
              onClick={() => {
                const platformsSection = document.getElementById("platforms");
                if (platformsSection) {
                  platformsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-[2vw] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>

              <span className="relative z-10 flex items-center gap-[1vw]">
                GET STARTED
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-[0.5vw]">
                  →
                </span>
              </span>
            </div>
          </div>

          {/* Optional: Add a subtle scroll indicator */}
          <div className="mt-[4vw] opacity-70 animate-bounce-slow">
            <svg
              className="w-[3vw] h-[3vw] mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}
