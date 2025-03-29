// src/components/Footer.tsx
'use client'; // Optional for client-side interactivity if needed (e.g., form handling)

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Machcom</h4>
          {/* <p className="text-gray-400 mb-2">Moi Avenue</p> */}
          <p className="text-gray-400 mb-2">Nairobi, Kenya</p>
          <p className="text-gray-400 mb-2">Phone: +254 758 144 225</p>
          <p className="text-gray-400 mb-2">Email: machcomdevs@gmail.com</p>
          {/* <p className="text-gray-400 mb-2">Email: info@machcom.com</p> */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-red-600">
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-red-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-red-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-red-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-red-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-400">Web Design</span>
            </li>
            <li>
              <span className="text-gray-400">Web Development</span>
            </li>
            <li>
              <span className="text-gray-400">Product Management</span>
            </li>
            <li>
              <span className="text-gray-400">Software Solutions</span>
            </li>
            <li>
              <span className="text-gray-400">Technical Support</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter and receive the latest news about our software solutions and
            services!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none"
            />
            <button className="bg-red-600 text-white p-2 rounded-r-md hover:bg-red-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">
          © Copyright Machcom. All Rights Reserved
        </p>
        <p className="text-gray-400 text-sm mt-2">Designed by Machcom</p>
      </div>
      <div className="fixed bottom-4 right-4">
        <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-800">
          <FaArrowUp className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
}