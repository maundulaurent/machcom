// src/components/Hero.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image src="/bg.jpg" alt="Home" fill className="object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Red Accent Line */}
        <div className="w-16 h-1 bg-red-600 mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Ideas Into Digital Reality
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            We are a team of expert software developers creating innovative, secure, and scalable solutions. 
            From web apps to enterprise software, your vision meets our expertise. 
            - Let’s build something amazing.
          </p>
        <Link href="/about">
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors">
            Get Quote
          </button>
        </Link>
      </div>
    </div>
  );
}