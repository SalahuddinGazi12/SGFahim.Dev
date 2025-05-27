import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Habibi Live',
    description: 'Streaming app Game with features like Teen Patti, Fruits, Greedy, Fish and more. Implemented custom multiplayer functionality and WebGL template.',
    imageUrl: 'images/Yahabibi.webp',
    tags: ['Unity', 'C#', 'Multiplayer', 'WebGL'],
    demoUrl: 'https://play.google.com/store/apps/details?id=app.habibi_live'
  },
  {
    id: '2',
    title: 'Urban Life',
    description: 'A simulator game that offers immersive urban lifestyle gameplay experience.',
    imageUrl: 'images/UrbanLife.webp',
    tags: ['Unity', 'C#', 'Simulator', 'Mobile Game'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.ByGames.UrbanLife'
  },
  {
    id: '3',
    title: 'Word Mash',
    description: 'An engaging word puzzle game that challenges players vocabulary skills.',
    imageUrl: 'images/WordzMash.webp',
    tags: ['Unity', 'C#', 'Puzzle', 'Educational'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.ByGames.WordZMash'
  }
];