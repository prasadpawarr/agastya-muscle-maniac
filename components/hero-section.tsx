'use client';

import { motion } from 'framer-motion';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function HeroSection() {
  const startJourneyLink = getWhatsAppLink(
    'Hi! I want to start my fitness journey with AGASTYA MUSCLE MANIAC.'
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background/20 px-4 pt-24 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 leading-tight">
              TRANSFORM
              <br />
              <span className="text-accent">YOUR BODY</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join the elite community of athletes and fitness enthusiasts. Unleash your potential with expert trainers and state-of-the-art equipment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href={startJourneyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-white font-bold text-lg uppercase tracking-widest rounded-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}
