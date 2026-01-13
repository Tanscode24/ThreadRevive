import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Gallery from './Gallery';
import ArtisanStory from './ArtisanStory';
// Removed Designers import
import SellerPortal from './SellerPortal';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-green-100 selection:text-green-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <ArtisanStory /> 
        {/* Designers component removed from here */}
        <SellerPortal />
      </main>
      <Footer />
    </div>
  );
}

export default App;