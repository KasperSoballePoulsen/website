import React from 'react';
import { Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-prime-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-serif font-bold tracking-tight mb-6 block">
               PrimeTalent
            </span>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Connecting visionary organizations with the executive leadership needed to shape the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-blue-400 transition"><Linkedin size={20} /></a>
              <a href="#" className="text-white hover:text-blue-400 transition"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-blue-400 transition"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:underline">Executive Search</a></li>
              <li><a href="#" className="hover:underline">Board Advisory</a></li>
              <li><a href="#" className="hover:underline">Interim Management</a></li>
              <li><a href="#" className="hover:underline">Leadership Assessment</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">Industries</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:underline">Financial Services</a></li>
              <li><a href="#" className="hover:underline">Technology & Digital</a></li>
              <li><a href="#" className="hover:underline">Industrial</a></li>
              <li><a href="#" className="hover:underline">Consumer & Retail</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">Stay Informed</h4>
            <p className="text-gray-400 text-sm mb-4 font-light">Subscribe to our market intelligence.</p>
            <div className="flex border-b border-gray-600 py-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full outline-none text-white placeholder-gray-500 font-light"
              />
              <button className="text-white hover:text-blue-400">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} PrimeTalent Global. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;