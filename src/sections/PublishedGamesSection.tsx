import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, Play, Apple } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { publishedGames } from '../data/publishedGames';
import { PublishedGame } from '../types';

const PublishedGameCard: React.FC<{ game: PublishedGame }> = ({ game }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-500/60 shadow-xl shadow-primary-500/5"
    >
      <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: info */}
        <div className="lg:col-span-2 flex flex-col">
          <div className="flex items-center gap-4 mb-5">
            <img
              src={game.iconUrl}
              alt={`${game.title} icon`}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-20 h-20 rounded-2xl object-cover shadow-lg bg-dark-700"
            />
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-secondary-300 mb-1">
                <Rocket size={14} />
                Newly Published
              </span>
              <h3 className="text-2xl font-display font-bold text-white leading-tight">
                {game.title}
              </h3>
            </div>
          </div>

          <p className="text-secondary-300 font-medium mb-3">{game.tagline}</p>
          <p className="text-gray-400 mb-5">{game.description}</p>

          {/* My role */}
          <div className="flex flex-wrap gap-2 mb-5">
            {game.roles.map((role) => (
              <span
                key={role}
                className="text-xs px-3 py-1 rounded-full bg-primary-500/20 text-primary-200 border border-primary-400/40"
              >
                {role}
              </span>
            ))}
          </div>

          <ul className="space-y-2 mb-6">
            {game.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                <CheckCircle2 size={16} className="text-success-500 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {game.meta.map((m) => (
              <div key={m.label} className="bg-dark-900 rounded-lg p-3 text-center">
                <div className="text-white font-semibold">{m.value}</div>
                <div className="text-xs text-gray-500">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <motion.a
              href={game.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg bg-secondary-500 hover:bg-secondary-600 text-white font-medium shadow-lg hover:shadow-secondary-500/40 transition-colors"
            >
              <Play size={18} />
              Get it on Google Play
            </motion.a>
            {game.appStoreUrl && (
              <motion.a
                href={game.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg border-2 border-primary-400 text-primary-200 hover:bg-primary-500/10 font-medium transition-colors"
              >
                <Apple size={18} />
                Download on App Store
              </motion.a>
            )}
          </div>
        </div>

        {/* Right: screenshots */}
        <div className="lg:col-span-3 min-w-0">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3">
            {game.screenshots.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${game.title} screenshot ${i + 1}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="snap-center shrink-0 w-[85%] sm:w-[70%] aspect-[526/296] object-cover rounded-xl bg-dark-700 border border-dark-500/60"
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Swipe or scroll to see more screenshots</p>
        </div>
      </div>
    </motion.div>
  );
};

const PublishedGamesSection: React.FC = () => {
  return (
    <section
      id="published"
      className="py-20 bg-gradient-to-b from-dark-900 via-primary-950 to-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="New Published Game"
          subtitle="Built end to end: full development, plus App Store and Play Store publishing"
        />

        <div className="space-y-10">
          {publishedGames.map((game) => (
            <PublishedGameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublishedGamesSection;
