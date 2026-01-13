import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold tracking-tighter text-white mb-6">
            ThreadRevive<span className="text-green-500">.</span>
          </div>
          <p className="text-sm leading-relaxed">
            Revolutionizing Indian fashion through circularity. We turn yesterday's waste into tomorrow's wardrobe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-green-400 transition">Shop Upcycled</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Sell Your Clothes</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Our Artisan Hubs</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Impact Report</a></li>
          </ul>
        </div>

        {/* Contact/Support */}
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-green-400 transition">Pickup Guide</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Join the Movement</h4>
          <p className="text-sm mb-4">Get updates on new drops and sustainability tips.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-stone-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-green-500 outline-none text-white"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-green-600 transition">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 ThreadRevive India. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}