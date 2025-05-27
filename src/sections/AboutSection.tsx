import React from 'react';
import { motion } from 'framer-motion';
import { Award, Gamepad2, Cpu, Globe } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Gamepad2 size={32} className="text-primary-500" />,
      title: "Game Development",
      description: "Expert in Unity game development with a focus on engaging gameplay mechanics and optimized performance.",
    },
    {
      icon: <Cpu size={32} className="text-primary-500" />,
      title: "Technical Skills",
      description: "Proficient in C# programming, shader development, and creating custom editor tools to streamline workflows.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about my skills and experience as a Unity Game Developer"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate Game Developer with 7+ Years of Experience
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a dedicated Unity Game Developer with a passion for creating immersive, 
                engaging experiences that push the boundaries of interactive entertainment.
              </p>
              <p>
                With expertise in C# programming, game optimization, and shader development,
                I bring technical excellence to every project I undertake.
              </p>
              <p>
                My background combines formal education in computer science with hands-on 
                experience in the gaming industry, working on titles across multiple platforms 
                including PC, mobile, and VR/AR.
              </p>
              <p>
                I'm constantly exploring new technologies and techniques to enhance my skills 
                and create better gaming experiences.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;