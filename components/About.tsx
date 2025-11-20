import { TeamCard } from './TeamCard';

interface AboutProps {
  onViewProfile?: (employeeId: string) => void;
}

export function About({ onViewProfile }: AboutProps) {
  const team = [
    {
      id: "inga-marja-somby",
      name: "Inga Márjá Somby",
      role: "Autorisert regnskapsfører",
      email: "inga@averdi.no",
      phone: "+47 78 46 60 01",
      description: "15 års erfaring med regnskap og økonomi. Spesialist på små og mellomstore bedrifter."
    },
    {
      id: "lars-hansen",
      name: "Lars Hansen",
      role: "Økonomirådgiver",
      email: "lars@averdi.no",
      phone: "+47 22 33 44 56",
      description: "Erfaren økonomirådgiver med fokus på vekstbedrifter og strategisk planlegging."
    },
    {
      id: "marta-kristiansen",
      name: "Marta Kristiansen",
      role: "Lønnskonsulent",
      email: "marta@averdi.no",
      phone: "+47 78 46 60 02",
      description: "Spesialist på lønn og personaladministrasjon med bred erfaring fra ulike bransjer."
    },
    {
      id: "erik-nilsen",
      name: "Erik Nilsen",
      role: "Regnskapsfører",
      email: "erik@averdi.no",
      phone: "+47 22 33 44 57",
      description: "Nyutdannet og engasjert regnskapsfører som brenner for å hjelpe nye bedrifter i gang."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl mb-6">
            Om Averdi
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Siden 2010 har Averdi vært en pålitelig partner for norske bedrifter som trenger 
              profesjonell økonomihjelp. Med kontorer i både Karasjok og Oslo dekker vi hele landet.
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