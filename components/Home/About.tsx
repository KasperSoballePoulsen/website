import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Rasmus Mikkelsen',
      role: t('about.team_rasmus_role'),
      focus: t('about.team_rasmus_focus'),
      image: 'RasmusProfilePic.jpg',
      bio: t('about.team_rasmus_bio')
    },
    {
      name: 'Malthe Boel',
      role: t('about.team_sarah_role'),
      focus: t('about.team_sarah_focus'),
      image: 'MaltheProfilePic.jpg',
      bio: t('about.team_sarah_bio')
    },
    {
      name: 'Kasper Poulsen',
      role: t('about.team_mikkel_role'),
      focus: t('about.team_mikkel_focus'),
      image: 'KasperProfilePic.jpg',
      bio: t('about.team_mikkel_bio')
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
           <div className="md:w-1/2">
             <SectionHeading 
               category={t('about.category')}
               title={t('about.title')}
             />
           </div>
           <div className="md:w-1/2 pt-4">
             <p className="text-xl font-light text-gray-600 leading-relaxed mb-6">
               {t('about.p1')}
             </p>
             <p className="text-gray-500 font-light leading-relaxed">
               {t('about.p2')}
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
                {/*<p className="text-sm font-bold text-prime-navy mb-2">Focus: {member.focus}</p>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                  {member.bio}
                </p> */}
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