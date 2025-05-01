import React from 'react';
import { CoinsIcon, BadgeCheckIcon, RefreshCwIcon, TrendingUpIcon } from 'lucide-react';
export function BlockchainEngagement() {
  return <section id="engagement" className="relative w-full min-h-screen py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-violet-800/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1465&auto=format&fit=crop')] bg-cover bg-center"></div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Polls, Points, and Perks
          </h2>
          <p className="text-xl max-w-2xl mx-auto">All On-Chain</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Points Visualization */}
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Reward Journey</h3>
              <div className="relative">
                {/* User journey path */}
                <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                {/* Journey steps */}
                {[{
                title: 'Answer Poll',
                points: '+5 points',
                icon: <BadgeCheckIcon size={24} className="text-indigo-300" />
              }, {
                title: 'Watch Ad',
                points: '+3 points',
                icon: <RefreshCwIcon size={24} className="text-indigo-300" />
              }, {
                title: 'Purchase Drink',
                points: '+2 points',
                icon: <CoinsIcon size={24} className="text-indigo-300" />
              }, {
                title: 'Redeem Reward',
                points: '-10 points',
                icon: <TrendingUpIcon size={24} className="text-indigo-300" />
              }].map((step, index) => <div key={index} className="flex mb-12 relative">
                    <div className="w-24 flex-shrink-0 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center z-20">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-xl p-6 ml-2">
                      <h4 className="font-semibold text-lg mb-2">
                        {step.title}
                      </h4>
                      <p className="text-white/70">
                        Complete this action to earn points toward rewards.
                      </p>
                      <div className="mt-4 inline-block px-3 py-1 bg-indigo-900/50 rounded-full text-sm font-medium text-indigo-300">
                        {step.points}
                      </div>
                    </div>
                  </div>)}
              </div>
              <div className="mt-8 p-6 bg-white/5 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Your Points Balance</h4>
                  <span className="text-2xl font-bold text-indigo-300">
                    245
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 mb-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{
                  width: '60%'
                }}></div>
                </div>
                <div className="text-sm text-white/70 text-center">
                  155 more points until your next free drink!
                </div>
              </div>
            </div>
          </div>
          {/* Features List */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Blockchain for Engagement
            </h3>
            <div className="space-y-8">
              {[{
              title: 'Reward Points Tracked on Blockchain',
              description: 'Every point earned is securely recorded on the blockchain, creating an immutable record of your engagement and rewards.',
              icon: <CoinsIcon size={28} className="text-indigo-400" />
            }, {
              title: 'Prevents Fraud or Duplicate Redemptions',
              description: "The blockchain's transparency ensures points can only be earned and redeemed once, maintaining the integrity of the rewards system.",
              icon: <BadgeCheckIcon size={28} className="text-indigo-400" />
            }, {
              title: 'Encourages Continuous Engagement',
              description: 'Gamification elements and point tracking motivate users to regularly interact with dispensers for greater rewards.',
              icon: <RefreshCwIcon size={28} className="text-indigo-400" />
            }, {
              title: 'Boosts Visibility for Brand Partners',
              description: 'Brands can offer special promotions and rewards, gaining exposure to engaged consumers while providing added value.',
              icon: <TrendingUpIcon size={28} className="text-indigo-400" />
            }].map((item, index) => <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
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
          </div>
        </div>
      </div>
    </section>;
}