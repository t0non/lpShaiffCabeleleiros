import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { createClient } from "@/lib/supabase/server";

export interface StoreProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_active: boolean;
}

// Fallback high-end products to display if Supabase is empty
const defaultProducts: StoreProduct[] = [
  {
    id: "default-1",
    name: "L'Oréal Professionnel Absolut Repair Gold Quinoa Mask",
    description: "Máscara de reconstrução instantânea para cabelos danificados. Reconstrói a fibra capilar trazendo brilho e maciez.",
    price: 249.90,
    image_url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='%23FBEDDF'><rect width='400' height='300' fill='%23FAF6F0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23905A24'>L'Oréal Absolut Repair</text></svg>",
    is_active: true
  },
  {
    id: "default-2",
    name: "Joico K-Pak Color Therapy Luster Lock",
    description: "Máscara de tratamento brilho instantâneo e proteção da cor para cabelos coloridos e danificados.",
    price: 289.00,
    image_url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='%23FBEDDF'><rect width='400' height='300' fill='%23FAF6F0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23905A24'>Joico Luster Lock</text></svg>",
    is_active: true
  },
  {
    id: "default-3",
    name: "Wella Professionals Fusion Mask",
    description: "Máscara reconstrutora indicada para cabelos danificados. Ajuda a recuperar a fibra capilar e previne a quebra.",
    price: 219.90,
    image_url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='%23FBEDDF'><rect width='400' height='300' fill='%23FAF6F0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23905A24'>Wella Fusion</text></svg>",
    is_active: true
  }
];

export async function StoreSection() {
  let products: StoreProduct[] = [];

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("store_products")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      products = data as StoreProduct[];
    } else {
      products = defaultProducts;
    }
  } catch (err) {
    products = defaultProducts;
  }

  return (
    <Section id="loja" variant="muted" padding="default" className="border-b border-brand-border/40 bg-[#FAF6F0]">
      <Container size="large">
        <SectionHeading
          kicker="NOSSA LOJA"
          title="Leve o cuidado do Shaiff para a sua casa"
          subtitle="Temos uma seleção exclusiva dos melhores produtos capilares e finalizadores. Consulte valores e reserve pelo WhatsApp para retirar no salão."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-brand-border/60 shadow-sm flex flex-col justify-between hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div className="flex flex-col flex-1">
                <div className="relative w-full aspect-[4/3] bg-brand-muted overflow-hidden">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle brand tag overlay */}
                  <div className="absolute top-4 right-4 bg-brand-primary text-brand-cream text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-xs">
                    Original
                  </div>
                </div>

                <div className="p-6 pb-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand-dark leading-snug mb-2 group-hover:text-brand-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-brand-bodyText/80 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between">
                    <span className="text-xs text-brand-bodyText/60 font-medium">Valor</span>
                    <span className="text-lg font-bold text-brand-primary font-mono">
                      {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Button
                  href={`https://wa.me/553135640123?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20ou%20saber%20mais%20detalhes%20sobre%20o%20produto%20${encodeURIComponent(product.name)}%20no%20valor%20de%20R$%20${product.price.toFixed(2)}.`}
                  external
                  variant="outline"
                  size="md"
                  className="w-full border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2 shrink-0" />
                  <span>Reservar no WhatsApp</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
