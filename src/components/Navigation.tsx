'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-purple-600">
            K9SK8park
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              The Idea
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Daycare
            </Link>
            <Link href="/grooming" className="text-gray-700 hover:text-purple-600 transition-colors">
              Parkway Grooming
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
              Prices
            </Link>
            <Link href="/photos" className="text-gray-700 hover:text-purple-600 transition-colors">
              Photos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              The Idea
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Daycare
            </Link>
            <Link href="/grooming" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Parkway Grooming
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Prices
            </Link>
            <Link href="/photos" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Photos
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 