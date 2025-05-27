import React, { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import VideoSection from './sections/VideoSection';
import ContactSection from './sections/ContactSection';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "S Gazi Fahim | Unity Game Developer";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Unity Game Developer portfolio showcasing game development projects, skills, and experience';
    document.head.appendChild(metaDescription);
    
    return () => {
      // Clean up meta tag when component unmounts
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="bg-dark-700 text-gray-200 min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <VideoSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;