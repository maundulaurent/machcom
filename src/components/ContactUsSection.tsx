import React from 'react';

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 relative inline-block">
            Contact
            <span className="absolute bottom-[-0.8rem] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600 rounded"></span>
          </h2>
          <p className="text-gray-600 mt-8">
            We’d love to hear from you! Reach out to discuss your project or get a free quote.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Contact Info with Background Image */}
          <div
            className="lg:w-1/3 bg-cover bg-center p-8 rounded-lg relative text-white"
            style={{ backgroundImage: "url('/images/contact.jpg')" }}
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <p className="text-white text-opacity-90 mb-8">
                Have a project in mind? Let’s connect and bring your ideas to life.
              </p>
              <div className="space-y-6">
                

                {/* Phone */}
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p>+254 758 144 225</p>
                    <p>+254 796 111 220</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p>info@machcom.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (Unchanged) */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below, and we’ll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}