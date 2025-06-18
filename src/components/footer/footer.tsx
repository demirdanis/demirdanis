import { IconGithub, IconLinkedin, IconMail } from "../icons/tailwind-icons";

import type { FooterProps } from "./footer.types";
import React from "react";

export default function Footer({
  personal,
  socialMedia,
}: Readonly<FooterProps>) {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              style={{
                width: "auto",
                height: "50px",
                zIndex: 0,
                cursor: "pointer",
                overflow: "visible",
              }}
            >
              <defs>
                <linearGradient
                  id="svg-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
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
            </svg>
            <span className="text-white font-semibold text-lg">
              {personal.name}
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Building exceptional digital experiences with modern technologies
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon === "linkedin" && (
                  <IconLinkedin width={20} height={20} />
                )}
                {social.icon === "github" && (
                  <IconGithub width={20} height={20} />
                )}
                {social.icon === "mail" && <IconMail width={20} height={20} />}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2025 {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
