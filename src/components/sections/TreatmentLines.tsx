"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const brands = [
  { name: "L'Oréal", subtitle: "Professionnel Paris", logo: "/images/loreal.png" },
  { name: "Joico", subtitle: "The Art of Healthy Hair", logo: "/images/joico.png" },
  { name: "Wella", subtitle: "Professionals", logo: "/images/wella.png" },
  { name: "Sebastian", subtitle: "Professional", logo: "/images/sebastina.png" },
  { name: "Keune", subtitle: "Haircosmetics", logo: "/images/keune.png" },
  { name: "Med", subtitle: "For Hair & Beauty", logo: "/images/med.png" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 mt-12 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-center group h-28 transition-all duration-300"
            >
              <div className="h-20 w-full flex items-center justify-center relative">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-[95%] object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    (e.target as HTMLElement).style.display = "none";
                    const textNode = (e.target as HTMLElement).nextElementSibling;
                    if (textNode) textNode.classList.remove("hidden");
                  }}
                />
                <span className="hidden font-heading text-lg font-medium tracking-widest text-brand-dark group-hover:text-brand-primary transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
