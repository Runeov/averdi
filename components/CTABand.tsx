import { Button } from './ui/button';

export function CTABand() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl mb-4">
          Klar til å ta kontroll over økonomien?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          La oss hjelpe deg med regnskapet slik at du kan fokusere på det du kan best. 
          Kontakt oss i dag for en uforpliktende samtale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={scrollToContact}
            className="text-base px-8 py-3"
          >
            Kom i gang
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="text-base px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="tel:+4778466000">Ring nå</a>
          </Button>
        </div>
      </div>
    </section>
  );
}