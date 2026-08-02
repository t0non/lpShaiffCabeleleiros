import React from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white border-b border-brand-border/60"
      style={{ minHeight: "clamp(640px, 92vh, 860px)" }}
    >
      {/* ── Z-0: Background do salão ──────────────────────────────── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/espaco/espaco6.webp')`,
          filter: "brightness(1.06) saturate(0.9)",
        }}
        aria-hidden="true"
      />

      {/* ── Z-5: Gradiente de legibilidade ────────────────────────── */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.93) 38%, rgba(255,255,255,0.60) 58%, rgba(255,255,255,0.08) 78%, transparent 100%)",
        }}
        aria-hidden="true"
      />



      {/* ── Z-20: Imagem da mulher ────────────────────────────────── */}
      {/* Desktop */}
      <img
        src="/images/mulher_hero1.png"
        alt="Cliente do Shaiff Cabeleireiros"
        aria-hidden="true"
        className="
          hidden md:block
          absolute bottom-0 right-[2%] z-20
          h-[90%] w-auto max-w-[46%]
          object-contain object-bottom
          pointer-events-none select-none
        "
      />

      {/* Mobile */}
      <img
        src="/images/mulher_hero1.png"
        alt="Cliente do Shaiff Cabeleireiros"
        aria-hidden="true"
        className="
          block md:hidden
          absolute bottom-0 right-[-55px] z-20
          w-[62%] max-w-[270px] h-auto
          object-contain object-bottom
          pointer-events-none select-none
        "
      />

      {/* ── Z-30: Conteúdo principal (textos + CTA) ───────────────── */}
      <div className="relative z-30 h-full flex items-start md:items-center">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-14 md:py-20 pb-0">
          <div
            className="
              flex flex-col gap-5
              w-full md:max-w-[50%] lg:max-w-[46%]
              animate-in fade-in slide-in-from-bottom-6 duration-700
            "
          >
            {/* Badge */}
            <div
              className="
                inline-flex self-start items-center gap-2
                px-4 py-1.5 rounded-full
                bg-brand-primary border border-brand-primary/20
                text-brand-cream text-xs sm:text-sm font-semibold
                uppercase tracking-widest
              "
            >
              SALÃO DE BELEZA EM SANTA EFIGÊNIA, BH
            </div>

            {/* Headline */}
            <h1
              className="
                font-heading font-normal tracking-tight leading-[1.08]
                text-[34px] sm:text-[42px] md:text-[48px] lg:text-[56px]
                text-brand-dark
              "
            >
              Cuidado completo para sua beleza em um só lugar.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed max-w-[420px]">
              Cabelos, unhas e beleza com atendimento atencioso e fácil
              agendamento em Santa Efigênia.
            </p>

            {/* CTA */}
            <div className="mt-8 md:mt-0">
              <Button
                href={siteConfig.whatsappHref || undefined}
                external
                variant="primary"
                size="lg"
                className="
                  btn-shimmer w-auto sm:w-auto
                  !py-4 !px-7 shadow-md hover:shadow-lg hover:scale-105
                  transition-all duration-300
                "
              >
                <WhatsAppIcon className="w-4 h-4 mr-2 shrink-0" />
                Agendar horário
              </Button>
            </div>

            {/* Spacer para mobile — empurra o card google pra baixo via absolute */}
            <div className="block md:hidden h-32" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}


