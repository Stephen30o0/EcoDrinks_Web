import React from 'react';
import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon, MailIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="relative bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-green-400 mb-4">
              Eco<span className="text-white">Drinks</span>
            </div>
            <p className="text-white/70 mb-6">
              Revolutionizing beverage dispensing with sustainable solutions,
              interactive technology, and community-driven ownership.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <InstagramIcon size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <TwitterIcon size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <LinkedinIcon size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#business" className="text-white/70 hover:text-white transition-colors">
                  Business Model
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <a href="#journey" className="text-white/70 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#ownership" className="text-white/70 hover:text-white transition-colors">
                  Ownership Model
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-white/70 hover:text-white transition-colors">
                  Analytics Platform
                </a>
              </li>
              <li>
                <a href="#operations" className="text-white/70 hover:text-white transition-colors">
                  AI Operations
                </a>
              </li>
              <li>
                <a href="#community" className="text-white/70 hover:text-white transition-colors">
                  Community Impact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MailIcon size={18} className="text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/70">info@ecodrinks.co.rw</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon size={18} className="text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  Norrsken House, Kigali, Rwanda
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                <MailIcon size={16} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 EcoDrinks. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
}