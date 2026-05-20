'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '#' },
      { label: 'About Us', href: '#about' },
      { label: 'Programs', href: '#programs' },
      { label: 'Contact', href: '#contact' },
    ],
    'Programs': [
      { label: 'Strength Training', href: '#programs' },
      { label: 'Fat Loss', href: '#programs' },
      { label: 'CrossFit', href: '#programs' },
      { label: 'Yoga', href: '#programs' },
    ],
  };

  const socialIcons = [
    { icon: FaFacebook, href: 'https://facebook.com' },
    { icon: FaInstagram, href: 'https://www.instagram.com/agastya_muscle_maniac/' },
  ];

  return (
    <footer className="border-t border-[#333333] bg-card/85 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center gap-5">
              <Image
                src="/logo-final.png"
                alt="Agastya Muscle Maniac"
                width={112}
                height={112}
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[2.2rem] font-bold tracking-tight text-white [font-family:var(--font-abaddon)] sm:text-[2.8rem]">
                  AGASTYA
                </span>
                <span className="mt-1.5 text-[0.9rem] font-bold tracking-[0.32em] text-accent [font-family:var(--font-abaddon)] sm:text-[1.05rem]">
                  MUSCLE MANIAC
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your body and mind at India&apos;s premium gym facility with expert trainers and world-class equipment.
            </p>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333] mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} <span className="[font-family:var(--font-abaddon)]">AGASTYA MUSCLE MANIAC</span>. All rights reserved.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
