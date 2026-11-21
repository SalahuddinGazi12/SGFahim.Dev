import { PlayableGame } from '../types';

export const playableGames: PlayableGame[] = [
  {
    id: 'trapwork',
    title: 'TrapWork',
    tagline: '20 levels. Zero mercy.',
    description:
      'A tricky platformer where nothing is what it seems. Find the key, reach the door, and try not to die too many times. Best played in landscape.',
    playUrl: 'https://trapwork-game.netlify.app/',
    tags: ['Platformer', 'Puzzle', '20 Levels'],
    orientation: 'landscape',
  },
  {
    id: 'arrow-escape',
    title: 'Arrow Escape',
    tagline: 'Clear the arrows. Free the aircraft!',
    description:
      'A relaxing-but-tricky puzzle game. Clear the arrows in the right order to free the aircraft and earn stars across 30 missions.',
    playUrl: 'https://arrow-escape-qkqt.netlify.app/',
    tags: ['Puzzle', 'Casual', '30 Missions'],
    orientation: 'portrait',
  },
];
