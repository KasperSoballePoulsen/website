import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Alexander Thomsen',
    role: 'Managing Partner',
    focus: 'Energy Trading & Commercial',
    image: '././public/Gemini_Generated_Image_pigdlzpigdlzpigd.png',
    bio: 'With over 15 years in energy markets, Alexander specializes in placing high-impact traders and originators across European power and gas desks. He founded PrimeTalent to bring a bespoke approach to front-office recruitment.'
  },
  {
    name: 'Sarah Nielsen',
    role: 'Partner',
    focus: 'Quantitative Analytics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Sarah bridges the gap between complex mathematics and recruitment. With a background in applied statistics, she identifies elite quants, data scientists, and structurers for the world’s leading trading houses.'
  },
  {
    name: 'Mikkel Jensen',
    role: 'Partner',
    focus: 'Trading Technology',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    bio: 'Focused exclusively on the technological backbone of trading, Mikkel connects low-latency C++ and Python developers with firms building the high-performance systems of tomorrow.'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
           <div className="md:w-1/2">
             <SectionHeading 
               category="Who We Are"
               title="Based in Aarhus. Connected Globally."
             />
           </div>
           <div className="md:w-1/2 pt-4">
             <p className="text-xl font-light text-gray-600 leading-relaxed mb-6">
               PrimeTalent is a boutique executive search firm headquartered in Aarhus, Denmark. We function as a strategic partner to a select group of energy trading houses and technology firms.
             </p>
             <p className="text-gray-500 font-light leading-relaxed">
               We believe that in a market defined by volatility and speed, the only true competitive advantage is human capital. Our compact, dedicated team of three partners ensures that every search is handled with the utmost discretion, speed, and industry depth. We don't just fill roles; we build the desks that move the market.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-8 h-[450px] w-full bg-gray-100">
                <div className="absolute inset-0 bg-prime-navy/0 group-hover:bg-prime-navy/10 transition-colors duration-500 z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="pr-4">
                <h3 className="text-3xl font-serif text-prime-navy mb-2">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">{member.role}</p>
                <div className="w-8 h-0.5 bg-gray-200 mb-4"></div>
                <p className="text-sm font-bold text-prime-navy mb-2">Focus: {member.focus}</p>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a href="#" className="inline-flex items-center text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;