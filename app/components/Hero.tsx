'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Professional AI Song Generator
          </h1>

          {/* Avatars and social proof */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                <Image src="/avatars/avatar-1.jpg" alt="User" width={40} height={40} className="rounded-full border-2 border-black" />
                <Image src="/avatars/avatar-2.jpg" alt="User" width={40} height={40} className="rounded-full border-2 border-black" />
                <Image src="/avatars/avatar-3.jpg" alt="User" width={40} height={40} className="rounded-full border-2 border-black" />
                <Image src="/avatars/avatar-4.jpg" alt="User" width={40} height={40} className="rounded-full border-2 border-black" />
                <Image src="/avatars/avatar-5.jpg" alt="User" width={40} height={40} className="rounded-full border-2 border-black" />
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white border-2 border-black">
                  +25K
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 text-lg mb-10">
            Trusted by 25,000+ musicians, content creators, and music enthusiasts worldwide
          </p>

          <div className="mb-12 flex justify-center">
            <Link 
              href="/create" 
              className="btn bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg text-xl font-semibold transition-all transform hover:-translate-y-1 mr-4"
            >
              Create Music
            </Link>
            <Link 
              href="/tutorials" 
              className="btn bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-lg text-xl font-semibold transition-all border border-gray-700"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Create Music Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl"
        >
          <div className="bg-black rounded-lg p-4">
            <div className="flex space-x-3 mb-4">
              <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium">
                Custom Mode
              </div>
              <div className="bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors cursor-pointer">
                Simple Mode
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="h-6 w-12 bg-gray-700 rounded-full mr-3 relative">
                <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-gray-300"></div>
              </div>
              <span className="text-gray-400">Instrumental Mode</span>
              <span className="ml-2 text-gray-600 text-xs bg-gray-800 rounded-full px-2 py-0.5">?</span>
            </div>
            
            <div className="mb-4">
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-purple-500" 
                placeholder="Enter song title"
              />
              <div className="text-right text-xs text-gray-400 mt-1">0/30</div>
            </div>
            
            <div className="mb-6">
              <textarea 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-purple-500 h-24" 
                placeholder="Enter song style&#10;E.g. mexican music, cumbia, male voice"
              ></textarea>
              <div className="text-right text-xs text-gray-400 mt-1">0/120</div>
            </div>
            
            <div className="text-sm text-gray-400 mb-4">Style and Genre List</div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"># Genre</span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"># Moods</span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"># Voices</span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"># Tempos</span>
            </div>
            
            <div className="mb-6">
              <textarea 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-purple-500 h-36" 
                placeholder="Enter song lyrics"
              ></textarea>
            </div>
            
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Generate with AI
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-700 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-700 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Hero; 