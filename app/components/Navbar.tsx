'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaMusic, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
              <FaMusic className="text-white" />
            </div>
            <span className="text-white font-bold text-xl">AI Song Generator</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/create" className="px-3 py-2 text-white hover:text-purple-400 transition-colors">
              Create
            </Link>
            <Link href="/pricing" className="px-3 py-2 text-white hover:text-purple-400 transition-colors">
              Pricing
            </Link>
            <Link href="/my-songs" className="px-3 py-2 text-white hover:text-purple-400 transition-colors">
              My Songs
            </Link>
            <Link href="/tutorials" className="px-3 py-2 text-white hover:text-purple-400 transition-colors">
              Tutorials
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <select className="appearance-none bg-black/30 text-white border border-white/10 rounded px-3 py-1 pr-8 hover:bg-black/50 transition-colors focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option>English</option>
                <option>中文</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-white">
              J
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-white flex items-center">
              <span className="text-yellow-500 mr-1">✨</span>
              <span>0</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/5">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/create"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/my-songs"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              My Songs
            </Link>
            <Link
              href="/tutorials"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Tutorials
            </Link>
            <div className="pt-4 pb-2 border-t border-white/10 flex items-center justify-between">
              <select className="appearance-none bg-black/30 text-white border border-white/10 rounded px-3 py-1 pr-8 hover:bg-black/50 transition-colors focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option>English</option>
                <option>中文</option>
              </select>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-white">
                  J
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-white flex items-center">
                  <span className="text-yellow-500 mr-1">✨</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 