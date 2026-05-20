'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function WhatsAppFAB() {
  const message = 'Hi! I am interested in learning more about AGASTYA MUSCLE MANIAC.';
  const whatsappLink = getWhatsAppLink(message);

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: 0.3 }}
        ></motion.div>
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      </div>
    </motion.a>
  );
}
