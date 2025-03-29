// src/components/AboutSection.tsx
'use client'; // Optional if you need client-side interactivity, but not required here

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 ">
          <h2 className="text-4xl font-bold text-black mb-4">Empowering Your Business with Technology</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-6">Our Mission at Machcom</h3>
          <p className="text-gray-500 mb-6">
            At Machcom, we are a dedicated software development company committed to transforming your
            business challenges into innovative solutions. With years of expertise, we deliver
            customized software that streamlines operations, enhances user experiences, and drives
            growth. Our team works closely with you to understand your unique needs and provide
            cutting-edge technology tailored to your goals.
          </p>
            <Link href="/about">
            <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <Image
            src="/images/about.webp" // Replace with your image path
            alt="Machcom team collaborating on software solutions"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}