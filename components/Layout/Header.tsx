import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.expertise'), href: '#expertise' },
    // { label: t('nav.candidates'), href: '#candidates' },
    // { label: t('nav.clients'), href: '#clients' },
    { label: t('nav.about'), href: '#about' },
  ];

  // Dynamic classes based on scroll state
  const headerBg = isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6';
  const navTextColor = isScrolled ? 'text-gray-800' : 'text-white/90';
  const navHoverColor = isScrolled ? 'hover:text-blue-600' : 'hover:text-white';
  const logoBoxClass = isScrolled ? 'bg-prime-navy text-white' : 'bg-white text-prime-navy';
  const brandTextClass = isScrolled ? 'text-prime-navy' : 'text-white';
  const iconClass = isScrolled ? 'text-prime-navy hover:text-blue-600' : 'text-white hover:text-blue-200';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'da' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <div className={`h-8 w-8 flex items-center justify-center font-serif font-bold text-xl transition-colors duration-300 ${logoBoxClass}`}>
            P
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${brandTextClass}`}>
            PrimeTalent
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-sans font-medium transition-colors uppercase tracking-wider ${navTextColor} ${navHoverColor}`}
            >
              {item.label}
            </a>
          ))}

          {/* Language Switcher Desktop */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest border px-2 py-1 rounded transition-colors ${isScrolled ? 'border-gray-300 text-prime-navy hover:bg-gray-100' : 'border-white/30 text-white hover:bg-white/10'}`}
          >
            <span className={language === 'en' ? 'font-bold' : 'font-normal opacity-70'}>EN</span>
            <span className="opacity-50">|</span>
            <span className={language === 'da' ? 'font-bold' : 'font-normal opacity-70'}>DA</span>
          </button>
        </nav>

        {/* Icons / Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleLanguage}
            className={`text-xs font-bold uppercase tracking-widest mr-2 ${isScrolled ? 'text-prime-navy' : 'text-white'}`}
          >
            {language.toUpperCase()}
          </button>

          <button
            className={`z-50 ${isMobileMenuOpen ? 'text-prime-navy' : (isScrolled ? 'text-prime-navy' : 'text-white')}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-serif text-prime-navy hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="mt-8 text-sm font-bold uppercase tracking-widest text-gray-500 border border-gray-200 px-6 py-3 rounded hover:bg-gray-50"
          >
            Switch to {language === 'en' ? 'Danish' : 'English'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;