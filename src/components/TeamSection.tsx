import React from 'react';
import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
export function TeamSection() {
  return <section id="team" className="relative w-full min-h-screen py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-green-900/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop')] bg-cover bg-center"></div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Led by Visionaries
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Meet the team behind EcoDrinks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
          name: 'Abi Umwari',
          role: 'Managing Director',
          focus: 'Strategic Partnerships & Operations',
          image: '/images/abi.jpg',
          bio: "With over 10 years in sustainability initiatives across East Africa, Abi brings unparalleled expertise in building meaningful partnerships that drive both business and environmental impact."
        }, {
          name: 'Stephen Olurinola',
          role: 'CFO and Co-founder',
          focus: 'Financial Strategy',
          image: '/images/stephen.jpg',
          bio: "Stephen's background in fintech and blockchain innovation has shaped EcoDrinks' unique ownership model, creating new opportunities for community investment in sustainable infrastructure."
        }, {
          name: 'David Ntwari',
          role: 'CTO and Co-founder',
          focus: 'Tech & Market Research Dashboard',
          image: '/images/david.jpeg',
          bio: "A pioneer in AI and data analytics, David developed EcoDrinks' proprietary research platform that transforms consumer interactions into actionable market insights."
        }].map((member, index) => <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/15 transition-all transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <div className="text-green-400 font-medium mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-white/70 mb-4">
                  Focus: {member.focus}
                </div>
                <p className="text-white/80 mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <TwitterIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <MailIcon size={18} />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl mb-6">
            Together, we blend innovation, sustainability, and deep local
            insight to reimagine how Africa drinks — and how businesses connect
            with their audience.
          </p>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors">
            Join Our Team
          </button>
        </div>
      </div>
    </section>;
}