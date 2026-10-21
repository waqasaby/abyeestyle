/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS, Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleExploreClick = () => {
    scrollToSection('work');
  };

  const handleSelectService = (serviceName: string) => {
    setContactSubject(`Service Commission: ${serviceName}`);
    scrollToSection('contact');
  };

  const handleInquireSimilar = (projectName: string) => {
    setContactSubject(`Project inquiry inspired by: ${projectName}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-200 font-sans selection:bg-amber-400 selection:text-neutral-950 flex flex-col">
      {/* Navigation */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={handleExploreClick}
          onContactClick={handleContactClick}
        />

        {/* Selected Works Showcase */}
        <ProjectsShowcase
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Services & Capabilities */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* About & Craftsmanship */}
        <AboutSection onContactClick={handleContactClick} />

        {/* Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* Contact & Commission Form */}
        <ContactSection prefilledSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox / Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onInquireSimilar={handleInquireSimilar}
      />
    </div>
  );
}
