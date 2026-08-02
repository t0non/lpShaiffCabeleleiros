import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { assertAdminUser } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/server";
import { StoreProduct } from "@/components/sections/StoreSection";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { ProductForm } from "@/components/admin/ProductForm";

export const metadata: Metadata = {
  title: "Editar Produto | Painel Shaiff",
  robots: {
    index: false,
    follow: false,
  },
};

interface EditProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const user = await assertAdminUser();
  const { id } = await params;

  const supabase = await createClient();
  const { data: product, error } = await supabase
    .from("store_products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-background flex flex-col font-sans">
      <AdminHeader userEmail={user.email} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-brand-heading">
            Editar Produto da Loja
          </h1>
          <p className="text-xs sm:text-sm text-brand-bodyText/80 mt-1">
            Atualize as informações, fotos ou valores deste produto.
          </p>
        </div>

        <ProductForm initialData={product as StoreProduct} />
      </main>
    </div>
  );
}
