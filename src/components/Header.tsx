import React from 'react';
import { GlobeIcon, MenuIcon } from 'lucide-react';
export function Header() {
  return <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-green-400">
            Eco<span className="text-white">Drinks</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-white hover:text-green-400 transition-colors">
            About
          </a>
          <a href="#journey" className="text-white hover:text-green-400 transition-colors">
            How It Works
          </a>
          <a href="#business" className="text-white hover:text-green-400 transition-colors">
            Business Model
          </a>
          <a href="#team" className="text-white hover:text-green-400 transition-colors">
            Team
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
            Partner With Us
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
            <GlobeIcon size={18} />
          </button>
          <button className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
            <MenuIcon size={18} />
          </button>
        </div>
      </div>
    </header>;
}