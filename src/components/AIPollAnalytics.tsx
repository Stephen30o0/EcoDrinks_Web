import React from 'react';
import { BarChartIcon, LineChartIcon, PieChartIcon, TrendingUpIcon, MapPinIcon, UsersIcon } from 'lucide-react';
export function AIPollAnalytics() {
  return <section id="analytics" className="relative w-full min-h-screen py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-900/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"></div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Smart Polls. Smarter Business.
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Our AI backend analyzes responses in real-time, delivering
            actionable insights
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Analytics Dashboard</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    Day
                  </button>
                  <button className="px-3 py-1 bg-blue-500 rounded-md">
                    Week
                  </button>
                  <button className="px-3 py-1 bg-white/10 rounded-md hover:bg-white/20 transition-colors">
                    Month
                  </button>
                </div>
              </div>
              {/* Mock Dashboard UI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Poll Completion Rate</h4>
                    <span className="text-green-400">+12%</span>
                  </div>
                  <div className="h-32 flex items-end justify-between gap-1">
                    {[65, 48, 72, 81, 75, 85, 92].map((height, index) => <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm" style={{
                      height: `${height}%`
                    }}></div>
                        <div className="text-xs text-white/60 mt-1">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                        </div>
                      </div>)}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Sentiment Analysis</h4>
                    <span className="text-blue-400">78% Positive</span>
                  </div>
                  <div className="h-32 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-8 border-blue-500/30 relative">
                      <div className="absolute inset-0 overflow-hidden rounded-full">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-80" style={{
                        clipPath: 'polygon(0 0, 78% 0, 78% 100%, 0% 100%)'
                      }}></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Poll Response Trends</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-white/70">
                        Juice Preference
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-white/70">
                        Packaging Opinion
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-xs text-white/70">
                        Price Sensitivity
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-48 relative">
                  {/* Mock line chart */}
                  <svg className="w-full h-full" viewBox="0 0 100 50">
                    {/* Grid lines */}
                    <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.1)" />
                    <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="rgba(255,255,255,0.1)" />
                    <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.1)" />
                    <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="rgba(255,255,255,0.1)" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" />
                    {/* Lines */}
                    <path d="M0,30 L14.3,25 L28.6,28 L42.9,20 L57.1,15 L71.4,18 L85.7,12 L100,8" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    <path d="M0,35 L14.3,38 L28.6,32 L42.9,36 L57.1,30 L71.4,25 L85.7,28 L100,20" fill="none" stroke="#10B981" strokeWidth="2" />
                    <path d="M0,25 L14.3,30 L28.6,35 L42.9,32 L57.1,25 L71.4,30 L85.7,25 L100,15" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="text-sm text-white/70 mb-1">Total Polls</h4>
                  <div className="text-2xl font-bold">12,845</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="text-sm text-white/70 mb-1">
                    Avg. Response Time
                  </h4>
                  <div className="text-2xl font-bold">8.2s</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="text-sm text-white/70 mb-1">
                    Insights Generated
                  </h4>
                  <div className="text-2xl font-bold">1,450+</div>
                </div>
              </div>
            </div>
          </div>
          {/* AI Features */}
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">AI Features</h3>
              <div className="space-y-4">
                {[{
                icon: <MapPinIcon size={20} className="text-blue-400" />,
                title: 'Regional Trend Detection',
                description: 'Identify patterns by location and demographics'
              }, {
                icon: <BarChartIcon size={20} className="text-blue-400" />,
                title: 'Sentiment Analysis',
                description: 'NLP-powered consumer feeling detection'
              }, {
                icon: <LineChartIcon size={20} className="text-blue-400" />,
                title: 'Real-time Dashboards',
                description: 'Live data visualization and reporting'
              }, {
                icon: <TrendingUpIcon size={20} className="text-blue-400" />,
                title: 'Feedback Loop',
                description: 'Continuous product and service improvement'
              }].map((item, index) => <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Brand Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-sm">Direct consumer feedback</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-sm">Product development insights</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-sm">Market segmentation data</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-sm">Campaign effectiveness metrics</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-sm">Competitor comparison insights</p>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Request Demo Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}