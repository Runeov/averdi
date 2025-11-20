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
    <section id="hero" className="py-8 md:py-12 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        
        {/* Image with H1 overlay */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <ImageWithFallback
            src="/karasjok_Over.jpg"
            alt="Profesjonelt kontormiljø hos Averdi"
            className="w-full h-[300px] md:h-[300px] lg:h-[300px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-start justify-center p-4 pt-12 md:pt-24 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white max-w-4xl drop-shadow-md">
              Velkommen til Averdi
            </h1>
          </div>
        </div>

        {/* Content below image */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed font-medium">
            Din partner for trygg økonomistyring – med faglig tyngde og hjertet i Finnmark
          </p>
          <p className="text-base text-muted-foreground mb-10 leading-relaxed">
            Siden 1999 har vi vært en trygg havn for norske bedrifter. Men trygghet betyr ikke stillstand. Hos Averdi møter du en unik kombinasjon: autoriserte regnskapsførere med lang erfaring som kan lovverket til fingerspissene sammen med våre yngre ansatte sørger for at du utnytter dagens muligheter fullt ut.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-base px-8 py-3"
            >
              Kontakt oss
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="text-base px-8 py-3"
            >
              Se tjenester
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}