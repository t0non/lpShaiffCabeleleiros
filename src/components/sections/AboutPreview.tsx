import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { CheckCircle2, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function AboutPreview() {
  const highlights = [
    { title: "Tudo em um só lugar", description: "Cabelo, unhas, sobrancelhas e depilação — sem precisar ir de um lugar para o outro." },
    { title: "A gente escuta antes de fazer", description: "Antes de qualquer procedimento, entendemos o que você quer e o que combina com você." },
    { title: "Ambiente pensado para você relaxar", description: "Climatizado, organizado e acolhedor — porque cuidar de você também é sobre o como." },
    { title: "Fácil de chegar em Santa Efigênia", description: "No Angelini Center, Rua Padre Rolim — prático para quem está na região hospitalar ou no centro de BH." },
  ];

  return (
    <Section id="sobre" variant="muted" padding="default" className="border-b border-brand-border/40 bg-[#FAF6F0]">
      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Visual / Image display with real space photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-stone-100 border border-brand-border/50 group shadow-xl transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/shaiff/espaco/espaco1.webp"
                alt="Ambiente interno do Shaiff Cabeleireiros em Santa Efigênia, BH"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              kicker="CONHEÇA O SHAIFF"
              title="Um salão que cuida de você do jeito que você merece"
              align="center"
              className="mb-4 md:mb-6"
            />

            <div className="space-y-4 text-brand-bodyText text-base leading-relaxed">
              <p>
                No Shaiff, você encontra tudo o que precisa para se cuidar — cabelo, unhas, sobrancelhas e depilação — em um único endereço confortável e bem localizado em Santa Efigênia, Belo Horizonte.
              </p>
              <p>
                Cada atendimento começa com uma conversa. Antes de qualquer coisa, queremos entender o que você quer e o que faz sentido para você — porque o resultado tem que ser seu.
              </p>
            </div>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-brand-border/40 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-brand-dark leading-snug mb-1">
                      {item.title}
                    </span>
                    <span className="text-xs text-brand-dark/75 leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>


      </Container>
    </Section>
  );
}
