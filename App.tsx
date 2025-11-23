import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Sectors from './components/Home/Sectors';
import Insights from './components/Home/Insights';
import Stats from './components/Home/Stats';
import About from './components/Home/About';
import CallToAction from './components/Home/CallToAction';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Sectors />
        <Insights />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;