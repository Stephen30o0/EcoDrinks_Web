import React from 'react';
import { CoinsIcon, UsersIcon, BarChart3Icon, LockIcon } from 'lucide-react';
export function BlockchainOwnership() {
  return <section id="ownership" className="relative w-full py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-teal-800/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1632&auto=format&fit=crop')] bg-cover bg-center"></div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Community Ownership
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Join our community of owners and earn rewards from every drink
            served
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Simplified Visualization */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center">
              <div className="mb-8">
                <div className="inline-block bg-blue-500/20 rounded-full p-4 mb-4">
                  <CoinsIcon size={48} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Become an Owner Today
                </h3>
                <p className="text-white/80 mb-6">
                  With as little as $100, you can own a share of an EcoDrinks
                  dispenser and earn passive income while supporting
                  sustainability.
                </p>
              </div>
              <div className="relative mx-auto max-w-md aspect-square bg-gradient-to-br from-blue-900/40 to-teal-900/40 rounded-xl p-6 mb-8">
                {/* Central Dispenser */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-32 h-48 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl">
                    {/* Screen */}
                    <div className="absolute top-3 left-3 right-3 h-16 bg-black rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-teal-400 text-sm font-bold">
                          EcoDrinks
                        </div>
                      </div>
                    </div>
                    {/* Dispenser Nozzle */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-16">
                      <div className="w-full h-8 bg-gray-700 rounded-t-lg"></div>
                      <div className="w-3 h-6 bg-teal-600 mx-auto rounded-b-lg"></div>
                    </div>
                  </div>
                </div>
                {/* People Icons around the dispenser */}
                {[...Array(8)].map((_, i) => <div key={i} className="absolute" style={{
                left: `${50 + 40 * Math.cos(2 * Math.PI * i / 8)}%`,
                top: `${50 + 40 * Math.sin(2 * Math.PI * i / 8)}%`
              }}>
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                      <UsersIcon size={16} className="text-white" />
                    </div>
                  </div>)}
                {/* Connection Lines */}
                {[...Array(8)].map((_, i) => <div key={i} className="absolute left-1/2 top-1/2 h-[40%] w-px bg-gradient-to-b from-blue-400/0 via-blue-400/30 to-blue-400/0 origin-bottom" style={{
                transform: `rotate(${i * 45}deg)`
              }}></div>)}
              </div>
              <div className="flex justify-center">
                <a href="#" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105 inline-flex items-center gap-2">
                  <CoinsIcon size={18} />
                  Join Our Owners
                </a>
              </div>
            </div>
          </div>
          {/* Features List - Simplified */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-6">
              {[{
              icon: <UsersIcon size={28} className="text-blue-400" />,
              title: 'Community-Funded Dispensers',
              description: 'Join other community members to fund new dispensers in your area and share in the profits they generate.'
            }, {
              icon: <LockIcon size={28} className="text-blue-400" />,
              title: 'Secure Blockchain Technology',
              description: 'Your ownership is securely recorded on the blockchain, ensuring transparency and trust.'
            }, {
              icon: <BarChart3Icon size={28} className="text-blue-400" />,
              title: 'Automatic Revenue Sharing',
              description: 'Receive your share of profits automatically when people use the dispenser you co-own.'
            }, {
              icon: <CoinsIcon size={28} className="text-blue-400" />,
              title: 'Transferable Ownership',
              description: 'Your ownership stake can be transferred, gifted, or sold if your circumstances change.'
            }].map((item, index) => <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="mt-8 p-5 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <CoinsIcon size={20} className="text-blue-400" />
                </div>
                <h4 className="font-semibold">Starting at just $100</h4>
              </div>
              <p className="text-white/70 text-sm">
                Begin your ownership journey with a small investment and watch
                it grow as more people use your dispenser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}