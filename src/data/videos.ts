import { Video } from '../types';

export const allVideos: Video[] = [
  {
    id: '1',
    title: 'Unity Game Development Showcase',
    description: 'A showcase of my latest Unity game development projects',
    embedUrl: 'https://www.youtube.com/embed/wC_uZTRKCZ8',
    platform: 'youtube',
  },
  {
    id: '2',
    title: 'Game Development Progress',
    description: 'Sharing my game development work.',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297608396029972481?compact=1',
    platform: 'linkedin',
  },
  {
    id: '3',
    title: 'Another YouTube Game Demo',
    description: 'Demonstration of gameplay mechanics and features in my project.',
    embedUrl: 'https://www.youtube.com/embed/mbY642_zii8',
    platform: 'youtube',
  },
  {
    id: '4',
    title: 'Development Insights',
    description: 'Sharing insights and challenges from my game development.',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297611606031486977?compact=1',
    platform: 'linkedin',
  },
  {
    id: '5',
    title: 'Project Update',
    description: 'my  game development project.',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7145815753970098176?compact=1',
    platform: 'linkedin',
  },
  {
    id: '6',
    title: 'Game Development Showcase',
    description: 'Showcasing my game development work and achievements.',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6954315120994893824?compact=1',
    platform: 'linkedin',
  },
  {
    id: '7',
    title: 'Game Development Showcase',
    description: 'Showcasing my game development work and achievements.',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7116734131471884289?compact=1',
    platform: 'linkedin',
  },
  {
    id: '8',
    title: 'Game Development Update',
    description: 'Testing Teeth tracking project',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7038877112727965696?compact=1',
    platform: 'linkedin',
  }
];

// Filter videos by platform
export const youtubeVideos = allVideos.filter(video => video.platform === 'youtube');
export const linkedinVideos = allVideos.filter(video => video.platform === 'linkedin');