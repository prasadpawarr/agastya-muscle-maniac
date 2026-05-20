'use client';

import { motion } from 'framer-motion';
import { FaDumbbell, FaFire, FaHeartbeat, FaRunning, FaYinYang } from 'react-icons/fa';

const programs = [
  {
    icon: FaDumbbell,
    title: 'Strength Training',
    description: 'Build muscle and increase your strength with progressive resistance training.',
    tag: 'Power',
  },
  {
    icon: FaFire,
    title: 'Fat Loss Program',
    description: 'Intensive cardio and circuit training designed to torch calories.',
    tag: 'Shred',
  },
  {
    icon: FaHeartbeat,
    title: 'Cardio Classes',
    description: 'High-energy group classes to improve cardiovascular health.',
    tag: 'Endurance',
  },
  {
    icon: FaRunning,
    title: 'CrossFit',
    description: 'Functional fitness combining weightlifting, gymnastics, and cardio.',
    tag: 'Athletic',
  },
  {
    icon: FaYinYang,
    title: 'Yoga & Flexibility',
    description: 'Enhance mobility and mental clarity with guided yoga sessions.',
    tag: 'Recovery',
  },
];

export default function ProgramsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="programs" className="border-t border-[#333333] bg-card/80 py-20 backdrop-blur-[2px] sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            Train With <span className="text-accent">Purpose</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From raw strength to fat loss and mobility, every program is built to push performance and deliver visible results.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-[#333333] bg-background p-8 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -10, borderColor: '#c0392b' }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,57,43,0.18),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="text-2xl text-accent group-hover:text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
                      {program.tag}
                    </p>
                    <p className="mt-2 text-3xl font-display leading-none text-[#3a3a3a]">
                      0{index + 1}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <h3 className="mb-3 text-2xl font-black text-white">{program.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {program.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/70 via-accent/20 to-transparent" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                    Built for serious results
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-accent/20 bg-background px-6 py-5 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
            No fluff. No guesswork. Just structured training that moves the needle.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
