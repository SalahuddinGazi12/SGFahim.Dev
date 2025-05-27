import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/skills';

type IconName = keyof typeof LucideIcons;

interface SkillCardProps {
  name: string;
  level: number;
  icon?: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon, index }) => {
  // Safely get the icon component with proper type checking
  const getIconComponent = (iconName?: string) => {
    if (!iconName) return LucideIcons.Code;
    const IconComponent = LucideIcons[iconName as IconName];
    return IconComponent || LucideIcons.Code;
  };

  const IconComponent = getIconComponent(icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-primary-500/20 rounded-lg mr-4">
          <IconComponent className="text-primary-500" size={24} />
        </div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      
      <div className="w-full bg-dark-700 rounded-full h-2.5 mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level * 10}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="h-2.5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500"
        ></motion.div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-400">
        <span>Beginner</span>
        <span>Advanced</span>
        <span>Expert</span>
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="My technical skills and areas of expertise in game development"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 bg-dark-700 rounded-lg border border-dark-600"
        >
          <h3 className="text-xl font-bold text-white mb-4">Additional Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Unity Asset Store", "Procedural Generation", "Physics Systems",
              "AI Pathfinding", "HLSL Shaders", "Blender", "Git/Version Control",
              "Agile Development", "Performance Optimization", "Unity Animation", 
              "Cross-platform Development", "Unity UI System", "Unity Addressables",
              "Gameplay Prototyping", "Unity Input System", "Unity DOTS"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-3 py-1.5 bg-dark-600 text-gray-300 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;