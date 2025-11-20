import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img src="/logo_averdi.png" alt="Averdi Logo" className="h-24 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Autorisert regnskapsførerselskap som hjelper norske bedrifter med 
              regnskap, lønn og økonomisk rådgivning siden 1999.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Org.nr: 980 383 571</p>
              <p>Godkjent av Finanstilsynet</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Hurtiglenker</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Hjem
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Tjenester
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Om oss
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Kontakt</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Karasjok</p>
                <p>Hovedgata 15</p>
                <p>9730 Karasjok</p>
                <p>+47 78 46 60 00</p>
              </div>
             
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 Averdi AS. Alle rettigheter forbeholdt.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Personvern</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            <a href="#" className="hover:text-primary transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}