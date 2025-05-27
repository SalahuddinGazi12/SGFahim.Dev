import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { workExperience, education } from '../data/experience';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  current?: boolean;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  subtitle,
  description,
  icon,
  current = false,
  isLast = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className={`p-3 rounded-full ${current ? 'bg-primary-500' : 'bg-dark-700'} text-white`}>
          {icon}
        </div>
        {!isLast && <div className="w-px h-full bg-dark-700 my-2"></div>}
      </div>
      <div className="pb-10">
        <span className="text-sm text-gray-400 font-medium block mb-1">{date}</span>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <h4 className="text-lg text-primary-400 mb-3">{subtitle}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="mr-2 text-primary-500" />
              Work Experience
            </h3>
            <div className="space-y-4">
              {workExperience.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  date={`${item.startDate} - ${item.current ? 'Present' : item.endDate}`}
                  title={item.role}
                  subtitle={item.company}
                  description={item.description}
                  icon={<Briefcase size={20} />}
                  current={item.current}
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="mr-2 text-primary-500" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  date={`${item.startYear} - ${item.endYear}`}
                  title={item.degree}
                  subtitle={item.institution}
                  description={item.description || ''}
                  icon={<GraduationCap size={20} />}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;