'use client';

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

export default function AboutSection() {
  const features = [
    'State-of-the-art equipment',
    'Expert certified trainers',
    'Personalized training plans',
    'Nutrition coaching',
    'Group fitness classes',
    'Recovery facilities',
  ];

  return (
    <section id="about" className="bg-background/65 py-20 backdrop-blur-[2px] sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
         <span className="text-accent [font-family:var(--font-abaddon)]">AGASTYA MUSCLE MANIAC</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-lg border-2 border-accent">
              <img
                src="/banner.png"
                alt="Modern gym facility"
                className="block h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-lg blur-3xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-white mb-4">
              Where Strength Meets Excellence
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              AGASTYA MUSCLE MANIAC is more than just a gym. It&apos;s a community dedicated to helping you achieve your fitness goals and transform your life. With cutting-edge facilities and expert guidance, we provide everything you need to reach peak performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
