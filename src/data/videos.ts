import { Video } from '../types';

export const allVideos: Video[] = [
  {
    id: '1',
    title: 'Unity Game Development Showcase',
    description: 'A showcase of my latest Unity game development projects and technical achievements.',
    embedUrl: 'https://www.youtube.com/embed/wC_uZTRKCZ8',
    platform: 'youtube',
  }
];

// Only YouTube videos
export const youtubeVideos = allVideos.filter(video => video.platform === 'youtube');