import { NavigationProps } from "./navigation.types";
import React from "react";

// Utility: Animate scroll and highlight section
function scrollToSectionWithEffect(
  id: string,
  setActiveSection: (s: string) => void
) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 32; // Offset artırıldı
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);

    el.classList.add("focus-animate-section");
    setTimeout(() => {
      el.classList.remove("focus-animate-section");
    }, 700);
  }
}

const Navigation: React.FC<NavigationProps> = ({
  data,
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 370 100"
          style={{
            width: "auto",
            height: "50%",
            zIndex: 0,
            cursor: "pointer",
            overflow: "visible",
          }}
        >
          <defs>
            <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0" stopColor="#60a5fa" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <g
            id="SvgjsG1101"
            transform="matrix(1.1111111111111112,0,0,1.1111111111111112,-5.555555555555555,-5.555555555555555)"
            fill="url(#svg-gradient)"
          >
            <path
              d="M 5 10.537 C 5 7.492 7.491 5 10.537 5 L 48.616 5 L 48.616 36.946 L 39.005 36.946 L 25.916 23.857 L 5 23.857 L 5 10.537 Z M 5 26.626 L 24.769 26.626 L 36.946 38.803 L 36.946 48.616 L 5 48.616 L 5 26.626 Z M 5 51.384 L 36.946 51.384 L 36.946 61.197 L 24.769 73.374 L 5 73.374 L 5 51.384 Z M 48.615 95 L 10.537 95 C 7.491 95 5 92.508 5 89.463 L 5 76.143 L 25.916 76.143 L 39.004 63.055 L 48.615 63.055 L 48.615 95 Z M 95 89.463 C 95 92.508 92.508 95 89.463 95 L 51.384 95 L 51.384 63.054 L 55.506 62.062 L 58.839 60.712 L 74.084 76.142 L 95 76.142 L 95 89.463 Z M 95 73.374 L 75.231 73.374 L 60.578 58.92 L 62.486 55.578 L 63.054 51.385 L 95 51.385 L 95 73.374 Z M 95 48.616 L 63.054 48.616 L 62.682 44.256 L 60.947 41.483 L 75.231 26.626 L 95 26.626 L 95 48.616 Z M 95 23.857 L 74.084 23.857 L 59.242 39.709 L 55.489 37.779 L 51.384 36.946 L 51.384 5 L 89.463 5 C 92.508 5 95 7.492 95 10.537 L 95 23.857 Z"
              fill="url(#svg-gradient)"
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 25.2,
                fontWeight: 700,
                whiteSpace: "pre",
              }}
              transform="matrix(1.259808, 0, 0, 1.064234, -9.964417, -2.268868)"
              x="38.353"
              y="58.152"
            >
              D
            </text>
          </g>
          <g
            id="SvgjsG1102"
            transform="matrix(2.2801895658085685,0,0,2.2801895658085685,113.4330516149661,-9.362274789702823)"
            fill="#d3d3d3"
          >
            <path d="M17.72 12 c2.72 0 4.96 2.24 4.96 5 l0 18 c0 2.76 -2.24 5 -4.96 5 l-14.84 0 l0 -28 l14.84 0 z M16.28 32.24 l0 -12.48 c0 -0.76 -0.6 -1.32 -1.32 -1.32 l-5.68 0 l0 15.16 l5.68 0 c0.72 0 1.32 -0.6 1.32 -1.36 z M46.040000000000006 18.44 l-11.2 0 l0 4.36 l8.04 0 l0 6.4 l-8.04 0 l0 4.4 l11.2 0 l0 6.4 l-17.6 0 l0 -28 l17.6 0 l0 6.44 z M68.4 12 l6.4 0 l0 28 l-6.4 0 l0 -12.52 l-4.08 9.84 l-2.04 0 l-4.08 -9.84 l0 12.52 l-6.4 0 l0 -28 l6.4 0 l5.08 12.28 z M86.96000000000001 12 l0 28 l-6.4 0 l0 -28 l6.4 0 z M107.52000000000001 12 c2.76 0 5 2.24 5 5 l0 10.52 c0 2.12 -1.32 3.92 -3.16 4.64 l3.16 7.84 l-6.8 0 l-3.04 -7.48 l-3.56 0 l0 7.48 l-6.4 0 l0 -28 l14.8 0 z M104.80000000000001 26.08 c0.72 0 1.32 -0.56 1.32 -1.28 l0 -5.08 c0 -0.72 -0.6 -1.28 -1.32 -1.28 l-5.68 0 l0 7.64 l5.68 0 z" />
          </g>
        </svg>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {data.navigation.map((item: string, index: number) => (
            <a
              key={index}
              className={`text-gray-300 hover:text-white transition-colors duration-300 relative group ${
                activeSection === item.toLowerCase() ? "text-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSectionWithEffect(item.toLowerCase(), setActiveSection);
              }}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${
                  activeSection === item.toLowerCase()
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <span>X</span> : <span>≡</span>}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            {data.navigation.map((item: string, index: number) => (
              <a
                key={index}
                className={`text-gray-300 hover:text-white py-2 transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-white font-bold"
                    : ""
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSectionWithEffect(
                    item.toLowerCase(),
                    setActiveSection
                  );
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;

// Animasyon için global CSS ekleyin (örnek):
// .focus-animate-section { transition: box-shadow 0.7s; box-shadow: 0 0 0 4px #a78bfa; }
