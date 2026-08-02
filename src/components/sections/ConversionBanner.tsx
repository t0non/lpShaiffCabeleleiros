import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";

export function ConversionBanner() {
  return (
    <Section variant="dark" padding="default" className="border-y border-brand-cream/10 bg-brand-dark text-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />

      <Container size="medium" className="relative z-10">
        <h2 className="font-heading text-2xl sm:text-3xl font-medium text-brand-cream mb-3 leading-tight">
          Pronta para se cuidar?<br className="hidden sm:block" /> A gente está te esperando.
        </h2>

        <p className="text-brand-cream/75 mb-8 max-w-md mx-auto leading-relaxed">
          Envie uma mensagem agora — é rápido, sem complicação. Nossa equipe retorna com os horários disponíveis para você.
        </p>

        <div className="flex flex-col items-center justify-center gap-2">
          <Button
            href={siteConfig.whatsappHref || undefined}
            external
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-md transition-all duration-300 hover:scale-105 btn-shimmer"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            <span>Falar com o Shaiff no WhatsApp</span>
          </Button>

          <span className="text-[11px] text-brand-cream/50 mt-1">
            Resposta durante o horário de atendimento.
          </span>
        </div>
      </Container>
    </Section>
  );
}
