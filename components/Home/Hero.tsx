import React, { useState } from 'react';
import Button from '../UI/Button';
import ContactModal from '../UI/ContactModal';
import { useLanguage } from '../../context/LanguageContext';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'client' | 'candidate'>('client');
  const { t } = useLanguage();

  const openModal = (type: 'client' | 'candidate') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }
          .delay-100 { animation-delay: 0.2s; }
          .delay-200 { animation-delay: 0.4s; }
          .delay-300 { animation-delay: 0.6s; }
        `}
      </style>

      <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-prime-navy/60 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          >
            {/* Abstract Blue Lines / Data Stream Video */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-lines-background-2773-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20">
          <div className="max-w-4xl">
            <div className="w-20 h-1 bg-blue-400 mb-8 animate-fade-in-up"></div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-[1.1] animate-fade-in-up delay-100 tracking-tight">
              {t('hero.title_line1')} <br />
              {t('hero.title_line2')} <br />
              <span className="text-blue-200">{t('hero.title_line3')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-12 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">
               <button 
                 onClick={() => openModal('client')}
                 className="px-8 py-4 bg-white text-prime-navy font-sans text-sm font-bold tracking-widest hover:bg-blue-50 transition-colors duration-300"
               >
                 {t('hero.btn_client')}
               </button>
               <button 
                 onClick={() => openModal('candidate')}
                 className="px-8 py-4 bg-transparent border border-white text-white font-sans text-sm font-bold tracking-widest hover:bg-white hover:text-prime-navy transition-all duration-300"
               >
                 {t('hero.btn_candidate')}
               </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
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

export default Hero;