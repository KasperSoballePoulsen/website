import React from 'react';
import { Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const servicesList = language === 'en' 
    ? ['Executive Search', 'Board Advisory', 'Interim Management', 'Leadership Assessment']
    : ['Executive Search', 'Bestyrelsesrådgivning', 'Interim Management', 'Ledelsesvurdering'];

  const industriesList = language === 'en'
    ? ['Financial Services', 'Technology & Digital', 'Industrial', 'Consumer & Retail']
    : ['Finansielle Tjenester', 'Teknologi & Digital', 'Industriel', 'Forbruger & Detail'];

  return (
    <footer className="bg-prime-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-serif font-bold tracking-tight mb-6 block">
               PrimeTalent
            </span>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-blue-400 transition"><Linkedin size={20} /></a>
              <a href="#" className="text-white hover:text-blue-400 transition"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-blue-400 transition"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">{t('footer.services')}</h4>
            <ul className="space-y-4 text-sm font-light">
              {servicesList.map((item, i) => (
                <li key={i}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">{t('footer.industries')}</h4>
            <ul className="space-y-4 text-sm font-light">
              {industriesList.map((item, i) => (
                <li key={i}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">{t('footer.stay_informed')}</h4>
            <p className="text-gray-400 text-sm mb-4 font-light">{t('footer.subscribe')}</p>
            <div className="flex border-b border-gray-600 py-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent w-full outline-none text-white placeholder-gray-500 font-light"
              />
              <button className="text-white hover:text-blue-400">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;