import type { PortfolioSectionProps, Project } from "./portfolio-section.types";
import React, { useState } from "react";

import Card from "../ui/card";
import SectionTitle from "../ui/section-title";

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My recent works">Portfolio</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 text-sm font-medium">
                        {project.category}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="text-white">🔗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p
                  className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-5"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(
                    (tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Popup Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-gray-900 rounded-2xl max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-72 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                {selected.title}
              </h3>
              <p className="text-gray-300 text-base mb-6 whitespace-pre-line">
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-400 underline"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
