import React from 'react';
import { Heart } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { socialLinks } from '../data/social';

type IconName = keyof typeof LucideIcons;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-gray-400 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-500 p-2 rounded-lg">
                <LucideIcons.Code size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">GameDev</span>
            </div>
            <p className="mt-2 max-w-xs">
              Creating immersive game experiences with cutting-edge Unity development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(link => {
                const IconComponent = LucideIcons[link.icon as IconName];
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm">
              &copy; {currentYear} Unity Game Developer. All rights reserved.
            </p>
            <p className="text-sm flex items-center mt-1">
              Made with <Heart size={14} className="text-red-500 mx-1" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;