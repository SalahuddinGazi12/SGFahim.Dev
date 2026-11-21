import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize2, ExternalLink, X, Gamepad2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { playableGames } from '../data/games';
import { PlayableGame } from '../types';

const GameCard: React.FC<{ game: PlayableGame; index: number }> = ({ game, index }) => {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const goFullscreen = () => {
    const el = frameRef.current;
    if (el && el.requestFullscreen) {
      el.requestFullscreen().catch(() => {
        window.open(game.playUrl, '_blank', 'noopener,noreferrer');
      });
    } else {
      window.open(game.playUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-dark-900 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
    >
      {/* Game frame */}
      <div
        ref={frameRef}
        className="relative w-full h-[320px] sm:h-[420px] bg-black"
      >
        {playing ? (
          <>
            <iframe
              src={game.playUrl}
              title={`Play ${game.title}`}
              allow="autoplay; fullscreen; gamepad; accelerometer; gyroscope"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
            <button
              onClick={() => setPlaying(false)}
              aria-label={`Close ${game.title}`}
              className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${game.title}`}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary-900 via-dark-800 to-secondary-900/40 group"
          >
            <Gamepad2 size={48} className="text-primary-200/60" />
            <span className="text-2xl font-display font-bold text-white">{game.title}</span>
            <span className="inline-flex items-center gap-2 bg-secondary-500 group-hover:bg-secondary-600 text-white font-medium py-2.5 px-6 rounded-lg shadow-lg transition-colors">
              <Play size={18} />
              Play Now
            </span>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
        <p className="text-sm font-medium text-secondary-300 mb-3">{game.tagline}</p>
        <p className="text-gray-400 mb-4">{game.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-dark-700 text-gray-300 border border-dark-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {playing && (
            <button
              onClick={goFullscreen}
              className="inline-flex items-center gap-2 text-sm py-2 px-4 rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors"
            >
              <Maximize2 size={16} />
              Fullscreen
            </button>
          )}
          <a
            href={game.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm py-2 px-4 rounded-lg border border-dark-500 text-gray-300 hover:text-white hover:border-primary-400 transition-colors"
          >
            <ExternalLink size={16} />
            Open in new tab
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const PlayableGamesSection: React.FC = () => {
  return (
    <section id="play" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Play For Fun"
          subtitle="Playable WebGL versions of some of my games. Jump in and try them right here in your browser."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {playableGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayableGamesSection;
