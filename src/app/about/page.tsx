// src/app/about/page.tsx
import Header from '../../components/Header'; // Adjust path based on your structure
import Footer from '../../components/Footer'; // Adjust path based on your structure
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div
        className="flex justify-center items-center min-h-[200px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/about-us2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="text-center py-6 px-8 rounded-lg relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">About Us</h1>
          <p className="text-white text-sm sm:text-base md:text-lg mt-3">
            About Machcom.
          </p>
        </div>
      </div>

      {/* Section 1: Empowering Through Knowledge */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Image with Overlay */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
            <Image src="/images/innovating.jpg" alt="innovating" width={800} height={560} className="w-full object-cover" />
              <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg -translate-x-8 -translate-y-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-500">4+</p>
                  <p className="text-sm text-gray-600">Years in Business</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Text Content */}
          <div className="lg:w-1/2">
            <p className="text-red-600 uppercase text-sm font-semibold">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Innovating Through Technology at Machcom Business
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              At Machcom Business, based in Nairobi, Kenya, we are passionate about leveraging
              technology to empower businesses. Our team of skilled developers, designers, and
              strategists work together to deliver cutting-edge web and mobile solutions that drive
              growth and innovation.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              People Love to Work With Us.
            </p>
            <div className="flex gap-6 mt-6">
              <div>
                <p className="text-2xl font-bold text-red-600">95%</p>
                <p className="text-gray-600 text-sm">
                  of clients recommend our services
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">9/10</p>
                <p className="text-gray-600 text-sm">
                  businesses report improved efficiency
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-6 px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:border-red-800 transition"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: The English Alphabet (Repurposed for Machcom's Mission) */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Building the Future with Machcom Business
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We believe in creating solutions that last. From custom web
              development to cloud infrastructure, we provide end-to-end services that help
              businesses in Nairobi and beyond thrive in the digital age.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-gray-600">
                • Expertise in modern technologies like React, Node.js, and AWS
              </p>
              <p className="text-gray-600">
                • Tailored solutions for startups and enterprises alike
              </p>
              <p className="text-gray-600">
                • Committed to delivering projects on time and within budget
              </p>
            </div>
            <Link
              href="/services"
              className="inline-block mt-6 px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:border-red-800 transition"
            >
              Learn More →
            </Link>
          </div>
          {/* Right Side: Image */}
          <div className="lg:w-1/2">
          <Image src="/images/growth1.png" alt="growing together" width={600} height={400} className="rounded-lg w-full object-cover" />
          </div>
        </div>
        {/* Cards Below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Innovative Solutions</h3>
            <p className="text-gray-600 mt-2">
              We use the latest technologies to build solutions that drive innovation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Client Satisfaction</h3>
            <p className="text-gray-600 mt-2">
              Our focus is on delivering results that exceed client expectations.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Scalable Growth</h3>
            <p className="text-gray-600 mt-2">
              We build solutions that scale with your business as it grows.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Meet the Team
        </h2>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Our team is a group of passionate professionals dedicated to delivering exceptional
          software solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image src="/images/muema.jpg" alt="muema" width={96} height={96} className="rounded-full mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Charles Muema</h3>
            <p className="text-gray-600">Lead Developer</p>
            <p className="text-gray-600 mt-2">
            Muema leads the team with over 6 years of experience in building scalable applications and ERPs, overseeing API integrations, ensuring seamless performance across our projects. 
            Muema is passionate about mentoring junior developers and driving innovation through modern frameworks like Django, Laravel, React and Node.js.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Image
              src="/images/dev.jpg"
              alt="julius"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Julius Kavingo</h3>
            <p className="text-gray-600">Full Stack Developer</p>
            <p className="text-gray-600 mt-2">
            Julius builds robust and scalable web applications, seamlessly integrating front-end and back-end technologies to deliver exceptional user experiences.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Image
              src="/images/dev.jpg"
              alt="charles"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Charles Mutinda</h3>
            <p className="text-gray-600">UI/UX Designer</p>
            <p className="text-gray-600 mt-2">
              Charles designs intuitive and visually appealing interfaces that enhance user engagement and satisfaction across our digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
        Subscribe to our newsletter and receive the latest news about our software solutions and services!
        </p>
        <form className="flex justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-r-full hover:bg-red-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>

      <Footer />
    </div>
  );
}