import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '../components/Button';
import ParticleBackground from '../components/particles/ParticleBackground';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-950 to-dark-900"
    >
      <ParticleBackground />
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 relative inline-block"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary-500 p-1">
              <img
                src="/images/profile.jpg" 
                alt="Unity Developer" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-primary-600 text-white p-2 rounded-full">
              <motion.div
                animate={{ rotate: [0, 10, 0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12L20 7.5V16.5L12 12Z" fill="currentColor" />
                  <path d="M4 7.5L12 12L4 16.5V7.5Z" fill="currentColor" />
                  <path d="M12 2L20 6.5L12 11L4 6.5L12 2Z" fill="currentColor" />
                  <path d="M12 13L20 17.5L12 22L4 17.5L12 13Z" fill="currentColor" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            <span className="block">Salahuddin Gazi Fahim</span>
            <span className="text-primary-500">Unity Game Developer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Creating immersive game experiences with cutting-edge Unity development,
            bringing virtual worlds to life with passion and technical expertise.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="#contact"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-gray-400 cursor-pointer" onClick={scrollToProjects} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;