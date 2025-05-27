import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, PlayCircle, Codepen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { projects } from '../data/projects';

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-800 rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-xl hover:shadow-primary-500/10"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-500/20 text-primary-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-3">
          {project.demoUrl && (
            <Button
              variant="primary"
              size="sm"
              href={project.demoUrl}
              icon={<ExternalLink size={16} />}
            >
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.githubUrl}
              icon={<Github size={16} />}
            >
              Source
            </Button>
          )}
          {project.videoUrl && (
            <Button
              variant="secondary"
              size="sm"
              href={project.videoUrl}
              icon={<PlayCircle size={16} />}
            >
              Video
            </Button>
          )}
          {project.webGLUrl && (
            <Button
              variant="secondary"
              size="sm"
              href={project.webGLUrl}
              icon={<Codepen size={16} />}
            >
              Play WebGL
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects(prevCount => Math.min(prevCount + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore my latest game development work created with Unity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={loadMoreProjects}>
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;