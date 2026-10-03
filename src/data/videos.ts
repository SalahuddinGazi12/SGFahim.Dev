import { Video } from '../types';

export const allVideos: Video[] = [
  {
    id: '1',
    title: 'MMORPG Style Game',
    description:
      'A short clip of a lane fight from an MMORPG-style game in the early stages of development, featuring a dynamic enemy wave system and a clean cloning system.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7423435851264729088?compact=1',
    platform: 'linkedin',
  },
  {
    id: '2',
    title: 'Interactive Image Reveal Challenge',
    description:
      'A Phygital (Physical + Digital) activation using the Orbbec Gemini 2 depth sensor and Unity Engine. Players physically interact with a digital wall to reveal a hidden brand message.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7455919939254792192?compact=1',
    platform: 'linkedin',
  },
  {
    id: '3',
    title: 'DHC – Isometric 2.5D Action Brawler',
    description:
      'An isometric 2.5D mobile action-brawler featuring a humanoid Doge hero battling massive hordes of internet-culture minions and powerful Memecoin bosses.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7459317609541439488?compact=1',
    platform: 'linkedin',
  },
  {
    id: '4',
    title: 'Tactical First-Person Shooter',
    description:
      'A high-stakes, single-player, mission-based FPS where the player takes the role of a tactical responder tasked with stopping organized criminal groups.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7463660974772944898?compact=1',
    platform: 'linkedin',
  },
  {
    id: '5',
    title: 'Modern RTS – MVP Demo',
    description:
      'An MVP demo showcasing modern asset integration, unit animations, resource management, and base expansion, with the core gameplay loop ready for further feature scaling.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7488505903097393155?compact=1',
    platform: 'linkedin',
  },

  // Existing videos
  {
    id: '6',
    title: 'Unity Game Development Showcase',
    description:
      'A showcase of my latest Unity game development projects.',
    embedUrl:
      'https://www.youtube.com/embed/wC_uZTRKCZ8',
    platform: 'youtube',
  },
  {
    id: '7',
    title: 'Game Development Progress',
    description:
      'Sharing my game development work.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297608396029972481?compact=1',
    platform: 'linkedin',
  },
  {
    id: '8',
    title: 'Another YouTube Game Demo',
    description:
      'Demonstration of gameplay mechanics and features in my project.',
    embedUrl:
      'https://www.youtube.com/embed/mbY642_zii8',
    platform: 'youtube',
  },
  {
    id: '9',
    title: 'Development Insights',
    description:
      'Sharing insights and challenges from my game development.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297611606031486977?compact=1',
    platform: 'linkedin',
  },
  {
    id: '10',
    title: 'Project Update',
    description:
      'My game development project.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7145815753970098176?compact=1',
    platform: 'linkedin',
  },
  {
    id: '11',
    title: 'Game Development Showcase',
    description:
      'Showcasing my game development work and achievements.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6954315120994893824?compact=1',
    platform: 'linkedin',
  },
  {
    id: '12',
    title: 'Game Development Showcase',
    description:
      'Showcasing my game development work and achievements.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7116734131471884289?compact=1',
    platform: 'linkedin',
  },
  {
    id: '13',
    title: 'Game Development Update',
    description:
      'Testing Teeth tracking project.',
    embedUrl:
      'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7038877112727965696?compact=1',
    platform: 'linkedin',
  },
];

// Filter videos by platform
export const youtubeVideos = allVideos.filter(
  video => video.platform === 'youtube'
);

export const linkedinVideos = allVideos.filter(
  video => video.platform === 'linkedin'
);
