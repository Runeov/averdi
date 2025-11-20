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
    <section id="hero" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 xl:col-span-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
              Regnskap som frigjør tid — rådgivning som gir retning.
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Vi hjelper med regnskap, lønn og økonomi — fra Karasjok og Oslo, til kunder i hele Norge.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Med erfaring siden 2010 og kontorer i både nord og sør, gir vi deg trygg økonomisk rådgivning og effektive løsninger tilpasset din bedrifts behov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="text-base px-8 py-3"
              >
                Kom i gang
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

          {/* Right image */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background/80 to-transparent z-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1746952189279-527fe2365be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG9mZmljZSUyMG5vcndheXxlbnwxfHx8fDE3NTc5MjY2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profesjonelt kontormiljø hos Averdi"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}