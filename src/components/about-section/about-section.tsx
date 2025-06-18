import type { AboutSectionProps } from "./about-section.types";
import Card from "../ui/card";
import React from "react";
import SectionTitle from "../ui/section-title";

const AboutSection: React.FC<AboutSectionProps> = ({ personal, skills }) => {
  // Yüzdeye göre azalan sırala
  const sortedSkills = [...skills].sort((a, b) => b.percentage - a.percentage);
  return (
    <section id="about" className="py-20 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Learn more about me">About Me</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {personal.longBio}
            </p>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Personal Info
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name</span>
                  <span className="text-white">{personal.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Age</span>
                  <span className="text-white">{personal.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-white">{personal.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email</span>
                  <span className="text-white">{personal.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white">{personal.location}</span>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: Math.ceil(sortedSkills.length / 2) }).map(
                (_, rowIdx) => (
                  <div key={rowIdx} className="space-y-6">
                    {[
                      sortedSkills[rowIdx],
                      sortedSkills[rowIdx + Math.ceil(sortedSkills.length / 2)],
                    ]
                      .filter(Boolean)
                      .map((skill, colIdx) => (
                        <div key={colIdx}>
                          <div className="flex justify-between text-white mb-2">
                            <span
                              className="font-medium flex items-end h-12 pt-2 leading-tight"
                              style={{
                                minHeight: "3rem",
                                display: "flex",
                                alignItems: "flex-end",
                              }}
                            >
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center w-full">
                            <div className="w-full bg-gray-700 rounded-full h-2 relative">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.percentage}%` }}
                              ></div>
                            </div>
                            <span className="ml-0 text-xs text-gray-400 min-w-[2rem] text-right">
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
