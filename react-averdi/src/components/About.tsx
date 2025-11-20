import { TeamCard } from './TeamCard';

interface AboutProps {
  onViewProfile?: (employeeId: string) => void;
}

export function About({ onViewProfile }: AboutProps) {
  const team = [
   
  {
    id: "ingvald-laiti",
    name: "Ingvald Laiti",
    role: "Daglig leder / Autorisert regnskapsfører",
    email: "ingvald.laiti@averdi.no",
    phone: "907 67 993",
    description: "Leder teamet med faglig tyngde og sikrer det solide fundamentet"
  },
  {
    id: "jan-atle-guttorm",
    name: "Jan Atle Guttorm",
    role: "Regnskapsfører",
    email: "jan.atle.guttorm@averdi.no",
    phone: "915 48 089",
    description: "Din garantist for orden. Leverer presis regnskapsføring som gir deg full kontroll i hverdagen."
  },
  {
    id: "hilde-laiti",
    name: "Hilde M. Laiti",
    role: "Regnskapsfører",
    email: "hilde.marie.laiti@averdi.no",
    phone: "400 44 918",
    description:  "Gjør økonomistyringen enklere for deg. Bruker effektive løsninger for å frigjøre tid til kjernevirksomheten."
  },
  {
    id: "alida-norvang",
    name: "Alida G. Norvang",
    role: "Regnskapsfører",
    email: "alida.norvang@averdi.no",
    phone: "480 52 329",
    description: "Nøyaktig og pålitelig. Sikrer at regnskapet ditt er en stabil plattform for alle dine viktige beslutninger."
  },
  {
    id: "tonje-iren-anti",
    name: "Tonje Iren Anti",
    role: "Regnskapsfører",
    email: "tonje.iren.anti@averdi.no",
    phone: "480 23 265",
    description: "Sikrer knirkefritt drift. En engasjert støttespiller som passer på at regnskapet ditt alltid er oppdatert."
  },
  {
    id: "linda-kildedam",
    name: "Linda Marja Anti Kildedam",
    role: "Regnskapsfører",
    email: "linda.kildedam@averdi.no",
    phone: "480 51 672",
    description: "Gir deg trygghet og oversikt. Hun sikrer at beslutningsgrunnlaget ditt alltid er i orden."
  }
]


  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl mb-6">
            Om Averdi
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Siden 1999 har Averdi vært en pålitelig og erfaren partner for norske bedrifter. Med kontor i Karasjok leverer vi profesjonelle regnskapstjenester og dyp lokalkunnskap – men vår erfaring strekker seg over hele landet.
            </p>
            <p>
              Vårt team består av autoriserte regnskapsførere og erfarne økonomirådgivere som 
              brenner for å hjelpe bedrifter å lykkes. Vi kombinerer lokal kunnskap med moderne 
              teknologi for å gi deg de beste løsningene.
            </p>
            <p>
              Enten du driver et enkeltpersonforetak i nord eller et større AS i sør, har vi 
              kompetansen og erfaringen som skal til for å ta hånd om din økonomi.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl text-center mb-8">Vårt team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                email={member.email}
                phone={member.phone}
                description={member.description}
                onViewProfile={onViewProfile ? () => onViewProfile(member.id) : undefined}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="p-6">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="text-lg mb-2">Autorisert regnskapsførerselskap</h4>
            <p className="text-muted-foreground">
              Godkjent av Finanstilsynet med høye kvalitetsstandarder
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="text-lg mb-2">200+ fornøyde kunder</h4>
            <p className="text-muted-foreground">
              Fra oppstart til etablerte bedrifter over hele Norge
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="text-lg mb-2">Trygg og sikker</h4>
            <p className="text-muted-foreground">
              All data behandles i henhold til GDPR og norsk lovgivning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}