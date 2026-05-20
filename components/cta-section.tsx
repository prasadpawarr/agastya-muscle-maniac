'use client';

import { motion } from 'framer-motion';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function CTASection() {
  const startJourneyLink = getWhatsAppLink(
    'Hi! I want to start my fitness journey with AGASTYA MUSCLE MANIAC.'
  );
  const freeTrialLink = getWhatsAppLink(
    'Hi! I want to book a free trial at AGASTYA MUSCLE MANIAC.'
  );

  return (
    <section className="relative overflow-hidden bg-background/60 py-20 backdrop-blur-[2px] sm:py-32">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to <span className="text-accent">Transform</span> Your Fitness?
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of members who have already started their transformation journey. Get expert guidance, state-of-the-art equipment, and a supportive community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <motion.a
              href={freeTrialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg uppercase tracking-widest rounded-sm hover:bg-accent/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Trial
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
