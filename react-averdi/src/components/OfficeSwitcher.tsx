"use client";

// import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function OfficeSwitcher() {
  const offices = {
    karasjok: {
      name: "Karasjok",
      address: "Hovedgata 15, 9730 Karasjok",
      phone: "+47 78 46 60 00",
      email: "karasjok@averdi.no",
      contact: "Inga Márjá Somby",
      contactTitle: "Kontorleder",
      hours: "Man-Fre: 08:00-16:00"
    },
    oslo: {
      name: "Oslo",
      address: "Karl Johans gate 25, 0159 Oslo",
      phone: "+47 22 33 44 55",
      email: "oslo@averdi.no",
      contact: "Lars Hansen",
      contactTitle: "Kontorleder",
      hours: "Man-Fre: 08:00-17:00"
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl mb-4">
            To kontorer - én trygg partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uansett hvor du befinner deg i Norge, er vi i nærheten
          </p>
        </div>

        <Tabs defaultValue="karasjok" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="karasjok" className="text-base">
              📍 Karasjok
            </TabsTrigger>
            <TabsTrigger value="oslo" className="text-base">
              🏙️ Oslo
            </TabsTrigger>
          </TabsList>

          {Object.entries(offices).map(([key, office]) => (
            <TabsContent key={key} value={key}>
              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl mb-2">Kontakt {office.name}</h3>
                        <p className="text-muted-foreground mb-4">
                          {office.contact} - {office.contactTitle}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Adresse</p>
                            <p className="text-muted-foreground">{office.address}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Telefon</p>
                            <a 
                              href={`tel:${office.phone}`}
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              {office.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">E-post</p>
                            <a 
                              href={`mailto:${office.email}`}
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              {office.email}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Åpningstider</p>
                            <p className="text-muted-foreground">{office.hours}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">
                          {key === 'karasjok' ? '🏔️' : '🏙️'}
                        </div>
                        <p className="text-lg font-medium">{office.name}</p>
                        <p className="text-muted-foreground">
                          {key === 'karasjok' ? 'Hjerte av Finnmark' : 'Hovedstadens sentrum'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}