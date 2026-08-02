import React from "react";
import { Metadata } from "next";
import { assertAdminUser } from "@/app/admin/actions";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { ProductForm } from "@/components/admin/ProductForm";

export const metadata: Metadata = {
  title: "Novo Produto | Painel Shaiff",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NewProductPage() {
  const user = await assertAdminUser();

  return (
    <div className="min-h-screen bg-brand-background flex flex-col font-sans">
      <AdminHeader userEmail={user.email} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-brand-heading">
            Cadastrar Novo Produto na Loja
          </h1>
          <p className="text-xs sm:text-sm text-brand-bodyText/80 mt-1">
            Preencha os campos para disponibilizar um novo produto com foto e valor na vitrine do site.
          </p>
        </div>

        <ProductForm />
      </main>
    </div>
  );
}
