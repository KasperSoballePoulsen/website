import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { TrendingUp, BarChart3, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Sectors: React.FC = () => {
  const { t } = useLanguage();

  const sectors = [
    { 
      id: 1, 
      title: t('sectors.traders_title'), 
      icon: TrendingUp, 
      desc: t('sectors.traders_desc')
    },
    { 
      id: 2, 
      title: t('sectors.quant_title'), 
      icon: BarChart3, 
      desc: t('sectors.quant_desc')
    },
    { 
      id: 3, 
      title: t('sectors.tech_title'), 
      icon: Code2, 
      desc: t('sectors.tech_desc')
    },
  ];

  return (
    <section id="focusAreas" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <SectionHeading 
             category={t('sectors.category')}
             title={t('sectors.title')}
             description={t('sectors.desc')}
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