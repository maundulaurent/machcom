// src/components/Navbar.tsx
'use client'; // Required for client-side interactivity (e.g., hover states)

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5'; // Corrected to IoClose from io5
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/m2.png" // Adjust this path to your logo file in public/images
                alt="Machcom Logo"
                width={150} // Set your desired width
                height={120}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-dark text-sm hover:text-red-800 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-dark text-sm hover:text-red-800 transition-colors">
              ABOUT
            </Link>
            {/* Services with Mega Dropdown */}
            <div className="relative group flex items-center">
              <Link href="/services" className="text-dark text-sm hover:text-red-800 transition-colors">
                SERVICES
              </Link>
              <div className="hidden group-hover:block absolute left-0 top-full w-[600px] bg-white border border-gray-200 rounded-md shadow-lg z-20">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {/* Topic 1: Software Development */}
                  <div>
                    <h3 className="text-black font-semibold mb-2">Software Development</h3>
                    <Link
                      href="/services/web-development"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/mobile-apps"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      Mobile Applications
                    </Link>
                    <Link
                      href="/services/custom-software"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      Custom Solutions
                    </Link>
                  </div>
                  {/* Topic 2: Cloud & DevOps */}
                  <div>
                    <h3 className="text-black font-semibold mb-2">Cloud & DevOps</h3>
                    <Link
                      href="/services/cloud-migration"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      Cloud Migration
                    </Link>
                    <Link
                      href="/services/devops"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      DevOps Services
                    </Link>
                    <Link
                      href="/services/infrastructure"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      Infrastructure Management
                    </Link>
                  </div>
                  {/* Topic 3: Digital Strategy */}
                  <div>
                    <h3 className="text-black font-semibold mb-2">Digital Strategy</h3>
                    <Link
                      href="/services/ui-ux"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      UI/UX Design
                    </Link>
                    <Link
                      href="/services/seo-marketing"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      SEO & Marketing
                    </Link>
                    <Link
                      href="/services/consulting"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-800"
                    >
                      IT Consulting
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/portfolio" className="text-dark text-sm hover:text-red-800 transition-colors">
              OUR WORKS
            </Link>
            <Link href="/contact" className="text-dark text-sm hover:text-red-800 transition-colors">
              CONTACT US
            </Link>
            <Link href="/login" className="text-dark text-sm hover:text-red-800 transition-colors">
              LOGIN
            </Link>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hidden text-gray-400 hover:text-gray-600">
              <span className="sr-only">Close</span>
              <IoClose className="h-6 w-6" /> {/* Changed to IoClose */}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}