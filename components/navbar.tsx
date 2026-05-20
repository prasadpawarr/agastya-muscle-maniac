'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const joinNowLink = getWhatsAppLink(
    'Hi! I want to join AGASTYA MUSCLE MANIAC. Please share membership details.'
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-[#333333]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-5"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo-final.png"
              alt="Agastya Muscle Maniac"
              width={104}
              height={104}
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
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={joinNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-accent text-accent-foreground font-bold rounded-sm text-sm uppercase tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 pb-4 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={joinNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-2 bg-accent text-accent-foreground font-bold rounded-sm text-sm uppercase tracking-wide text-center"
            >
              Join Now
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
