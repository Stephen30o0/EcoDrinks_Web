import React from 'react';
import { ActivityIcon, AlertCircleIcon, ThermometerIcon, BarChart3Icon, RefreshCwIcon } from 'lucide-react';
export function AIOperations() {
  return <section id="operations" className="relative w-full min-h-screen py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-gray-800/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"></div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Dispenser That Thinks Ahead
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            AI ensures every EcoDrinks dispenser is clean, stocked, and
            functional
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* AI Operations Dashboard */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Operations Dashboard</h3>
                <div className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">
                  All Systems Operational
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="text-sm text-white/70 mb-2">
                    Temperature Control
                  </h4>
                  <div className="flex items-center">
                    <ThermometerIcon size={36} className="text-blue-400 mr-3" />
                    <div>
                      <div className="text-2xl font-bold">4.2°C</div>
                      <div className="text-xs text-green-400">
                        Optimal Range
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{
                    width: '60%'
                  }}></div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="text-sm text-white/70 mb-2">
                    Maintenance Status
                  </h4>
                  <div className="flex items-center">
                    <ActivityIcon size={36} className="text-green-400 mr-3" />
                    <div>
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-xs text-green-400">
                        Excellent Condition
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{
                    width: '98%'
                  }}></div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <h4 className="text-sm text-white/70 mb-2">Inventory Levels</h4>
                <div className="space-y-3">
                  {[{
                  name: 'Apple Juice',
                  level: 85
                }, {
                  name: 'Orange Juice',
                  level: 72
                }, {
                  name: 'Paper Cups',
                  level: 45
                }, {
                  name: 'Mixed Berry',
                  level: 63
                }].map((item, index) => <div key={index}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{item.name}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className={`h-2 rounded-full ${item.level > 70 ? 'bg-green-500' : item.level > 30 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${item.level}%`
                    }}></div>
                      </div>
                    </div>)}
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-sm text-white/70 mb-3">System Alerts</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-2 bg-yellow-900/20 rounded-lg border border-yellow-800/30">
                    <AlertCircleIcon size={18} className="text-yellow-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-yellow-400">
                        Low Paper Cup Inventory
                      </div>
                      <p className="text-xs text-white/70">
                        Refill required within 48 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 bg-green-900/20 rounded-lg border border-green-800/30">
                    <RefreshCwIcon size={18} className="text-green-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-green-400">
                        Filter Replacement Complete
                      </div>
                      <p className="text-xs text-white/70">
                        Next maintenance in 30 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* AI Features */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6">AI for Operations</h3>
            <div className="space-y-8">
              {[{
              icon: <AlertCircleIcon size={28} className="text-blue-400" />,
              title: 'Predictive Maintenance',
              description: 'AI algorithms detect patterns that indicate potential issues before they cause downtime, scheduling maintenance before failures occur.',
              metrics: [{
                label: 'Downtime Reduction',
                value: '78%'
              }, {
                label: 'Maintenance Cost Savings',
                value: '32%'
              }]
            }, {
              icon: <ThermometerIcon size={28} className="text-blue-400" />,
              title: 'Quality Monitoring',
              description: 'Continuous monitoring of temperature, cleanliness, and dispensing accuracy ensures every drink meets quality standards.',
              metrics: [{
                label: 'Quality Consistency',
                value: '99.8%'
              }, {
                label: 'Customer Satisfaction',
                value: '4.9/5'
              }]
            }, {
              icon: <BarChart3Icon size={28} className="text-blue-400" />,
              title: 'Usage Trend Adaptation',
              description: 'The system automatically adjusts inventory levels and drink options based on historical usage patterns and seasonal trends.',
              metrics: [{
                label: 'Inventory Efficiency',
                value: '+45%'
              }, {
                label: 'Waste Reduction',
                value: '62%'
              }]
            }, {
              icon: <RefreshCwIcon size={28} className="text-blue-400" />,
              title: 'Inventory Optimization',
              description: 'Smart inventory management ensures timely refills and minimizes waste through precise demand forecasting.',
              metrics: [{
                label: 'Stock-out Prevention',
                value: '98.5%'
              }, {
                label: 'Supply Chain Efficiency',
                value: '+28%'
              }]
            }].map((item, index) => <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/80 mb-4">{item.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {item.metrics.map((metric, idx) => <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                            <div className="text-xs text-white/70 mb-1">
                              {metric.label}
                            </div>
                            <div className="text-lg font-bold text-blue-400">
                              {metric.value}
                            </div>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}