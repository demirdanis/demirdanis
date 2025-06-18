"use client";

import React, { useEffect, useState } from "react";

import AboutSection from "../components/about-section/about-section";
import Footer from "../components/footer/footer";
import HeroSection from "../components/hero-section/hero-section";
import Navigation from "../components/navigation/navigation";
import type { PortfolioData } from "../types/portfolio-data.types";
import PortfolioSection from "../components/portfolio-section/portfolio-section";
import ResumeSection from "../components/resume-section/resume-section";
import ServicesSection from "../components/services-section/services-section";
import portfolioService from "../service/portfolio.service";

// Main Portfolio Component
const Portfolio = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(portfolioService.getPortfolioData());
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (!data) return;
    const sectionIds = data.navigation.map((item) => item.toLowerCase());
    function onScroll() {
      const scrollPos = window.scrollY + 80; // Navbar offset
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          if (el.offsetTop <= scrollPos) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation
        data={data}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection
        personal={data.personal}
        socialMedia={data.socialMedia}
        stats={data.stats}
      />
      <AboutSection personal={data.personal} skills={data.skills} />
      <ResumeSection experience={data.experience} education={data.education} />
      <ServicesSection services={data.services} />
      <PortfolioSection projects={data.projects} />
      <Footer personal={data.personal} socialMedia={data.socialMedia} />
    </div>
  );
};

export default Portfolio;
