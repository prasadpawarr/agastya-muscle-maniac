'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  { id: 1, src: '/1.jpg', title: 'Cardio Zone', category: 'Facility' },
  { id: 2, src: '/2.jpg', title: 'Equipment', category: 'Tricep' },
  { id: 3, src: '/3.jpg', title: 'Equipment', category: 'Chest Press' },
  { id: 4, src: '/4.jpg', title: 'Strength Area', category: 'Facility' },
  { id: 11, src: '/15.PNG', title: 'Owner', category: '' },
  { id: 5, src: '/5.jpg', title: 'Equipment', category: '' },
  { id: 6, src: '/6.jpg', title: 'Equipment', category: 'Lateral Rowing' },
  { id: 8, src: '/full-1.png', title: 'Equipment', category: 'Facility' },
  { id: 9, src: '/9.jpg', title: 'Equipment', category: 'Hip Thrust' },
  { id: 10, src: '/10.jpg', title: 'Equipment', category: 'Incline Fly' },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-background/65 py-20 backdrop-blur-[2px] sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="text-accent">Facility</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience state-of-the-art equipment and world-class training environments
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0
                  ? 'md:col-span-2 md:row-span-2'
                  : image.id === 10
                    ? 'lg:col-start-2'
                    : ''
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 opacity-100 transition-opacity duration-300 group-hover:from-black group-hover:via-black/40">
                <div>
                  <h3 className="text-white font-black text-lg">{image.title}</h3>
                  <p className="text-accent text-sm font-bold uppercase tracking-widest">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src}
                alt="Gallery"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
