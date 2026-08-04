import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PromotionGrid } from "@/components/promotions/PromotionGrid";
import { PromotionalCombo } from "@/types/promotion";
import { createClient } from "@/lib/supabase/server";
import { isValidActiveCombo } from "@/lib/promotions";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";

export async function PromotionalCombos() {
  let activeCombos: PromotionalCombo[] = [];

  try {
    const supabase = await createClient();
    const nowIso = new Date().toISOString();

    const { data, error } = await supabase
      .from("promotional_combos")
      .select("*")
      .eq("is_active", true)
      .or(`starts_at.is.null,starts_at.lte.${nowIso}`)
      .or(`ends_at.is.null,ends_at.gte.${nowIso}`)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (!error && data) {
      activeCombos = (data as PromotionalCombo[]).filter(isValidActiveCombo);
    }
  } catch (err) {
    // Fail gracefully without disrupting main site
    activeCombos = [];
  }

  return (
    <Section id="promocoes" variant="light" padding="default" className="border-b border-brand-border/40 bg-brand-cream/10">
      <Container size="large">
        <SectionHeading
          kicker="COMBOS ESPECIAIS"
          title="Cuidados completos em condições especiais"
          subtitle="Aproveite nossos pacotes e promoções exclusivas no Shaiff Cabeleireiros."
          align="center"
        />

        {activeCombos.length > 0 ? (
          <div className="mt-10">
            <PromotionGrid combos={activeCombos} />
          </div>
        ) : (
          <div className="mt-10 max-w-xl mx-auto bg-white p-8 rounded-2xl border border-brand-border/60 shadow-sm text-center space-y-6">
            <p className="text-brand-bodyText/80 leading-relaxed">
              Temos novas promoções e combos especiais toda semana! No momento, todas as vagas promocionais online estão preenchidas. Fale diretamente com a nossa equipe no WhatsApp para consultar as ofertas e horários disponíveis hoje.
            </p>
            <Button
              href={siteConfig.whatsappHref || undefined}
              external
              variant="primary"
              size="lg"
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              <span>Consultar promoções no WhatsApp</span>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
