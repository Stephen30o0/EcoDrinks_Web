import React, { useState } from 'react';
import { CreditCardIcon, GlassWaterIcon, MonitorIcon, MousePointerClickIcon, CheckSquareIcon, PlayCircleIcon, ThermometerIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
export function UserJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [{
    title: 'Insert EcoDrinks Card',
    description: 'Linked to mobile money and user profile.',
    icon: <CreditCardIcon size={32} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1470&auto=format&fit=crop'
  }, {
    title: 'Select Drink Type',
    description: 'Juice or soda, flavor, temperature, and size.',
    icon: <MousePointerClickIcon size={32} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1611323659883-40bc6ed6e68e?q=80&w=1470&auto=format&fit=crop'
  }, {
    title: 'Grab a Paper Cup',
    description: 'From the right-side compartment.',
    icon: <GlassWaterIcon size={32} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1577648875929-894904f7352d?q=80&w=1470&auto=format&fit=crop'
  }, {
    title: 'Place Cup Under Smart Tap',
    description: 'Shown on tablet screen; activates correct tap.',
    icon: <ThermometerIcon size={32} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?q=80&w=1470&auto=format&fit=crop'
  }, {
    title: 'Watch Ad on TV Screen',
    description: 'Interactive ad with QR codes.',
    icon: <PlayCircleIcon size={32} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1474&auto=format&fit=crop'
  }, {
    title: 'Answer Quick Poll',
    description: 'Optional; earns you points toward future discounts.',
    icon: <CheckSquareIcon size={32} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop'
  }, {
    title: 'Drink Dispenses Automatically',
    description: 'Pre-cooled, fresh from reservoir.',
    icon: <GlassWaterIcon size={32} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1527156231393-7023794f363c?q=80&w=1471&auto=format&fit=crop'
  }, {
    title: 'Card Logs Transaction + Engagement',
    description: 'Linked to online dashboard.',
    icon: <MonitorIcon size={32} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop'
  }];
  const nextStep = () => {
    setCurrentStep(prev => (prev + 1) % steps.length);
  };
  const prevStep = () => {
    setCurrentStep(prev => (prev - 1 + steps.length) % steps.length);
  };
  return <section id="journey" className="relative w-full py-24 overflow-hidden">
      {/* Dynamic background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-800/80 z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 bg-mesh" style={{
      backgroundImage: `url(${steps[currentStep].image})`,
      opacity: 0.4
    }}></div>
      {/* Animated bubbles */}
      <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-blue-500/10 backdrop-blur-md animate-float"></div>
      <div className="absolute bottom-1/3 right-1/5 w-40 h-40 rounded-full bg-purple-500/10 backdrop-blur-md animate-float-delayed"></div>
      <div className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full bg-blue-500/10 backdrop-blur-md animate-float-slow"></div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          How It Works
        </h2>
        <p className="text-xl text-center mb-16 max-w-2xl mx-auto">
          From Sip to Insight — Experience the Future of Beverage Dispensing
        </p>
        {/* Interactive Journey Map */}
        <div className="mb-12">
          <div className="relative">
            {/* Journey Path */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-purple-500/20 transform -translate-y-1/2 rounded-full z-0"></div>
            {/* Progress Indicator */}
            <div className="hidden md:block absolute top-1/2 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 rounded-full z-10 transition-all duration-500" style={{
            width: `${(currentStep + 1) * (100 / steps.length)}%`
          }}></div>
            {/* Step Indicators */}
            <div className="flex justify-between relative z-20 mb-8">
              {steps.map((step, index) => <div key={index} className={`hidden md:flex flex-col items-center cursor-pointer transition-all duration-300 ${index <= currentStep ? 'opacity-100' : 'opacity-40'}`} onClick={() => setCurrentStep(index)}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${index === currentStep ? 'bg-blue-500 transform scale-125' : index < currentStep ? 'bg-purple-500' : 'bg-white/20'}`}>
                    {index < currentStep ? <div className="w-3 h-3 rounded-full bg-white"></div> : <div className={`text-xs font-bold ${index === currentStep ? 'text-white' : 'text-white/70'}`}>
                        {index + 1}
                      </div>}
                  </div>
                  <div className={`text-xs font-medium text-center max-w-[80px] ${index === currentStep ? 'text-blue-300' : 'text-white/60'}`}>
                    {step.title.split(' ')[0]}
                  </div>
                </div>)}
            </div>
          </div>
          {/* Current Step Visualization */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 gradient-border">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Step Info */}
              <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                <div className="inline-block bg-blue-500/20 rounded-full p-4 mb-6">
                  {steps[currentStep].icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {steps[currentStep].title}
                </h3>
                <p className="text-lg text-white/80 mb-8">
                  {steps[currentStep].description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button onClick={prevStep} className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all flex items-center gap-2">
                    <ArrowLeftIcon size={18} />
                    Previous
                  </button>
                  <button onClick={nextStep} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full transition-all flex items-center gap-2">
                    Next
                    <ArrowRightIcon size={18} />
                  </button>
                </div>
              </div>
              {/* Interactive Visualization */}
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative">
                  {/* Dispenser Visualization */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 overflow-hidden shadow-2xl">
                    <div className="relative aspect-square max-w-sm mx-auto">
                      {/* Dispenser Body */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-72 bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl shadow-xl">
                        {/* Screen */}
                        <div className="absolute top-6 left-4 right-4 h-24 bg-black rounded-lg overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                            <div className="text-blue-400 font-bold mb-1">
                              EcoDrinks
                            </div>
                            <div className="text-xs text-center text-white/70">
                              {steps[currentStep].title}
                            </div>
                          </div>
                        </div>
                        {/* Cup Area */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-28 flex items-end justify-center">
                          <div className="w-16 h-20 bg-white/10 rounded-b-lg rounded-t-sm relative">
                            {currentStep >= 6 && <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-b-lg"></div>}
                            {currentStep >= 2 && currentStep < 7 && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-18 bg-white/20 rounded-b-lg rounded-t-sm border-t-2 border-white/40"></div>}
                          </div>
                        </div>
                        {/* Card Slot */}
                        {currentStep === 0 && <div className="absolute top-40 right-4 w-8 h-1 bg-blue-400 animate-pulse"></div>}
                        {/* Buttons */}
                        {currentStep === 1 && <div className="absolute top-36 left-4 right-4 grid grid-cols-2 gap-2">
                            {[...Array(4)].map((_, i) => <div key={i} className="h-6 bg-white/20 rounded-md"></div>)}
                          </div>}
                      </div>
                      {/* Visual indicators for current step */}
                      {currentStep === 0 && <div className="absolute right-1/4 top-1/2 transform translate-y-[-80%] w-16 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-lg animate-float-slow"></div>}
                      {currentStep === 3 && <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>}
                      {currentStep === 4 && <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <PlayCircleIcon size={32} className="text-blue-400" />
                        </div>}
                      {currentStep === 5 && <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 p-3">
                          <div className="text-xs mb-2 text-white/80">
                            Do you prefer:
                          </div>
                          <div className="space-y-2">
                            <div className="h-4 bg-blue-500/30 rounded-full"></div>
                            <div className="h-4 bg-blue-500/30 rounded-full"></div>
                          </div>
                        </div>}
                      {/* Flow animation for dispensing */}
                      {currentStep === 6 && <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                          {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-blue-400 mb-1 animate-wave" style={{
                        animationDelay: `${i * 0.2}s`
                      }}></div>)}
                        </div>}
                      {/* Data visualization for last step */}
                      {currentStep === 7 && <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full max-w-xs max-h-xs relative">
                            <div className="absolute inset-0 animate-rotate-slow opacity-40">
                              {[...Array(8)].map((_, i) => <div key={i} className="absolute w-1 h-32 bg-gradient-to-t from-blue-500/0 via-blue-500 to-blue-500/0" style={{
                            left: '50%',
                            top: '50%',
                            transformOrigin: 'bottom center',
                            transform: `rotate(${i * 45}deg)`
                          }}></div>)}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                <MonitorIcon size={24} className="text-white" />
                              </div>
                            </div>
                          </div>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Progress Indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-8">
          {steps.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full ${index === currentStep ? 'bg-blue-400' : 'bg-white/30'}`} onClick={() => setCurrentStep(index)} />)}
        </div>
      </div>
      {/* Section connector */}
      <div className="section-connector">
        <div className="section-connector-curve bg-purple-900/90"></div>
      </div>
    </section>;
}