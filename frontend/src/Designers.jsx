import React from 'react';
import { motion } from 'framer-motion';

const designers = [
  {
    name: "Ananya Sharma",
    specialty: "Traditional Revival",
    bio: "Specializes in converting vintage silk sarees into modern luxury evening wear.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Vikram Mehta",
    specialty: "Streetwear Upcycling",
    bio: "Gives new life to old denim and heavy cottons through patchwork and distressing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Priya Iyer",
    specialty: "Minimalist Linen",
    bio: "Focuses on zero-waste patterns and natural dyes for everyday sustainable comfort.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Designers() {
  return (
    <section id="designers-section" className="py-20 bg-white px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header removed as requested */}
        <div className="grid md:grid-cols-3 gap-10">
          {designers.map((designer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-stone-100">
                <img 
                  src={designer.image} 
                  alt={designer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white text-center text-sm leading-relaxed">{designer.bio}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-900">{designer.name}</h3>
              <p className="text-green-700 font-semibold text-xs uppercase tracking-widest">{designer.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}