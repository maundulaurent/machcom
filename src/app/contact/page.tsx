import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactUsPage() {
  return (
    <div>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side: Contact Form */}
            <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-semibold text-green-800 mb-4">Get in touch with us!</h2>
              <p className="text-gray-700 mb-6">
                For any enquiries, please don’t hesitate to contact us. We also offer free consultation.
              </p>
              <form>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email (optional)"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone no (include country code)"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 h-32 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-green-800 text-white p-3 rounded-md hover:bg-green-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side: Contact Information */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Talk to us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                    <Image
                      src="/images/phone.png" // Replace with your phone icon path
                      alt="Phone Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600">Kenya (+254) 758 144 225</p>
                  </div>
                </div>
                {/* Add more phone numbers if needed */}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Head Office</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                    <Image
                      src="/images/location.png" // Replace with your location icon path
                      alt="Location Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600">Machcom office - Nairobi, Kenya</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                    <Image
                      src="/images/email.png" // Replace with your email icon path
                      alt="Email Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600">info@machcom.co.ke</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                    <Image
                      src="/images/support.png" // Replace with your support icon path
                      alt="Support Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600">hello@machcom.co.ke</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}