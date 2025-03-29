'use client'; // Required for client-side interactivity (tabs)

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('custom-solutions'); // Default tab

  // Tab content
  const tabContent = {
    'custom-solutions': {
      title: 'Custom Software Solutions',
      points: [
        'Tailored software development to meet your unique business needs.',
        'Seamless integration with your existing systems and workflows.',
        'Scalable solutions that grow with your business, ensuring long-term success.',
      ],
      image: '/images/features1.jpg',
    },
    'cloud-services': {
      title: 'Mobile Apps Development',
      points: [
        'Effortless mobile app development to enhance scalability and performance.',
        'Streamlined mobile app development practices for faster deployment and reliability.',
        'Infrastructure management to keep your systems running smoothly.',
      ],
      image: '/images/app-dev.png',
    },
    'digital-strategy': {
      title: 'Digital Strategy & Innovation',
      points: [
        'UI/UX design to create intuitive and engaging user experiences.',
        'SEO and marketing solutions to boost your online presence.',
        'IT consulting to align technology with your business goals.',
      ],
      image: '/images/it-consulting.webp',
    },
  };

  return (
    <>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 relative inline-block">
              Features
              <span className="absolute bottom-[-0.8rem] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-gray-600 mt-8">
              Discover how Machcom delivers innovative software solutions tailored to your needs.
            </p>

            {/* Tabs */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={() => setActiveTab('custom-solutions')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'custom-solutions'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Custom Solutions
              </button>
              <button
                onClick={() => setActiveTab('cloud-services')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'cloud-services'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Mobile Apps
              </button>
              <button
                onClick={() => setActiveTab('digital-strategy')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'digital-strategy'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Digital Strategy
              </button>
            </div>
          </div>

          {/* Main Feature Section */}
          <div className="flex flex-col lg:flex-row items-center mb-16">
            {/* Text Content */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h3>
              <ul className="space-y-4 text-gray-600">
              {tabContent[activeTab as keyof typeof tabContent].points.map((point: string, index: number) => (
  <li key={index} className="flex items-start">
    <span className="text-red-600 mr-2">✔</span>
    {point}
  </li>
))}
              </ul>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <Image
                src={tabContent[activeTab as keyof typeof tabContent].image}
                alt={tabContent[activeTab as keyof typeof tabContent].title}
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Feature Cards (Unchanged) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Expert Team */}
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-red-600 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Expert Team</h4>
              <p className="text-gray-600">
                Our skilled developers bring years of experience to every project.
              </p>
            </div>

            {/* Card 2: On-Time Delivery */}
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-red-600 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">On-Time Delivery</h4>
              <p className="text-gray-600">
                We prioritize deadlines, ensuring your project launches on schedule.
              </p>
            </div>

            {/* Card 3: Innovative Solutions */}
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-red-600 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Innovative Solutions</h4>
              <p className="text-gray-600">
                Cutting-edge technology to keep your business ahead of the curve.
              </p>
            </div>

            {/* Card 4: 24/7 Support */}
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-red-600 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h4>
              <p className="text-gray-600">
                We’re here for you anytime, ensuring your software runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-cover bg-center rounded-lg mx-4 sm:mx-6 lg:mx-8" style={{ backgroundImage: "url('/images/cta.jpg')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Let Machcom bring your vision to life with innovative, secure, and scalable software solutions. Get started today!
          </p>
          <Link href="/contact">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
              Contact Us Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}