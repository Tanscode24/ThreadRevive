import React from 'react';

const products = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    designer: "Studio Re-born",
    price: "₹9,999", // Updated to INR
    beforeImg: "https://images.unsplash.com/photo-1576905355165-30c9273df53e?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=400",
    waterSaved: "2,500L"
  },
  {
    id: 2,
    name: "Classic White Shirt",
    designer: "Eco-Stitch",
    price: "₹4,500", // Updated to INR
    beforeImg: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80&w=400",
    waterSaved: "1,200L"
  },
  {
    id: 3,
    name: "Oversized Flannel",
    designer: "Patchwork Labs",
    price: "₹6,200", // Updated to INR
    beforeImg: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1594932224828-b4b059b02447?auto=format&fit=crop&q=80&w=400",
    waterSaved: "1,800L"
  }
];

export default function Gallery() {
  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-2">Featured Transformations</h2>
        <p className="text-stone-500 mb-12 uppercase tracking-widest text-sm">Hover to see the magic</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={item.beforeImg} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  alt="Original"
                />
                <img 
                  src={item.afterImg} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  alt="Upcycled"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-800">
                  {item.waterSaved} WATER SAVED
                </div>
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-stone-900">{item.name}</h3>
                  <p className="text-stone-500 text-sm italic">by {item.designer}</p>
                </div>
                {/* Updated styling for the Rupee Price */}
                <span className="text-green-700 font-bold text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}