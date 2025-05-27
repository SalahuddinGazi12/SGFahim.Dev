import { Video } from '../types';

export const allVideos: Video[] = [
  {
    id: '1',
    title: 'Unity Game Development Showcase',
    description: 'A showcase of my latest Unity game development projects and technical achievements.',
    embedUrl: 'https://www.youtube.com/embed/wC_uZTRKCZ8',
    platform: 'youtube',
  },
  {
    id: '2',
    title: 'Game Development Progress',
    description: 'Sharing my latest game development work and progress updates.',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297611606031486977?compact=1',
    platform: 'linkedin',
  }
];

// Filter videos by platform
export const youtubeVideos = allVideos.filter(video => video.platform === 'youtube');
export const linkedinVideos = allVideos.filter(video => video.platform === 'linkedin');