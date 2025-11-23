import React from 'react';
import SectionHeading from '../UI/SectionHeading';

const articles = [
  {
    id: 1,
    category: 'Market Strategy',
    title: 'The Shift to Short-Term Power Trading: Talent Implications',
    date: 'October 12, 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Technology',
    title: 'Python vs C++: The Battle for the Modern Energy Desk',
    date: 'September 28, 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Renewables',
    title: 'Hiring Trends in Guarantees of Origin (GOs) and Carbon',
    date: 'September 15, 2024',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop'
  }
];

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-prime-gray">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          category="Perspectives"
          title="Insights & Publications"
          description="Analysis on the intersection of energy markets, technology, and human capital."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden h-56 w-full relative">
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity z-10 duration-300"></div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                  {article.category}
                </div>
                <h3 className="text-xl font-serif font-bold text-prime-navy mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                  {article.title}
                </h3>
                <div className="mt-auto pt-6 border-t border-gray-100 text-xs text-gray-500 font-medium">
                  {article.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;