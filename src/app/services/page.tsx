// src/app/services/page.tsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesSection from '../../components/ServicesSection';

export default function ServicesPage() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div
        className="flex justify-center items-center min-h-[200px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/service-hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="text-center py-6 px-8 rounded-lg relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">Services</h1>
          <p className="text-white text-sm sm:text-base md:text-lg mt-3">
            Our Services.
          </p>
        </div>
      </div>

      <div className="px-4 pt-12 sm:px-6 lg:px-32">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}