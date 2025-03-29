// src/components/ServicesSection.tsx
'use client'; // Optional if you need client-side interactivity

import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Custom Software Development */}
          <div className="text-center border-b-4 border-red-600 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64">
              <Image
                src="/images/custom.webp"
                alt="Custom Software Development by Machcom"
                width={300}
                height={256}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">Custom Software Development</h3>
            <p className="text-gray-600 mb-4">
              Machcom builds tailored software solutions to address specific business requirements in
              Kenya. From Enterprise Resource Planning (ERP) systems to Customer Relationship
              Management (CRM) platforms and custom analytics dashboards, we empower your business
              with technology. <a href="#" className="text-red-600 hover:underline">Learn more</a>
            </p>
          </div>

          {/* Website Development */}
          <div className="text-center border-b-4 border-red-600 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64">
              <Image
                src="/images/web-design.webp"
                alt="Website Development by Machcom"
                width={320}
                height={256}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">Website Development</h3>
            <p className="text-gray-600 mb-4">
              At Machcom, we develop responsive and user-friendly websites tailored to your business
              needs in Nairobi. From sleek design to seamless functionality, we elevate your online
              presence. <a href="#" className="text-red-600 hover:underline">Learn more</a>
            </p>
          </div>

          {/* API Development and Integration */}
          <div className="text-center border-b-4 border-red-600 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64">
              <Image
                src="/images/api.webp"
                alt="API Development and Integration by Machcom"
                width={300}
                height={256}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">API Development and Integration</h3>
            <p className="text-gray-600 mb-4">
              Machcom builds and integrates APIs for seamless communication between systems in Kenya.
              We handle third-party integrations like payment gateways and social media, as well as
              custom API development for unique business logic.{' '}
              <a href="#" className="text-red-600 hover:underline">Learn more</a>
            </p>
          </div>

          {/* Software Maintenance and Support */}
          <div className="text-center border-b-4 border-red-600 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64">
              <Image
                src="/images/custom.webp"
                alt="Software Maintenance and Support by Machcom"
                width={300}
                height={256}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">Software Maintenance and Support</h3>
            <p className="text-gray-600 mb-4">
              Machcom provides ongoing updates, bug fixes, and enhancements for your software in
              Kenya. Our services include regular maintenance, feature updates based on user feedback,
              and 24/7 technical support.{' '}
              <a href="#" className="text-red-600 hover:underline">Learn more</a>
            </p>
          </div>

          {/* Mobile App Development */}
          <div className="text-center border-b-4 border-red-600 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64">
              <Image
                src="/images/mobile.webp"
                alt="Mobile App Development by Machcom"
                width={300}
                height={256}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">Mobile App Development</h3>
            <p className="text-gray-600 mb-4">
              We design and develop mobile apps for Android and iOS platforms for Kenyan businesses.
              Our services include native and cross-platform development, plus maintenance and updates
              for existing apps.{' '}
              <a href="#" className="text-red-600 hover:underline">Learn more</a>
            </p>
          </div>

          {/* IT Consulting */}
          <div className="text-center border-b-4 border-red-600 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64">
              <Image
                src="/images/it-consulting.webp"
                alt="IT Consulting by Machcom"
                width={300}
                height={256}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">IT Consulting</h3>
            <p className="text-gray-600 mb-4">
              Machcom offers expert guidance on software solutions and strategies for businesses in
              Kenya. We provide software architecture planning, technology stack recommendations, and
              digital transformation strategies.{' '}
              <a href="#" className="text-red-600 hover:underline">Learn more</a>
            </p>
          </div>
        </div>

        {/* Additional Services Banner */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg hidden d-none">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">More Services by Machcom</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Engine Optimization */}
            <div className="flex space-x-4">
              <Image
                src="/images/seo-sc.webp"
                alt="Search Engine Optimization by Machcom"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div>
                <h5 className="text-md font-semibold text-gray-800">Search Engine Optimization</h5>
                <p className="text-gray-600">
                  Everyone wants to be on the first page, but not everyone deserves to be there. Our
                  SEO services increase visibility to deliver high-quality, targeted traffic to your
                  website in Kenya.{' '}
                  <a href="#" className="text-red-600 hover:underline">Learn more</a>
                </p>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="flex space-x-4">
              <Image
                src="/images/graphic.webp"
                alt="Graphic Design by Machcom"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div>
                <h5 className="text-md font-semibold text-gray-800">Graphic Design</h5>
                <p className="text-gray-600">
                  Our expert professionals craft innovative design solutions for your brand in Kenya.
                  From logos to billboards, we ensure your brand identity resonates with clients.{' '}
                  <a href="#" className="text-red-600 hover:underline">Learn more</a>
                </p>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="flex space-x-4">
              <Image
                src="/images/digital.webp"
                alt="Digital Marketing by Machcom"
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div>
                <h5 className="text-md font-semibold text-gray-800">Digital Marketing</h5>
                <p className="text-gray-600">
                  From digitization to monetization, Machcom develops digital marketing strategies to
                  ensure the best conversion rates for Kenyan businesses.{' '}
                  <a href="#" className="text-red-600 hover:underline">Learn more</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}