import React from 'react';
import { LeafIcon, DropletIcon, MonitorSmartphoneIcon, ChevronDownIcon } from 'lucide-react';
export function HeroSection() {
  return <section id="hero" className="relative w-full min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536939459926-301728717817?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"></div>
      {/* Floating elements */}
      <div className="absolute top-1/4 left-[10%] w-16 h-16 rounded-full bg-green-400/20 backdrop-blur-md animate-float"></div>
      <div className="absolute top-2/3 right-[15%] w-24 h-24 rounded-full bg-green-400/10 backdrop-blur-md animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-[30%] w-20 h-20 rounded-full bg-green-400/15 backdrop-blur-md animate-float-slow"></div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Eco-Friendly Drinks, <br />
            <span className="text-green-400">Made Smarter</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
            EcoDrinks is tackling plastic pollution, unhealthy beverages, and
            corporate dominance in the drink industry with smart, sustainable
            dispensers that serve natural juices and collect valuable market
            insights.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#journey" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all transform hover:scale-105 flex items-center gap-2">
              Learn More
            </a>
            <a href="#business" className="px-8 py-3 bg-transparent border border-white/30 hover:border-white text-white rounded-full transition-all transform hover:scale-105">
              Partner With Us
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
              <LeafIcon className="text-green-400 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-white/80">
                Plastic-free dispensing with paper cups and sustainable
                materials.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
              <DropletIcon className="text-green-400 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Healthy Options</h3>
              <p className="text-white/80">
                Natural, blended fruit juices and reduced-sugar alternatives.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
              <MonitorSmartphoneIcon className="text-green-400 mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">Smart Technology</h3>
              <p className="text-white/80">
                Interactive touchscreens, ads, and polls that reward users.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDownIcon size={24} className="text-white/70" />
      </div>
      {/* Section connector */}
      <div className="section-connector">
        <div className="section-connector-curve bg-blue-900/90"></div>
      </div>
    </section>;
}