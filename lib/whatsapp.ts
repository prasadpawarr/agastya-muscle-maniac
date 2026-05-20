const WHATSAPP_PHONE_NUMBER = '918123468123';

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
