import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const brands = [
  { name: "L'Oréal", subtitle: "Professionnel Paris" },
  { name: "Joico", subtitle: "The Art of Healthy Hair" },
  { name: "Wella", subtitle: "Professionals" },
  { name: "Sebastian", subtitle: "Professional" },
  { name: "Keune", subtitle: "Haircosmetics" },
  { name: "Med", subtitle: "For Hair & Beauty" },
];

export function TreatmentLines() {
  return (
    <Section variant="light" padding="default" className="border-b border-brand-border/40 bg-white py-14">
      <Container size="large">
        <SectionHeading
          kicker="LINHAS DE TRATAMENTO"
          title="Os melhores produtos para o seu cabelo"
          subtitle="Utilizamos exclusivamente marcas consagradas internacionalmente para garantir a integridade, saúde e resultados excepcionais para os seus fios."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-[#FAF6F0] p-6 rounded-2xl border border-brand-border/40 shadow-xs flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-brand-primary/40 group"
            >
              <span className="font-heading text-2xl font-light tracking-widest text-brand-dark group-hover:text-brand-primary transition-colors">
                {brand.name}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-brand-bodyText/60 mt-1 block">
                {brand.subtitle}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
