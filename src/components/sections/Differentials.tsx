import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeartHandshake, Layers, Coffee, MapPin } from "lucide-react";

const differentialsList = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Primeiro, a gente escuta você",
    description:
      "Antes de qualquer coisa, conversamos para entender o que você quer, o que combina com seu estilo e o que faz sentido para você.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Tudo em um só lugar",
    description:
      "Cabelo, unhas, sobrancelhas e depilação — sem precisar ir de um lugar pro outro. Sua beleza completa em um único endereço.",
  },
  {
    number: "03",
    icon: Coffee,
    title: "Um ambiente feito para você relaxar",
    description:
      "Climatizado, organizado e acolhedor. Aqui, cuidar de você também é sobre como você se sente durante o atendimento.",
  },
  {
    number: "04",
    icon: MapPin,
    title: "Fácil de chegar, perto de tudo",
    description:
      "No Angelini Center, Rua Padre Rolim, em Santa Efigênia — ponto de fácil acesso para quem está no centro ou na região hospitalar de BH.",
  },
];

export function Differentials() {
  return (
    <Section variant="dark" padding="default" className="border-b border-brand-cream/10 bg-brand-dark">
      <Container size="large">
        <SectionHeading
          kicker="POR QUE ESCOLHER O SHAIFF"
          title="Não é apenas sobre fazer um serviço. É sobre você gostar do resultado."
          darkBackground
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {differentialsList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative bg-stone-900/80 p-6 sm:p-7 rounded-2xl border border-brand-cream/15 flex flex-col justify-between hover:border-brand-primary/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Header row inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-cream/10 border border-brand-cream/10 flex items-center justify-center text-brand-cream group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-heading text-2xl font-light text-brand-cream/30 group-hover:text-brand-primary transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-medium text-brand-cream mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-cream/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle copper accent bottom line */}
                <div className="mt-6 pt-3 border-t border-brand-cream/10">
                  <div className="h-0.5 w-10 bg-brand-primary group-hover:w-full transition-all duration-300 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
