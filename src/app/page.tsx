// src/app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Features from '../components/Features';
import ContactUsSection from '../components/ContactUsSection';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Features />
      <ContactUsSection />
      <Footer />
    </div>
  );
}