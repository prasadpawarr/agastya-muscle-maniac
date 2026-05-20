'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jyothi setty',
    meta: '2 months ago',
    text: 'Great gym! They have high-quality imported machines that are much better than what you find elsewhere. The coaches are experts and really know their stuff. Definitely worth joining.',
    rating: 5,
  },
  {
    name: 'Nithin Appu',
    meta: '4 months ago',
    text: 'I’ve had a great experience at this gym. It has one of the best and widest varieties of equipment, suitable for all kinds of training. The facility is always clean, tidy, and well maintained, which makes workouts comfortable and motivating. The management is supportive and approachable, creating a positive overall environment. Overall, a highly recommended gym for anyone looking for quality equipment, a clean space, and professional guidance.',
    rating: 5,
  },
  {
    name: 'sonu sachin',
    meta: '4 months ago',
    text: 'Agastya Gym is easily one of the best gyms I’ve joined! The facility is always clean and well-organised, and what really stood out to me was the foreign equipment they use throughout the gym. The trainers are knowledgeable, friendly, and always ready to help improve your form or suggest progressions. Whether you’re into cardio, strength training, or full-body workouts, the imported machines and tools here give you a premium experience that you rarely get in local gyms. Highly recommend Agastya Gym to anyone serious about fitness or looking for a supportive environment to stay consistent.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const activeTestimonial = testimonials[current];

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section id="testimonials" className="border-t border-[#333333] bg-card/80 py-20 backdrop-blur-[2px] sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            What Our <span className="text-accent">Members</span> Say
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-background border border-[#333333] rounded-lg p-8 sm:p-12"
          >
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              {/* Reviewer */}
              <div className="flex-shrink-0">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-accent bg-accent/15 text-3xl font-black uppercase text-white sm:h-28 sm:w-28">
                  {activeTestimonial.name.charAt(0)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array(activeTestimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-accent text-lg" />
                    ))}
                  <span className="ml-3 text-sm uppercase tracking-widest text-gray-400">
                    {activeTestimonial.meta}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  &quot;{activeTestimonial.text}&quot;
                </p>

                {/* Author */}
                <div>
                  <h3 className="text-xl font-black text-white">
                    {activeTestimonial.name}
                  </h3>
                  <p className="text-accent font-bold text-sm uppercase tracking-widest">
                    Verified member review
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoplay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-accent w-8' : 'bg-[#4a4a4a]'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
