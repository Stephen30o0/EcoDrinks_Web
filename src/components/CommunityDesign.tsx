import React, { useEffect } from 'react';
import { MapPinIcon } from 'lucide-react';
import L from 'leaflet';

export function CommunityDesign() {
  useEffect(() => {
    // Initialize the map when the component mounts
    const map = L.map('map').setView([-1.944, 30.0619], 13); // Set initial position (Kigali, Rwanda) and zoom level

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add location markers
    const locations = [
      {
        lat: -1.947, // University of Rwanda coordinates
        lng: 30.054,
        label: 'University of Rwanda',
      },
      {
        lat: -1.968, // Kigali Heights Office Park coordinates
        lng: 30.120,
        label: 'Kigali Heights Office Park',
      },
      {
        lat: -1.967, // Simba Supermarket coordinates
        lng: 30.097,
        label: 'Simba Supermarket',
      },
      {
        lat: -1.951, // Kigali Convention Center coordinates
        lng: 30.114,
        label: 'Kigali Convention Center',
      },
      {
        lat: -1.975, // Nyabugogo Transit Hub coordinates
        lng: 30.080,
        label: 'Nyabugogo Transit Hub',
      },
    ];

    locations.forEach((location) => {
      L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(location.label);
    });
  }, []);

  return (
    <section id="community" className="relative w-full min-h-screen py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-teal-800/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"></div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Scaling for Impact</h2>
          <p className="text-xl max-w-2xl mx-auto">
            From campuses to urban offices, designed for communities where sustainability matters
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-bold mb-6">Deployment Locations</h3>
              <div className="aspect-square bg-emerald-900/30 rounded-xl relative overflow-hidden">
                {/* Map container */}
                <div id="map" className="absolute inset-0 w-full h-full"></div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-sm text-white/70 mb-1">Active Locations</h4>
                  <div className="text-2xl font-bold text-white">24</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-sm text-white/70 mb-1">Planned Expansion</h4>
                  <div className="text-2xl font-bold text-white">50+</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-900/30 rounded-lg">
                <h4 className="font-medium mb-2">Current Focus: Rwanda</h4>
                <p className="text-sm text-white/80">
                  Our initial deployment is focused on Rwanda's urban centers, with plans to expand to neighboring East African countries in 2025.
                </p>
              </div>
            </div>
          </div>
          {/* Community Design */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Designed for Communities</h3>
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <MapPinIcon size={28} className="text-emerald-400" />
                  ),
                  title: 'Educational Campuses',
                  description:
                    'Providing affordable, healthy options for students while collecting valuable insights about youth preferences and behaviors.',
                  details:
                    'Deployed at University of Rwanda and African Leadership University',
                },
                {
                  icon: <MapPinIcon size={28} className="text-emerald-400" />,
                  title: 'Office Complexes',
                  description:
                    'Serving busy professionals with convenient, sustainable drink options while gathering market research on working professionals.',
                  details: 'Active at Kigali Heights and Norrsken House',
                },
                {
                  icon: (
                    <MapPinIcon size={28} className="text-emerald-400" />
                  ),
                  title: 'Retail Environments',
                  description:
                    'Partnering with supermarkets and shopping centers to offer complementary beverage options and drive foot traffic.',
                  details: 'Partnerships with Simba and Sawaciti Supermarkets',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/80 mb-3">{item.description}</p>
                      <div className="text-sm bg-emerald-900/30 rounded-lg px-3 py-2 text-emerald-300">
                        {item.details}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h4 className="font-semibold mb-3">Key Partners</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Bralirwa (Coca-Cola Rwanda)',
                  'Simba Supermarkets',
                  'University of Rwanda',
                  'Kigali Innovation City',
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-3 text-center text-sm"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
