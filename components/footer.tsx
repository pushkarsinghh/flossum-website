"use client";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#f45455] mt-20 border-t-4 border-white/20 rounded-tl-3xl rounded-tr-3xl relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      {/* Desktop Footer */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 p-5 pt-10 relative z-10 lg:pl-20 lg:pr-30">
        {/* Flossum Section */}
        <div className="text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1
            className="text-2xl lg:text-3xl flex items-center gap-2 mb-4 hover:scale-105 transition-transform duration-300"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
              fontWeight: "bold",
            }}
          >
            Flossum
          </h1>
          <p className="text-white mb-4 text-xl lg:text-2xl ">
            Beautiful text styling for your command line
          </p>
        </div>

        {/* Navigation Section */}
        <div className="text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-50">
          <h1
            className="text-2xl lg:text-3xl flex items-center gap-2 mb-4 hover:scale-105 transition-transform duration-300"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
              fontWeight: "bold",
            }}
          >
            Navigation
          </h1>
          <ul
            className="text-xl lg:text-2xl space-y-2"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
            }}
          >
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="relative">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() => scrollToSection("about")}
            >
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() => scrollToSection("feedback")}
            >
              <span className="relative">
                Feedback
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() => scrollToSection("help")}
            >
              <span className="relative">
                Help Center
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="text-white mr-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h1
            className="text-2xl lg:text-3xl flex items-center gap-2 mb-4 hover:scale-105 transition-transform duration-300"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
              fontWeight: "bold",
            }}
          >
            Socials
          </h1>
          <ul
            className="text-xl lg:text-2xl mt-3 space-y-2"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
            }}
          >
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() =>
                window.open(
                  "https://github.com/pushkarsinghh/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <span className="relative">
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() =>
                window.open(
                  "https://twitter.com/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <span className="relative">
                Twitter(X)
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/pushkarsinghh",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <span className="relative">
                LinkedIn
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
          </ul>
        </div>

        {/* Support Us Section */}
        <div className="text-white mr-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <h1
            className="text-2xl lg:text-3xl flex items-center gap-2 mb-4 hover:scale-105 transition-transform duration-300"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
              fontWeight: "bold",
            }}
          >
            Support Us
          </h1>
          <ul
            className="text-xl lg:text-2xl mt-3 space-y-2"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
            }}
          >
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() => scrollToSection("contribute")}
            >
              <span className="relative">
                Contribute
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
            <li
              className="cursor-pointer hover:translate-x-2 hover:text-white/90 transition-all duration-300 relative group"
              onClick={() => scrollToSection("support")}
            >
              <span className="relative">
                Support
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </li>
          </ul>
        </div>

        {/* Updates Section */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <h1
            className="text-2xl lg:text-3xl text-white flex items-center gap-2 mb-4 hover:scale-105 transition-transform duration-300"
            style={{
              fontFamily:
                '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
              fontWeight: "bold",
            }}
          >
            Updates
          </h1>
          <div className="bg-white/95 backdrop-blur-sm p-3 rounded-2xl w-full lg:w-60 mt-3 flex flex-col gap-2 text-[#f45455] hover:scale-105 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 group border border-white/50">
            <p
              className="text-2xl lg:text-3xl p-2 font-semibold font-stretch-condensed group-hover:scale-105 transition-transform duration-300"
              style={{
                fontFamily:
                  '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
              }}
            >
              See What&apos;s New
            </p>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f45455] via-[#ff6b6b] to-[#f45455] rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <p
                className="relative bg-[#f45455] rounded-lg text-white flex justify-center items-center font-semibold cursor-pointer p-2 m-2 hover:scale-95 active:scale-90 transition-all duration-200 text-2xl lg:text-3xl shadow-lg"
                style={{
                  fontFamily:
                    '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
                }}
              >
                v1.0.9
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="flex text-white text-xl lg:text-2xl justify-center pb-6 mt-6 px-4 relative z-10 animate-in fade-in duration-700 delay-300"
        style={{
          fontFamily:
            '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif',
        }}
      >
        <p className="text-white/90">
          © {new Date().getFullYear()} Flossum. MIT Licensed. Open source on{" "}
          <a
            href="https://github.com/pushkarsinghh/flossum"
            className="hover:text-white transition-colors duration-300 relative group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative">
              GitHub
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right" />
            </span>
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
