import React from 'react';

const CorporateLogos: React.FC = () => {
  const clients = [
    { id: 1, name: 'RENAULT NISSAN', logo: 'https://cdn.worldvectorlogo.com/logos/renault-nissan-mitsubishi.svg' },
    { id: 2, name: 'KONE', logo: 'https://cdn.worldvectorlogo.com/logos/kone.svg' },
    { id: 3, name: 'WORLD BANK', logo: 'https://cdn.worldvectorlogo.com/logos/world-bank-group.svg' },
    { id: 4, name: 'PHILIPS', logo: 'https://cdn.worldvectorlogo.com/logos/philips.svg' },
    { id: 5, name: 'SBI', logo: 'https://cdn.worldvectorlogo.com/logos/state-bank-of-india.svg' },
    { id: 6, name: 'GEODIS', logo: 'https://cdn.worldvectorlogo.com/logos/geodis.svg' },
    { id: 7, name: 'MONDELEZ', logo: 'https://cdn.worldvectorlogo.com/logos/mondelez-international.svg' },
    { id: 8, name: 'LACTALIS', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Lactalis_logo.svg/1200px-Lactalis_logo.svg.png' },
  ];

  // Infinite loop seamless-ah iruka double panrom
  const doubleClients = [...clients, ...clients];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-4xl md:text-5xl font-black text-[#002B5B] tracking-tighter uppercase leading-none">
          Proud Lists of <span className="text-red-600">Corporate</span>
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Side Fade Effects - Icons smooth-ah ulla vandhu pogum */}
        <div className="absolute left-0 top-0 w-32 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 w-32 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>

        <div className="flex animate-scroll gap-20 items-center py-4">
          {doubleClients.map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 transition-all duration-500 hover:scale-110"
            >
              {/* Box/Border removed, purely the Logo/Icon */}
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-14 w-auto object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
          display: flex;
        }

        /* Hover panna pause aagama iruka logic */
        .animate-scroll:hover {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
};

export default CorporateLogos;