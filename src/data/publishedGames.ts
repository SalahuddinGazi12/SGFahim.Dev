import { PublishedGame } from '../types';

export const publishedGames: PublishedGame[] = [
  {
    id: 'bubble-shooter-bubble-pop',
    title: 'Bubble Shooter & Bubble Pop',
    tagline: 'Match colors, shoot balls & pop bubbles. No Wi-Fi needed.',
    description:
      'A relaxing bubble puzzle game, built from scratch and published to the stores. I handled the full development as well as the App Store and Play Store publishing.',
    highlights: [
      'Match three or more same-color bubbles to pop them',
      'Clear levels and earn stars to unlock harder puzzles',
      'Boosters such as bombs to beat tough levels',
      'Daily challenges with extra coins and rewards',
      'Plays fully offline',
    ],
    roles: ['Full Development', 'Play Store Publishing', 'App Store Publishing'],
    meta: [
      { label: 'Genre', value: 'Puzzle' },
      { label: 'Content Rating', value: '3+' },
      { label: 'Mode', value: 'Offline' },
    ],
    iconUrl:
      'https://play-lh.googleusercontent.com/Pq8-oBEvVC-TfL0Id5M6yJm-zRISYBAG2HxnLOSO8b7zkpu0WHTcOss6Syizk5Hxsmnip1jS71o8KNQYSPB1vA=w240-h480',
    screenshots: [
      'https://play-lh.googleusercontent.com/DhYK5osB1XfJgMOWOLz_cEWqDA69fIvx2wQaGk4wwuJX-tYfXKwYIGScsuf1FUmLJUCNNpCh7IMDg3forKl8bg=w526-h296',
      'https://play-lh.googleusercontent.com/R8-Nv6PUc2Xd56IZe5njiKhi2pyF2TgU91j-NTxOyX51PDW31KaXd0I6FWK3ci_STvkgBfTcF9AZXClwNj_TvA=w526-h296',
      'https://play-lh.googleusercontent.com/XREn9rd0U_TFf1ms9lM6r0WbH3CwReQkR7BJO_uttAnQqAtOZeoBG70lNzW8qZwT4KAzvU9prXzLsZIg0ZyWnQ=w526-h296',
      'https://play-lh.googleusercontent.com/dptJzmV51u2doPTUJWo4VOONgMnxcXu26gceY7GKQeDL8AmnXOBlarU9X3phUqE4KH3WG5Yc6IP-kkXxrcZ-_Q=w526-h296',
      'https://play-lh.googleusercontent.com/t_WjJ6mgqP0hF5dUD4f-BXSuLc3d1RxkFQsEiX8CJeKeYKmGAZgkkRj1hzauupAhXIjHxjo9Vi6oQc-hP_kI=w526-h296',
      'https://play-lh.googleusercontent.com/mESeEQjiqhH36y3HKggRk9ZodPA_cgOEXLncT4mFl9xB5aArLEDzT97EmH1wQWEZqerfnyaA4ecrAY66crm9XQ=w526-h296',
    ],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.bubbleshooter.bubble.pop.shoot.ball.puzzle.master.games',
    // Add the App Store link here when you have it, e.g. 'https://apps.apple.com/app/id...'
    appStoreUrl: undefined,
  },
];
