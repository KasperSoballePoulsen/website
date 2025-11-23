import React, { useState } from 'react';
import { generateMarketInsight } from '../../services/geminiService';
import Button from '../UI/Button';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';

const MarketIntelligence: React.FC = () => {
  const [query, setQuery] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setInsight(null);
    try {
      const result = await generateMarketInsight(query);
      setInsight(result);
    } catch (e) {
      setInsight("We are currently experiencing high demand for our intelligence services. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="market-intelligence" className="py-24 bg-prime-navy text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900 opacity-10 skew-x-12"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Intro */}
          <div>
            <SectionHeading 
              category="PrimeTalent AI"
              title="Trading Market Intelligence"
              description="Leverage our proprietary AI models to get instant, data-backed insights on compensation, hiring trends, and skill demand in energy trading."
              light
            />
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-none">
              <label htmlFor="insight-query" className="block text-sm font-bold uppercase tracking-widest mb-4 text-blue-300">
                Ask about a sector or trend
              </label>
              <div className="flex flex-col gap-4">
                <input
                  id="insight-query"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., 'Salaries for Senior Power Traders in London' or 'Demand for Algo Developers'"
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-lg focus:outline-none focus:border-white placeholder-gray-600 transition-colors"
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-gray-400 font-light">Powered by Gemini 2.5 Flash</div>
                  <Button 
                    variant="secondary" 
                    onClick={handleGenerate}
                    disabled={loading || !query.trim()}
                    className="flex items-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                    {loading ? 'Analyzing...' : 'Generate Insight'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Output */}
          <div className="bg-white text-prime-navy p-8 md:p-12 min-h-[400px] flex flex-col justify-center shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-prime-navy to-blue-600"></div>
             
             {!insight && !loading && (
               <div className="text-center opacity-40">
                 <Sparkles className="mx-auto mb-4" size={48} />
                 <h3 className="text-2xl font-serif mb-2">Awaiting Inquiry</h3>
                 <p className="font-light">Enter a topic to receive a tailored executive briefing.</p>
               </div>
             )}

             {loading && (
               <div className="text-center">
                 <Loader2 className="animate-spin mx-auto mb-6 text-blue-600" size={48} />
                 <h3 className="text-xl font-serif mb-2">Synthesizing Market Data</h3>
                 <p className="font-light text-gray-500">Accessing global trading knowledge base...</p>
               </div>
             )}

             {insight && (
               <div className="animate-fade-in">
                 <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 uppercase tracking-wider">Generated Report</span>
                    <span className="text-xs text-gray-400 ml-auto">{new Date().toLocaleDateString()}</span>
                 </div>
                 <div className="prose prose-lg prose-indigo font-serif text-gray-800 whitespace-pre-line leading-relaxed">
                   {insight}
                 </div>
                 <div className="mt-8 pt-6 border-t border-gray-100">
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-sans font-bold text-prime-navy hover:text-blue-600 uppercase tracking-widest transition-colors">
                      Discuss this with a consultant <ArrowRight size={16} />
                    </a>
                 </div>
               </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketIntelligence;