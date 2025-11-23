import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { TrendingUp, BarChart3, Code2 } from 'lucide-react';

const sectors = [
  { id: 1, title: 'Traders', icon: TrendingUp, desc: 'Power, Gas, LNG, and Oil traders. Originators and Portfolio Managers driving commercial performance.' },
  { id: 2, title: 'Quantitative Analytics', icon: BarChart3, desc: 'Quantitative Researchers, Data Scientists, and Structurers building the models of tomorrow.' },
  { id: 3, title: 'Trading Technology', icon: Code2, desc: 'Python/C++ Developers, Algo Engineers, and CTRM Specialists architecting high-performance systems.' },
];

const Sectors: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <SectionHeading 
             category="Our Expertise"
             title="Specialized Practice Areas"
             description="Deep vertical knowledge across the core pillars of the energy trade."
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {sectors.map((sector) => (
            <div key={sector.id} className="border-r border-b border-gray-200 p-10 relative">
              <sector.icon className="text-prime-navy mb-6 w-10 h-10" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif text-prime-navy mb-3">{sector.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;