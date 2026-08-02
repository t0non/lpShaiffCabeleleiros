import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function QuickContact() {
  return (
    <Section id="contato" variant="muted" padding="default" className="border-b border-brand-border/40 bg-[#FAF6F0]">
      <Container size="large">
        <SectionHeading
          kicker="FALE COM O SHAIFF"
          title="Escolha como prefere falar com a gente"
          subtitle="Seja pelo WhatsApp ou por telefone — nossa equipe está pronta para te atender e encontrar o melhor horário para você."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Option 1: WhatsApp — Principal */}
          <div className="bg-white p-8 rounded-2xl border border-brand-primary/30 shadow-md flex flex-col justify-between text-center hover:border-brand-primary/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 order-1">
            <div>
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-4 shadow-xs">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-medium text-brand-heading mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-brand-bodyText/80 mb-6 leading-relaxed">
                A forma mais rápida de falar com a gente. Informe o serviço que você procura e a gente te retorna com os horários disponíveis.
              </p>
            </div>

            <Button
              href={siteConfig.whatsappHref || undefined}
              external
              variant="primary"
              size="lg"
              className="w-full btn-shimmer"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 shrink-0" />
              <span>Falar no WhatsApp</span>
            </Button>
          </div>

          {/* Option 2: Phone — Secundário */}
          <div className="bg-white p-8 rounded-2xl border border-brand-border/60 shadow-sm flex flex-col justify-between text-center hover:border-brand-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 order-2">
            <div>
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-cream border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-4 shadow-xs">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-medium text-brand-heading mb-2">
                Ligação
              </h3>
              <p className="text-sm text-brand-bodyText/80 mb-4 leading-relaxed">
                Prefere falar por telefone? Ligue diretamente para o salão e nossa equipe te atende.
              </p>
              <div className="text-xl font-bold text-brand-primary font-sans mb-6">
                {siteConfig.telephone}
              </div>
            </div>

            <Button
              href={siteConfig.telephoneHref}
              external
              variant="outline"
              size="lg"
              className="w-full"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Ligar agora</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
