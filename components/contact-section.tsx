'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';
import { getWhatsAppLink } from '@/lib/whatsapp';

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: 'Address',
    value: 'Ramagondanahalli Borewell Rd, Phase 2, Ramagondanahalli, Whitefield, Bengaluru, Karnataka 560066',
    link: 'https://www.google.com/maps/place/agastya+muscle+maniac/data=!4m2!3m1!1s0x3bae1300571b6b27:0xc95c3568698fb8a3?sa=X&ved=1t:242&ictx=111',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 81234 68123',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'info@agastyagym.com',
  },
  {
    icon: FaClock,
    label: 'Hours',
    value: '5:30 AM - 10 PM',
  },
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const mapPlaceUrl =
    'https://www.google.com/maps/place/agastya+muscle+maniac/data=!4m2!3m1!1s0x3bae1300571b6b27:0xc95c3568698fb8a3?sa=X&ved=1t:242&ictx=111';
  const mapEmbedUrl =
    'https://www.google.com/maps?q=Agastya+Muscle+Maniac,+Ramagondanahalli+Borewell+Rd,+Phase+2,+Ramagondanahalli,+Whitefield,+Bengaluru,+Karnataka+560066&z=17&output=embed';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const details = [
      'Hi! I want to contact AGASTYA MUSCLE MANIAC.',
      '',
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      'Message:',
      message || 'No message provided.',
    ].join('\n');

    window.open(getWhatsAppLink(details), '_blank', 'noopener,noreferrer');
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="border-t border-[#333333] bg-card/80 py-20 backdrop-blur-[2px] sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="text-accent text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1">
                        {info.label}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Google Reviews */}
            <motion.div
              className="mt-12 p-8 bg-background rounded-lg border border-[#333333]"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-accent text-lg" />
                  ))}
                </div>
                <div>
                  <span className="text-white font-black text-2xl">4.9</span>
                  <span className="text-gray-400 ml-2">(88 reviews)</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Highly rated on Google</p>
            </motion.div>

            {/* Map Link */}
            <a
              href={mapPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block overflow-hidden rounded-lg border-2 border-[#333333] bg-background transition-colors hover:border-accent"
              aria-label="Open Agastya Muscle Maniac in Google Maps"
            >
              <div className="relative h-64 w-full">
                <iframe
                  title="Agastya Muscle Maniac location"
                  src={mapEmbedUrl}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/65 to-transparent px-4 py-3">
                  <p className="font-bold text-white">View on Google Maps</p>
                  <p className="mt-1 text-sm text-gray-300">
                    Ramagondanahalli Borewell Rd, Phase 2, Ramagondanahalli, Whitefield, Bengaluru, Karnataka 560066
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-white mb-8">Send us a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full bg-background border border-[#333333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-background border border-[#333333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full bg-background border border-[#333333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-accent text-white font-bold uppercase tracking-widest rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send on WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
