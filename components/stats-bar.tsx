'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(end / 30);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl sm:text-5xl font-black text-accent mb-2">
        {count}+
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default function StatsBar() {
  const stats = [
    { end: 200, label: 'Members' },
    { end: 10, label: 'Trainers' },
    { end: 5, label: 'Training Programs' },
    { end: 15, label: 'Years Experience' },
  ];

  return (
    <section className="border-y border-[#333333] bg-card/80 py-16 backdrop-blur-[2px] sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} end={stat.end} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
