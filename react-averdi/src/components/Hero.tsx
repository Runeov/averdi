"use client";

import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-background to-secondary/20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <ImageWithFallback
          src="/karasjok_Over.jpg"
          alt="Profesjonelt kontormiljø hos Averdi"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 drop-shadow-lg">
            Velkommen til Averdi
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 leading-relaxed font-medium drop-shadow-md opacity-90">
            Din partner for trygg økonomistyring – med faglig tyngde og hjertet i Finnmark
          </p>
          
          <p className="text-lg sm:text-xl mb-12 leading-relaxed drop-shadow-md opacity-90 max-w-3xl mx-auto hidden md:block">
            Siden 1999 har vi vært en trygg havn for norske bedrifter. Men trygghet betyr ikke stillstand. Hos Averdi møter du en unik kombinasjon: autoriserte regnskapsførere med lang erfaring som kan lovverket til fingerspissene sammen med våre yngre ansatte sørger for at du utnytter dagens muligheter fullt ut.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white border-none"
            >
              Kontakt oss
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/50 backdrop-blur-sm"
            >
              Se tjenester
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}