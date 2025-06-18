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
            <img
              src="/img/demir.webp"
              alt={personal.name}
              className="w-10 h-10 rounded-xl object-cover border-2 border-blue-500"
            />
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
