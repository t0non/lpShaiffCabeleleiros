import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getCanonicalUrl } from "@/config/seo";
import { generateFAQSchema, getHairSalonId, generateHairSalonSchema, generateWebSiteSchema } from "@/lib/schema";
import { createAbsoluteUrl } from "@/lib/site-url";
import { JsonLd } from "@/components/seo/JsonLd";

import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { PromotionalCombos } from "@/components/sections/PromotionalCombos";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationSection } from "@/components/sections/LocationSection";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { QuickContact } from "@/components/sections/QuickContact";
import { StoreSection } from "@/components/sections/StoreSection";
import { TreatmentLines } from "@/components/sections/TreatmentLines";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Salão de Beleza em Santa Efigênia, BH",
  description:
    "Conheça o Shaiff Cabeleireiros, salão de beleza em Santa Efigênia, Belo Horizonte. Cortes, escova, mechas, cuidados capilares, manicure, pedicure e outros serviços.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
};

const homeFaqs = [
  {
    question: "Onde fica o Shaiff Cabeleireiros?",
    answer:
      "O Shaiff está localizado na Rua Padre Rolim, 715, no Condomínio Edifício Angelini Center, em Santa Efigênia, Belo Horizonte.",
  },
  {
    question: "Quais serviços estão disponíveis?",
    answer:
      "O Shaiff oferece cortes femininos, escova, hidratação e nutrição capilar, selagem, mechas, depilação feminina, manicure, pedicure e design de sobrancelhas.",
  },
  {
    question: "Como faço para agendar um horário?",
    answer:
      "Você pode consultar os horários disponíveis pelo WhatsApp ou pelo telefone (31) 3564-0123. Informe o serviço desejado para que nossa equipe possa orientar você.",
  },
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Recomendamos o agendamento antecipado, principalmente para serviços como mechas, selagem e tratamentos capilares. A disponibilidade pode variar de acordo com o dia e o profissional.",
  },
  {
    question: "Preciso fazer uma avaliação antes das mechas?",
    answer:
      "Dependendo da condição e do histórico do cabelo, pode ser necessária uma avaliação ou um teste de mecha antes do procedimento. Entre em contato para receber as orientações da equipe.",
  },
  {
    question: "O Shaiff oferece manicure e pedicure?",
    answer:
      "Sim. Os serviços de manicure e pedicure são realizados mediante agendamento e disponibilidade dos profissionais.",
  },
  {
    question: "Como posso saber o valor de um serviço?",
    answer:
      "Alguns valores podem variar conforme o comprimento, o volume do cabelo e o procedimento desejado. Envie uma mensagem pelo WhatsApp e informe o serviço que procura para receber uma orientação.",
  },
];

export default function HomePage() {
  const homeUrl = createAbsoluteUrl("/");
  const webPageSchema = {
    "@type": "WebPage",
    "@id": homeUrl ? `${homeUrl}#webpage` : "#webpage",
    ...(homeUrl ? { url: homeUrl } : {}),
    "name": `${siteConfig.businessName} | Salão de Beleza em Santa Efigênia, BH`,
    "description": siteConfig.description,
    "about": { "@id": getHairSalonId() },
    "inLanguage": "pt-BR",
  };

  const faqSchema = generateFAQSchema(homeFaqs);
  const hairSalonSchema = generateHairSalonSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <>
      <JsonLd graph={[webPageSchema, faqSchema, hairSalonSchema, webSiteSchema]} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Todos os serviços */}
      <ServicesOverview />

      {/* 3. Apresentação do salão */}
      <AboutPreview />

      {/* 4. Combos Promocionais */}
      <PromotionalCombos />

      {/* 5. Loja */}
      <StoreSection />

      {/* 6. Linhas de tratamento */}
      <TreatmentLines />

      {/* 7. Avaliações (Testimonials) */}
      <Testimonials />

      {/* 8. Perguntas frequentes */}
      <HomeFAQ />

      {/* 9. Seção de contato rápido */}
      <QuickContact />

      {/* 10. Localização */}
      <LocationSection />
    </>
  );
}
