import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { UserJourney } from './components/UserJourney';
import { BusinessModel } from './components/BusinessModel';
import { BlockchainOwnership } from './components/BlockchainOwnership';
import { BlockchainEngagement } from './components/BlockchainEngagement';
import { AIPollAnalytics } from './components/AIPollAnalytics';
import { AIOperations } from './components/AIOperations';
import { CommunityDesign } from './components/CommunityDesign';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id') || 'hero');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="bg-black text-white min-h-screen w-full overflow-hidden">
      <Header />
      <Navigation activeSection={activeSection} />
      <main className="w-full relative">
        <HeroSection />
        <UserJourney />
        <BusinessModel />
        <BlockchainOwnership />
        <BlockchainEngagement />
        <AIPollAnalytics />
        <AIOperations />
        <CommunityDesign />
        <TeamSection />
      </main>
      <Footer />
    </div>;
}