import React, { useState } from 'react';
import Button from '../UI/Button';
import ContactModal from '../UI/ContactModal';
import { useLanguage } from '../../context/LanguageContext';

const CallToAction: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'client' | 'candidate'>('client');
  const { t } = useLanguage();

  const openModal = (type: 'client' | 'candidate') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="contact" className="py-24 bg-white">
         <div className="container mx-auto px-6 md:px-12">
           <div className="bg-prime-navy text-white p-12 md:p-20 text-center relative overflow-hidden">
              {/* Abstract Background pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                 <div className="absolute left-0 top-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif mb-6">{t('cta.title')}</h2>
                <p className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed">
                  {t('cta.desc')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <Button 
                    variant="secondary" 
                    className="px-10 py-4 text-base"
                    onClick={() => openModal('client')}
                   >
                     {t('cta.btn_client')}
                   </Button>
                   <Button 
                    variant="outline" 
                    className="px-10 py-4 text-base border-white text-white hover:bg-white hover:text-prime-navy"
                    onClick={() => openModal('candidate')}
                   >
                     {t('cta.btn_candidate')}
                   </Button>
                </div>
              </div>
           </div>
         </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />
    </>
  );
};

export default CallToAction;