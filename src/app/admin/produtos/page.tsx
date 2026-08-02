import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { assertAdminUser } from "@/app/admin/actions";
import { StoreProduct } from "@/components/sections/StoreSection";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { ProductTable } from "@/components/admin/ProductTable";
import { Plus, Tag, CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Painel de Produtos | Shaiff Cabeleireiros",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminProductsPage() {
  const user = await assertAdminUser();

  const supabase = await createClient();
  const { data: rawProducts } = await supabase
    .from("store_products")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const products: StoreProduct[] = (rawProducts as StoreProduct[]) || [];

  const total = products.length;
  const active = products.filter((p) => p.is_active).length;
  const inactive = total - active;

  return (
    <div className="min-h-screen bg-brand-background flex flex-col font-sans">
      <AdminHeader userEmail={user.email} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-border/60">
          <div>
            <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-heading">
              Produtos da Loja
            </h1>
            <p className="text-xs sm:text-sm text-brand-bodyText/80 mt-1">
              Cadastre e gerencie fotos e valores dos produtos disponíveis para venda no salão.
            </p>
          </div>

          <div>
            <Link
              href="/admin/produtos/novo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary text-white text-xs font-semibold shadow hover:bg-brand-primaryHover transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Novo produto</span>
            </Link>
          </div>
        </div>

        {/* Summary Stat Cards */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-brand-surface p-5 rounded-xl border border-brand-border/70 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-muted text-brand-primary flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-brand-heading block">
                {total}
              </span>
              <span className="text-xs text-brand-bodyText/70 font-medium">Total de Produtos</span>
            </div>
          </div>

          <div className="bg-brand-surface p-5 rounded-xl border border-brand-border/70 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-emerald-800 block">
                {active}
              </span>
              <span className="text-xs text-brand-bodyText/70 font-medium">Ativos no Site</span>
            </div>
          </div>

          <div className="bg-brand-surface p-5 rounded-xl border border-brand-border/70 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
              <XCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-stone-800 block">
                {inactive}
              </span>
              <span className="text-xs text-brand-bodyText/70 font-medium">Rascunhos</span>
            </div>
          </div>
        </div>

        {/* Products List / Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-medium text-brand-heading">
              Listagem de Produtos
            </h2>
            <span className="text-xs text-brand-bodyText/60">
              As alterações são refletidas instantaneamente na vitrine do site público.
            </span>
          </div>

          <ProductTable products={products} />
        </div>
      </main>
    </div>
  );
}
