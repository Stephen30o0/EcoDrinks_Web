import React, { useState, createElement } from 'react'
import {
  CircleDollarSignIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  ArrowUpRightIcon,
} from 'lucide-react'
export function BusinessModel() {
  const [activeCard, setActiveCard] = useState(0)
  const cards = [
    {
      icon: ShoppingCartIcon,
      title: 'Drink Sales',
      description:
        '5% transaction fee on all beverage sales through our smart dispensers',
      color: 'from-teal-500',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2080',
      points: [
        'Contactless payments',
        'Mobile money integration',
        'Automated billing',
        'Real-time transaction tracking',
      ],
    },
    {
      icon: CircleDollarSignIcon,
      title: 'Ad Revenue',
      description:
        'Premium advertising space on HD displays with targeted audience reach',
      color: 'from-blue-500',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      points: [
        'Interactive campaigns',
        'Location-based ads',
        'QR code integration',
        'Engagement tracking',
      ],
    },
    {
      icon: TrendingUpIcon,
      title: 'Market Research',
      description:
        'Valuable consumer insights through interactive polls and usage data',
      color: 'from-purple-500',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
      points: [
        'Real-time analytics',
        'Demographic insights',
        'Trend analysis',
        'Predictive modeling',
      ],
    },
  ]
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${cards[activeCard].image})`,
          }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${cards[activeCard].color} to-gray-900 opacity-90`}
        />
      </div>
      {/* Floating Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Circular Economy
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
              Meets Market Research
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our innovative business model combines sustainable beverage
            dispensing with valuable market insights, creating multiple revenue
            streams.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group ${activeCard === index ? 'z-10 transform scale-105' : 'hover:scale-102'} transition-all duration-500`}
              onMouseEnter={() => setActiveCard(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 group-hover:border-white/20 transition-colors">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRightIcon className="h-5 w-5 text-white/60" />
                </div>
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {createElement(card.icon, {
                    className: 'h-8 w-8 text-white',
                  })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-300 mb-6">{card.description}</p>
                <ul className="space-y-3">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
