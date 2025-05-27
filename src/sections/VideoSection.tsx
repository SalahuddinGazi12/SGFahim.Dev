import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { allVideos } from '../data/videos';

const VideoCard: React.FC<{ video: any; index: number }> = ({ video, index }) => {
  const IconComponent = video.platform === 'youtube' ? Youtube : Linkedin;
  const iconColor = video.platform === 'youtube' ? 'text-red-500' : 'text-blue-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-800 rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-xl hover:shadow-primary-500/10"
    >
      <div className="relative aspect-video">
        <iframe
          src={video.embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <IconComponent className={iconColor} size={20} />
          <span className="text-sm font-medium text-gray-400">
            {video.platform === 'youtube' ? 'YouTube' : 'LinkedIn'}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
        <p className="text-gray-400">{video.description}</p>
      </div>
    </motion.div>
  );
};

const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Video Showcase"
          subtitle="Watch my game development journey and project demonstrations"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;