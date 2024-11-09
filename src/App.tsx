import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} AlsoKnown AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;