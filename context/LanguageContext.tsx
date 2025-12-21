import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'da';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      expertise: 'Expertise',
      insights: 'Market Insights',
      candidates: 'Candidates',
      clients: 'Clients',
      about: 'About Us'
    },
    hero: {
      title_line1: 'Connecting Top',
      title_line2: 'Energy Talents',
      title_line3: 'With the Future.',
      subtitle: 'Whether you are a Trading House seeking quantitative edge or a Trader ready for your next desk, we invite you to start the conversation.',
      btn_client: 'FOR TRADING HOUSES',
      btn_candidate: 'FOR CANDIDATES'
    },
    stats: {
      energy_focused: 'Energy Focused',
      hq: 'Global Headquarters',
      network: 'Talent Network'
    },
    sectors: {
      category: 'Our Expertise',
      title: 'Specialized Practice Areas',
      desc: 'Deep vertical knowledge across the core pillars of the energy trade.',
      traders_title: 'Energy Traders',
      traders_desc: 'Power, Gas, LNG, and Oil traders. Originators and Portfolio Managers driving commercial performance.',
      quant_title: 'Trading Analysts',
      quant_desc: 'Quantitative Researchers, Data Scientists, and Structurers building the models of tomorrow.',
      tech_title: 'Software Developers',
      tech_desc: 'Python/C++ Developers, Algo Engineers, and CTRM Specialists architecting high-performance systems.'
    },
    insights: {
      category: 'Perspectives',
      title: 'Insights & Publications',
      desc: 'Analysis on the intersection of energy markets, technology, and human capital.',
      article1_cat: 'Market Strategy',
      article1_title: 'The Shift to Short-Term Power Trading: Talent Implications',
      article2_cat: 'Technology',
      article2_title: 'Python vs C++: The Battle for the Modern Energy Desk',
      article3_cat: 'Renewables',
      article3_title: 'Hiring Trends in Guarantees of Origin (GOs) and Carbon'
    },
    about: {
      category: 'Who We Are',
      title: 'Based in Aarhus. Connected Globally.',
      p1: 'PrimeTalent is a boutique executive search firm headquartered in Aarhus, Denmark. We function as a strategic partner to a select group of energy trading houses and technology firms.',
      p2: 'We believe that in a market defined by volatility and speed, the only true competitive advantage is human capital. Our compact, dedicated team of three partners ensures that every search is handled with the utmost discretion, speed, and industry depth. We don\'t just fill roles; we build the desks that move the market.',
      team_rasmus_role: 'Partner',
      team_rasmus_focus: 'Energy Trading & Commercial',
      team_rasmus_bio: 'With over 15 years in energy markets, Rasmus specializes in placing high-impact traders and originators across European power and gas desks. He founded PrimeTalent to bring a bespoke approach to front-office recruitment.',
      team_sarah_role: 'Partner',
      team_sarah_focus: 'Quantitative Analytics',
      team_sarah_bio: 'Sarah bridges the gap between complex mathematics and recruitment. With a background in applied statistics, she identifies elite quants, data scientists, and structurers for the world’s leading trading houses.',
      team_mikkel_role: 'Partner',
      team_mikkel_focus: 'Trading Technology',
      team_mikkel_bio: 'Focused exclusively on the technological backbone of trading, Mikkel connects low-latency C++ and Python developers with firms building the high-performance systems of tomorrow.'
    },
    cta: {
      title: 'Partner with PrimeTalent',
      desc: 'Whether you are a Trading House seeking quantitative edge or a Trader ready for your next desk, we invite you to start the conversation.',
      btn_client: 'For Trading Houses',
      btn_candidate: 'For Candidates'
    },
    footer: {
      desc: 'Identifying top performers and placing them where they create impact.',
      services: 'Services',
      industries: 'Industries',
      contact_info: 'Contact',
      stay_informed: 'Stay Informed',
      subscribe: 'Subscribe to our newsletter.',
      rights: 'PrimeTalent Global. All rights reserved.',
    },
    modal: {
      client_title: 'Partner with PrimeTalent',
      client_subtitle: 'Tell us about your hiring needs or strategic goals.',
      candidate_title: 'Join Our Talent Network',
      candidate_subtitle: 'Submit your interest for trading, quant, or tech roles.',
      name: 'Full Name',
      email: 'Work Email',
      company: 'Company / Firm',
      linkedin: 'LinkedIn URL',
      message: 'Message',
      send: 'Send Inquiry',
      sending: 'Sending...',
      success_title: 'Inquiry Received',
      success_client: 'Thank you. A consultant from our Client Relations team will review your details and contact you shortly.',
      success_candidate: 'Thank you. A consultant from our Talent team will review your details and contact you shortly.',
      close: 'Close'
    }
  },
  da: {
    nav: {
      expertise: 'Fokusområder',
      insights: 'Indsigter',
      candidates: 'Kandidater',
      clients: 'Klienter',
      about: 'Om Os'
    },
    hero: {
      title_line1: 'Vi Forbinder',
      title_line2: 'Energitalenter',
      title_line3: 'Med Fremtiden',
      subtitle: 'Vi forbinder energihandelsvirksomheder med kandidater, der bidrager til bedre beslutninger og stærkere resultater.',
      btn_client: 'FOR HANDELSHUSE',
      btn_candidate: 'FOR KANDIDATER'
    },
    stats: {
      energy_focused: 'Energifokuseret',
      hq: 'Globalt Hovedkvarter',
      network: 'Talentnetværk'
    },
    sectors: {
      category: 'Vores fokusområder',
      title: 'Rekruttering og headhunting',
      desc: 'Specialiseret rekruttering og headhunting inden for energihandelens centrale funktioner.',
      traders_title: 'Energi-tradere',
      traders_desc: 'Profiler der skaber værdi gennem handel i energimarkederne.',
      quant_title: 'Trading-analytikere',
      quant_desc: 'Analytiske profiler, der understøtter trading og styrker beslutningsgrundlaget.',
      tech_title: 'Softwareudviklere',
      tech_desc: 'Tekniske profiler med erfaring i systemer, der understøtter energi-trading.'
    },
    insights: {
      category: 'Perspektiver',
      title: 'Indsigter & Publikationer',
      desc: 'Analyse i krydsfeltet mellem energimarkeder, teknologi og menneskelig kapital.',
      article1_cat: 'Markedsstrategi',
      article1_title: 'Skiftet til kortsigtet elhandel: Talentimplikationer',
      article2_cat: 'Teknologi',
      article2_title: 'Python vs C++: Kampen om det moderne energibord',
      article3_cat: 'Vedvarende Energi',
      article3_title: 'Ansættelsestendenser inden for oprindelsesgarantier (GOs) og kulstof'
    },
    about: {
      category: 'Hvem Vi Er',
      title: 'Baseret i Aarhus. Forbundet Globalt.',
      p1: 'PrimeTalent er et rekrutterings- og headhuntingfirma med base i Aarhus, specialiseret i energisektoren. Vi samarbejder med energihandelsvirksomheder om at identificere og rekruttere de rette profiler til både nøgle- og specialistroller.',
      p2: 'I et marked præget af høj kompleksitet, volatilitet og hurtige beslutninger er adgang til de rette kompetencer afgørende. Vi arbejder tæt med både virksomheder og kandidater og håndterer hver rekruttering med høj faglighed, diskretion og dyb brancheindsigt. Vores fokus er ikke kun at besætte stillinger, men at sikre match, der skaber langsigtet værdi for begge parter.',
      team_rasmus_role: 'Partner',
      team_rasmus_focus: 'Energy Trading & Commercial',
      team_rasmus_bio: 'Med over 15 år i energimarkederne har Rasmus specialiseret sig i at placere high-impact tradere og originators på tværs af europæiske el- og gasborde. Han grundlagde PrimeTalent for at bringe en skræddersyet tilgang til front-office rekruttering.',
      team_sarah_role: 'Partner',
      team_sarah_focus: 'Kvantitativ Analyse',
      team_sarah_bio: 'Sarah bygger bro mellem kompleks matematik og rekruttering. Med en baggrund i anvendt statistik identificerer hun elite quants, data scientists og structurers for verdens førende handelshuse.',
      team_mikkel_role: 'Partner',
      team_mikkel_focus: 'Handelsteknologi',
      team_mikkel_bio: 'Fokuseret udelukkende på handelens teknologiske rygrad forbinder Mikkel low-latency C++ og Python udviklere med firmaer, der bygger fremtidens højtydende systemer.'
    },
    cta: {
      title: 'Samarbejd med PrimeTalent',
      desc: 'Uanset om I er en energihandelsvirksomhed med behov for nye kompetencer, eller en kandidat med ambitioner inden for energihandel, inviterer vi jer til dialog.',
      btn_client: 'For Handelshuse',
      btn_candidate: 'For Kandidater'
    },
    footer: {
      desc: 'Vi identificerer top-performere og placerer dem dér, hvor de skaber mest impact.',
      services: 'Ydelser',
      industries: 'Industrier',
      contact_info: 'Kontakt',
      stay_informed: 'Hold Dig Opdateret',
      subscribe: 'Tilmeld dig vores nyhedsbrev.',
      rights: 'PrimeTalent Global. Alle rettigheder forbeholdes.',
    },
    modal: {
      client_title: 'Samarbejd med PrimeTalent',
      client_subtitle: 'Fortæl os om dine ansættelsesbehov eller strategiske mål.',
      candidate_title: 'Tilslut dig vores talentnetværk',
      candidate_subtitle: 'Indsend din interesse for trading, quant eller tech roller.',
      name: 'Fulde Navn',
      email: 'Arbejdsmail',
      company: 'Virksomhed',
      linkedin: 'LinkedIn URL',
      message: 'Besked',
      send: 'Send Forespørgsel',
      sending: 'Sender...',
      success_title: 'Forespørgsel Modtaget',
      success_client: 'Tak. En konsulent fra vores klientrelationsteam vil gennemgå dine detaljer og kontakte dig snarest.',
      success_candidate: 'Tak. En konsulent fra vores talentteam vil gennemgå dine detaljer og kontakte dig snarest.',
      close: 'Luk'
    }
  }
};

const getNested = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const value = getNested(translations[language], key);
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
