import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function ServicesOverview() {
  return (
    <Section id="servicos" variant="light" padding="default" className="border-b border-brand-border/40 bg-white">
      <Container size="large">
        <SectionHeading
          kicker="NOSSOS SERVIÇOS"
          title="Tudo o que você precisa para se sentir ainda mais bonita"
          subtitle="Escolha o cuidado que combina com o seu momento. Nossa equipe está pronta para entender o que você procura e ajudar você a encontrar o serviço mais adequado."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service) => (
            <Link
              key={service.id}
              href={`/servicos/${service.slug}`}
              className="bg-white rounded-2xl border border-brand-border/60 shadow-sm flex flex-col justify-between hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div className="flex flex-col flex-1">
                <div className="relative w-full aspect-[16/9] bg-brand-muted overflow-hidden">
                  <img src={service.image} alt={service.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Brown Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-90 transition-opacity duration-300" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex items-end">
                    <h3 className="font-heading text-lg font-medium text-brand-cream leading-snug drop-shadow-md">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pb-5 flex-1">
                  <p className="text-xs text-brand-bodyText/80 leading-relaxed mb-2">
                    {service.shortDescription}
                  </p>
                  <span className="text-xs font-semibold text-brand-primary group-hover:underline block mt-3">
                    Saiba mais &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Centralized CTA button - 1 of our 3 main CTAs on the page */}
        <div className="mt-12 text-center">
          <Button
            href={siteConfig.whatsappHref || undefined}
            external
            variant="primary"
            size="lg"
            className="transition-all duration-300 hover:scale-105 shadow-md btn-shimmer"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2 shrink-0" />
            <span>Consultar Valores e Agendar Horário</span>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
