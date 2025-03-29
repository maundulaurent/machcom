// src/app/services/web-development/page.tsx
import Header from '../../../components/Header'; // Adjust path based on your structure
import Footer from '../../../components/Footer'; // Adjust path based on your structure
import Image from 'next/image';


export default function WebDevelopmentPage() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div
        className="flex justify-center items-center min-h-[200px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/hero1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="text-center py-6 px-8 rounded-lg relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">Web Development</h1>
          <p className="text-white text-sm sm:text-base md:text-lg mt-3">
            Building innovative, user-focused websites for your business.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-24 max-w-7xl mx-auto">
        {/* Section 1: Overview */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Web Development by Machcom Business
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              At Machcom Business, we specialize in creating high-quality, responsive websites that
              drive growth. Based in Nairobi, Kenya, we combine creativity and technology to deliver
              websites that are visually stunning, user-friendly, and optimized for performance.
              Whether you need a new site, a redesign, or an upgrade, we’ve got you covered.
            </p>
            <a
              href="#"
              className="inline-block mt-6 px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
            >
              Get a Quote
            </a>
          </div>
          <div className="lg:w-1/2">
          <Image className="rounded-lg shadow-md w-full" src="/images/web-design.jpg" alt="Web Development" width={600} height={400} />
          </div>
        </div>

        {/* Section 2: Why Choose Us? */}
        <div className="mt-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side: Heading and Description */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Machcom Business is a leading web development company in Nairobi, Kenya
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                At Machcom Business, we pride ourselves on being a top web development company in
                Nairobi, Kenya. We deliver tailored solutions that empower businesses to thrive
                online, combining innovative design with robust functionality to meet your unique
                needs.
              </p>
            </div>
            {/* Right Side: Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Image src="/images/custom.png" className="w-12 h-12 mb-4" alt="Custom Design" width={48} height={48} />
                <h3 className="text-lg font-semibold text-gray-900">Custom Design</h3>
                <p className="text-gray-600 mt-2">
                  We create bespoke websites that reflect your brand’s identity, ensuring you stand
                  out in the digital space.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Image src="/images/analytics.png" className="w-12 h-12 mb-4" alt="Responsive Design" width={48} height={48} />
                <h3 className="text-lg font-semibold text-gray-900">Responsive Design</h3>
                <p className="text-gray-600 mt-2">
                  Our websites are fully responsive, providing a seamless experience across desktops,
                  tablets, and smartphones.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Image src="/images/support.png" className="w-12 h-12 mb-4" alt="User Experience" width={48} height={48} />
                <h3 className="text-lg font-semibold text-gray-900">User Experience</h3>
                <p className="text-gray-600 mt-2">
                  We focus on intuitive navigation and layouts to enhance user engagement and
                  satisfaction.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Image src="/images/strategy.png" className="w-12 h-12 mb-4" alt="SEO-Friendly" width={48} height={48} />
                <h3 className="text-lg font-semibold text-gray-900">SEO-Friendly</h3>
                <p className="text-gray-600 mt-2">
                  Built with SEO best practices, our websites help you rank higher and attract more
                  visitors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Process */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Our Web Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Website Creation</h3>
              <p className="text-gray-600 mt-3">
                We build your website from the ground up, ensuring it aligns with your business goals
                and vision.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Website Redesign</h3>
              <p className="text-gray-600 mt-3">
                Give your existing site a modern makeover with improved design and functionality.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Website Upgrade</h3>
              <p className="text-gray-600 mt-3">
                Enhance your site with new features, better performance, and the latest technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Our Works */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Our Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/images/project1.jpg" className="w-full h-48 object-cover" alt="Project 1" width={600} height={297} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Machcom E-Shop</h3>
                <p className="text-gray-600 mt-2">
                  A responsive e-commerce platform with secure payment gateways.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/images/project2.jpg" className="w-full h-48 object-cover" alt="Project 2" width={600} height={297} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Nairobi Startup Hub</h3>
                <p className="text-gray-600 mt-2">
                  A dynamic landing page for a local startup community.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/images/project3.jpg" className="w-full h-48 object-cover" alt="Project 3" width={600} height={297} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Kenya Freelance Portal</h3>
                <p className="text-gray-600 mt-2">
                  A platform connecting freelancers with clients across Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Call to Action */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="text-gray-600 mt-4">
            Let Machcom Business build a website that drives results for your business. Contact us
            today!
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 border border-gray-600 text-black rounded-lg hover:border-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}