import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { About } from './components/About';
import { CTABand } from './components/CTABand';
import { Footer } from './components/Footer';
import { StylesheetPage } from './components/StylesheetPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'stylesheet') {
    return <StylesheetPage onBack={() => handleNavigate('home')} />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <CTABand />
      <Footer />
    </main>
  );
}
