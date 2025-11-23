import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:divide-x divide-gray-100">
          <div className="p-4">
             <div className="text-4xl md:text-5xl font-serif text-prime-navy mb-2">100%</div>
             <div className="text-xs uppercase tracking-widest text-gray-500">{t('stats.energy_focused')}</div>
          </div>
          <div className="p-4">
             <div className="text-4xl md:text-5xl font-serif text-prime-navy mb-2">Aarhus</div>
             <div className="text-xs uppercase tracking-widest text-gray-500">{t('stats.hq')}</div>
          </div>
          <div className="p-4">
             <div className="text-4xl md:text-5xl font-serif text-prime-navy mb-2">Elite</div>
             <div className="text-xs uppercase tracking-widest text-gray-500">{t('stats.network')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;