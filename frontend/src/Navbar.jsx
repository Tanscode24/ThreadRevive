import React from 'react';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-10 bg-white/90 backdrop-blur-md border-b border-stone-100 sticky top-0 z-[100]">
      <div 
        className="text-2xl font-bold tracking-tighter text-stone-900 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ThreadRevive<span className="text-green-600">.</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-semibold text-stone-600 uppercase tracking-wider">
        <button onClick={() => scrollToSection('gallery-section')} className="hover:text-green-700 transition-colors">
          Marketplace
        </button>
        <button onClick={() => scrollToSection('artisan-section')} className="hover:text-green-700 transition-colors">
          How it Works
        </button>
        {/* Designers button removed from here */}
      </div>

      <button 
        onClick={() => scrollToSection('seller-section')}
        className="px-6 py-2.5 bg-green-800 text-white rounded-full font-bold text-sm hover:bg-green-900 transition-all active:scale-95"
      >
        Sell an Item
      </button>
    </nav>
  );
}