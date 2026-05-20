import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import StatsBar from '@/components/stats-bar';
import AboutSection from '@/components/about-section';
import ProgramsSection from '@/components/programs-section';
import GallerySection from '@/components/gallery-section';
import TestimonialsSection from '@/components/testimonials-section';
import CTASection from '@/components/cta-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import WhatsAppFAB from '@/components/whatsapp-fab';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover object-[center_18%] opacity-45"
          poster="/video-poster.jpg"
        >
          <source src="/Video-649.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/50 to-background/85" />
      </div>

      <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ProgramsSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
      </div>
    </main>
  );
}
