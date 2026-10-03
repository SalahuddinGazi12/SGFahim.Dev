import { Video } from '../types';

export const allVideos: Video[] = [
const projects = [
  {
    id: '1',
    title: 'MMORPG Style Game',
    description:'A short clip of a lane fight from an MMORPG-style game in the early stages of development, featuring a dynamic enemy wave system and a clean cloning system.',
    embedUrl:'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7423435851264729088?compact=1',
    platform:'linkedin',
  },
];

// Filter videos by platform
export const youtubeVideos = allVideos.filter(video => video.platform === 'youtube');
export const linkedinVideos = allVideos.filter(video => video.platform === 'linkedin');
