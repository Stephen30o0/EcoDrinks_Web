import React from 'react';
export function Navigation({
  activeSection
}: {
  activeSection: string;
}) {
  const sections = [{
    id: 'hero',
    label: '01'
  }, {
    id: 'journey',
    label: '02'
  }, {
    id: 'business',
    label: '03'
  }, {
    id: 'ownership',
    label: '04'
  }, {
    id: 'engagement',
    label: '05'
  }, {
    id: 'analytics',
    label: '06'
  }, {
    id: 'operations',
    label: '07'
  }, {
    id: 'community',
    label: '08'
  }, {
    id: 'team',
    label: '09'
  }];
  return <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-6">
        {sections.map(section => <a key={section.id} href={`#${section.id}`} className={`relative group flex items-center`}>
            <div className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-white">
              {section.label}
            </div>
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === section.id ? 'bg-green-400 scale-100' : 'bg-white/30 scale-75 group-hover:scale-100'}`} />
            <div className={`absolute left-7 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-white whitespace-nowrap`}>
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </div>
          </a>)}
      </div>
    </div>;
}