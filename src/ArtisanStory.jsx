import React from 'react';
import { motion } from 'framer-motion';

export default function ArtisanStory() {
  return (
    <section id="artisan-section" className="relative py-20 bg-green-900 text-white px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Artisan Image Side */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group w-full max-w-md">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-green-400/10 blur-3xl rounded-full"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800" 
              alt="Artisan Craftsmanship" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[400px] md:h-[450px] object-cover border border-green-800 transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                // Reliable fallback if the external image is blocked
                e.target.src = "https://via.placeholder.com/600x450/064e3b/ffffff?text=ThreadRevive+Artisans";
              }}
            />
          </div>
        </motion.div>

        {/* Story Content Side */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-green-300 uppercase bg-white/10 rounded-full">
            Impact & Craftsmanship
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The Hands That <span className="text-green-400">Revive.</span>
          </h2>
          
          <div className="relative mb-8">
            <p className="text-xl text-stone-100 italic font-light leading-relaxed border-l-4 border-green-500 pl-6">
              "Upcycling isn't just about saving fabric; it's about preserving the dignity of craft. Every stitch I add to a ThreadRevive piece tells a story of renewal."
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-800 border border-green-400/30 flex items-center justify-center font-bold text-white shadow-inner">
              RK
            </div>
            <div>
              <p className="font-bold text-lg">Rajesh Kumar</p>
              <p className="text-green-400 text-sm uppercase tracking-wider font-medium">Master Tailor, Jaipur Hub</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button for Real-time Support */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
}