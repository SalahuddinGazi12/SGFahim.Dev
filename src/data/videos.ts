import { Video } from '../types';

export const allVideos: Video[] = [
  {
    id: '1',
    title: 'Unity Game Development Showcase',
    description: 'A showcase of my latest Unity game development projects and technical achievements.',
    embedUrl: 'https://www.youtube.com/embed/mbY642_zii8',
    platform: 'youtube',
  },
  {
    id: '2',
    title: 'Game Development Progress',
    description: 'Sharing my latest game development work and progress updates.',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297608396029972481?compact=1',
    platform: 'linkedin',
  },
  {
    id: '3',
    title: 'Unity Development Journey',
    description: 'Exploring my journey and experiences in Unity game development.',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7145815753970098176?compact=1',
    platform: 'linkedin',
  }
];

// Filter videos by platform
export const youtubeVideos = allVideos.filter(video => video.platform === 'youtube');
export const linkedinVideos = allVideos.filter(video => video.platform === 'linkedin');