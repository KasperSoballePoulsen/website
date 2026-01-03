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
      focusAreas: 'Focus Areas',
      insights: 'Market Insights',
      candidates: 'Candidates',
      clients: 'Clients',
      about: 'About Us'
    },
    hero: {
      title_line1: 'Connecting top',
      title_line2: 'energy talent',
      title_line3: 'with the future.',
      subtitle: 'We connect energy trading companies with candidates who contribute to better decision-making and stronger results. We invite you to start the conversation.',
      btn_client: 'FOR COMPANIES',
      btn_candidate: 'FOR CANDIDATES'
    },
    stats: {
      energy_focused: 'Energy Focused',
      hq: 'Global Headquarters',
      network: 'Talent Network'
    },
    sectors: {
      category: 'Our Areas of Focus',
      title: 'Recruitment and headhunting',
      desc: 'Specialized recruitment and headhunting within the core functions of energy trading.',
      traders_title: 'Energy traders',
      traders_desc: 'Profiles that create value through trading in energy markets.',
      quant_title: 'Trading analysts',
      quant_desc: 'Analytical profiles that support trading and strengthen decision-making.',
      tech_title: 'Software developers',
      tech_desc: 'Technical profiles with experience in systems that support energy trading.'
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
      title: 'Based in Aarhus. Connected globally.',
      p1: 'PrimeTalent is a recruitment and headhunting firm based in Aarhus, specializing in the energy sector. We work with energy trading companies to identify and recruit the right profiles for both key and specialist roles.',
      p2: 'In a market characterized by high complexity, volatility, and rapid decision-making, access to the right capabilities is essential. We work closely with both companies and candidates and approach each recruitment with strong professional standards, discretion, and deep industry insight. Our focus is not only on filling positions, but on ensuring matches that create long-term value for both parties.',
      team_rasmus_role: 'Partner',
      team_rasmus_email: 'Email: rm@primetalent.dk',
      team_rasmus_phone: 'Phone: +45 26 22 21 89',
      team_malthe_role: 'Partner',
      team_malthe_email: 'Email: mb@primetalent.dk',
      team_malthe_phone: 'Phone: +45 40 97 77 88',
      team_kasper_role: 'Partner',
      team_kasper_email: 'Email: kp@primetalent.dk',
      team_kasper_phone: 'Phone: +45 22 63 63 10'
    },
    cta: {
      title: 'Partner with PrimeTalent',
      desc: 'Whether you are an energy trading company in need of new capabilities, or a candidate with ambitions in energy trading, we invite you to start a conversation.',
      btn_client: 'For Companies',
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
      client_subtitle: 'Fill out the form, and we will initiate a no-commitment conversation.',
      candidate_title: 'Join PrimeTalent’s candidate network',
      candidate_subtitle: 'Fill out the form, and we will initiate a confidential, no-commitment conversation.',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone (Optional)',
      company: 'Company',
      linkedin: 'LinkedIn URL (Optional)',
      message: 'Message',
      clientMessagePlaceholderText: 'We are looking for a Senior Power Trader...',
      candidateMessagePlaceholderText: 'I am a Senior Power Trader looking for...',
      send: 'Send Inquiry',
      sending: 'Sending...',
      success_title: 'Inquiry Received',
      success_client: 'Thank you. One of our consultants at PrimeTalent will get back to you as soon as possible.',
      success_candidate: 'Thank you. One of our consultants at PrimeTalent will get back to you as soon as possible.',
      close: 'Close'
    }
  },
  da: {
    nav: {
      focusAreas: 'Fokusområder',
      insights: 'Indsigter',
      candidates: 'Kandidater',
      clients: 'Klienter',
      about: 'Om Os'
    },
    hero: {
      title_line1: 'Vi forbinder',
      title_line2: 'energi-talenter',
      title_line3: 'med fremtiden',
      subtitle: 'Vi forbinder energihandelsvirksomheder med kandidater, der bidrager til bedre beslutninger og stærkere resultater. Vi inviterer til en fortrolig dialog.',
      btn_client: 'FOR VIRKSOMHEDER',
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
      title: 'Baseret i Aarhus. Forbundet globalt.',
      p1: 'PrimeTalent er et rekrutterings- og headhuntingfirma med base i Aarhus, specialiseret i energisektoren. Vi samarbejder med energihandelsvirksomheder om at identificere og rekruttere de rette profiler til både nøgle- og specialistroller.',
      p2: 'I et marked præget af høj kompleksitet, volatilitet og hurtige beslutninger er adgang til de rette kompetencer afgørende. Vi arbejder tæt med både virksomheder og kandidater og håndterer hver rekruttering med høj faglighed, diskretion og dyb brancheindsigt. Vores fokus er ikke kun at besætte stillinger, men at sikre match, der skaber langsigtet værdi for begge parter.',
      team_rasmus_role: 'Partner',
      team_rasmus_email: 'Email: rm@primetalent.dk',
      team_rasmus_phone: 'Mobil: +45 26 22 21 89',
      team_malthe_role: 'Partner',
      team_malthe_email: 'Email: mb@primetalent.dk',
      team_malthe_phone: 'Mobil: +45 40 97 77 88',
      team_kasper_role: 'Partner',
      team_kasper_email: 'Email: kp@primetalent.dk',
      team_kasper_phone: 'Mobil: +45 22 63 63 10'
    },
    cta: {
      title: 'Samarbejde med PrimeTalent',
      desc: 'Uanset om I er en energihandelsvirksomhed med behov for nye kompetencer, eller en kandidat med ambitioner inden for energihandel, inviterer vi jer til dialog.',
      btn_client: 'For Virksomheder',
      btn_candidate: 'For Kandidater'
    },
    footer: {
      desc: 'Vi identificerer top-performere og placerer dem dér, hvor de skaber mest værdi.',
      services: 'Ydelser',
      industries: 'Industrier',
      contact_info: 'Kontakt',
      stay_informed: 'Hold Dig Opdateret',
      subscribe: 'Tilmeld dig vores nyhedsbrev.',
      rights: 'PrimeTalent Global. Alle rettigheder forbeholdes.',
    },
    modal: {
      client_title: 'Bliv samarbejdspartner med PrimeTalent',
      client_subtitle: 'Udfyld formularen – så tager vi en uforpligtende dialog.',
      candidate_title: 'Bliv en del af PrimeTalents kandidatnetværk',
      candidate_subtitle: 'Udfyld formularen, så tager vi en uforpligtende og fortrolig dialog.',
      name: 'Fulde Navn',
      email: 'Email',
      phone: 'Mobil (Valgfrit)',
      company: 'Virksomhed',
      linkedin: 'LinkedIn URL (Valgfrit)',
      message: 'Besked',
      clientMessagePlaceholderText: 'Vi søger en erfaren Senior Power Trader...',
      candidateMessagePlaceholderText: 'Jeg er en erfaren Senior Power Trader som søger...',
      send: 'Send Forespørgsel',
      sending: 'Sender...',
      success_title: 'Forespørgsel Modtaget',
      success_client: 'Tak. En af vores konsulenter fra PrimeTalent vil kontakte dig snarest muligt.',
      success_candidate: 'Tak. En af vores konsulenter fra PrimeTalent vil kontakte dig snarest muligt.',
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
