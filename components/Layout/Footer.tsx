import React from 'react';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const servicesList = language === 'en' 
    ? ['Recruitment', 'Headhunting', 'Executive Search', 'Interim Solutions']
    : ['Rekruttering', 'Headhunting', 'Executive Search', 'Interim-løsninger'];

  const industriesList = language === 'en'
    ? ['Energy Trading', 'Trading Analytics', 'Trading Technology']
    : ['Energi Trading', 'Trading Analyse', 'Trading Teknologi'];

  const contactInfoList = language === 'en' 
    ? ['info@primetalent.dk', 'Telefonsmøgen 3, 1st Floor\n8000 Aarhus C, Denmark', 'CVR: 46157508']
    : ['info@primetalent.dk', 'Telefonsmøgen 3, 1 TV\n8000 Aarhus C, Danmark', 'CVR: 46157508'];

  return (
    <footer className="bg-prime-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-serif font-bold tracking-tight mb-6 block">
               PrimeTalent
            </span>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fprimetalent-aarhus%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEwa2RNZG9DaUM1V0pRT1dnVnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4L3fOq3bdcuRbEgi5IUNbNrQeUvDZKE2PHf7JW5ovoYLAbmgErFThMMnNMtQ_aem_t9wtbm9rAt5mdPolp6BYsw&h=AT161rqcYN17HgkNwvzsb7BCJFNqQSN-JxfaH6PwpOg0MzZ9qPXCPWvBjNAuHA0YabWQ5PM802skxizLBt-k8HFUgaEh0hYSMFMS8o3_GGnOC-DMwHcFQWQsNVqBEkBxiKbNyA0QfztM8RUV5kClNg" className="text-white hover:text-blue-400 transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">{t('footer.services')}</h4>
            <ul className="space-y-4 text-sm font-light">
              {servicesList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">{t('footer.industries')}</h4>
            <ul className="space-y-4 text-sm font-light">
              {industriesList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Links 3 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">{t('footer.contact_info')}</h4>
            <ul className="space-y-4 text-sm font-light">
              {contactInfoList.map((item, i) => (
                <li className="whitespace-pre-line" key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">{t('footer.stay_informed')}</h4>
            <p className="space-y-4 text-sm mb-4 font-light">{t('footer.subscribe')}</p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;