import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 12;
    const duration = 2000;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-16 md:px-10 md:py-24 lg:py-32 flex flex-col items-center text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-green-800 uppercase bg-green-100 rounded-full">
          India's First Circular Fashion Hub
        </div>
        <h1 className="max-w-4xl text-5xl lg:text-7xl font-extrabold leading-tight text-stone-900 mb-8">
          Old Threads, <span className="text-green-700 italic">New Stories.</span>
        </h1>
        <p className="max-w-2xl text-lg lg:text-xl text-stone-600 mb-10 leading-relaxed mx-auto">
          We rescue pre-loved Indian wear and westerns, connecting them with local 
          artisans to create unique upcycled pieces. Join the revolution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-green-800 text-white rounded-xl font-bold text-lg hover:scale-105 transition shadow-lg cursor-pointer">
            Shop the Collection
          </button>
          <button className="px-8 py-4 bg-white border-2 border-stone-200 text-stone-800 rounded-xl font-bold text-lg hover:bg-stone-50 transition cursor-pointer">
            List Your Clothes
          </button>
        </div>
      </motion.div>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-stone-200 pt-10 w-full max-w-5xl">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-stone-900">{count} Lakh</p>
          <p className="text-stone-500 text-xs md:text-sm font-medium uppercase tracking-wider">Liters of Water Saved</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-stone-900">4,500+</p>
          <p className="text-stone-500 text-xs md:text-sm font-medium uppercase tracking-wider">Garments Revived</p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <p className="text-3xl font-bold text-stone-900">15+</p>
          <p className="text-stone-500 text-xs md:text-sm font-medium uppercase tracking-wider">Indian Artisan Hubs</p>
        </div>
      </div>
    </section>
  );
}