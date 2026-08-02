"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { StoreProduct } from "@/components/sections/StoreSection";
import { createProductAction, updateProductAction, uploadProductImageAction } from "@/app/admin/actions";
import { ImageUploader } from "./ImageUploader";
import { Button } from "@/components/ui/Button";
import { Save, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

interface ProductFormProps {
  initialData?: StoreProduct;
}

export function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();
  const isEditing = Boolean(initialData?.id);

  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    price: initialData?.price ? String(initialData.price) : "",
    image_url: initialData?.image_url || "",
    image_path: initialData?.image_url || "", // If no path, use URL or empty
    is_active: initialData?.is_active ?? true,
    sort_order: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (url: string, path: string) => {
    setFormData((prev) => ({
      ...prev,
      image_url: url,
      image_path: path,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!formData.name.trim()) {
      setError("O nome do produto é obrigatório.");
      return;
    }

    const price = parseFloat(formData.price);
    if (isNaN(price) || price < 0) {
      setError("Insira um preço válido (positivo).");
      return;
    }

    setIsSubmitting(true);

    try {
      let res;
      if (isEditing && initialData) {
        res = await updateProductAction(initialData.id, {
          name: formData.name,
          description: formData.description,
          price: formData.price,
          image_url: formData.image_url,
          image_path: formData.image_path,
          is_active: formData.is_active,
          sort_order: formData.sort_order,
        });
      } else {
        res = await createProductAction({
          name: formData.name,
          description: formData.description,
          price: formData.price,
          image_url: formData.image_url,
          image_path: formData.image_path,
          is_active: formData.is_active,
          sort_order: formData.sort_order,
        });
      }

      if (res.success) {
        setSuccessMessage(isEditing ? "Produto atualizado com sucesso!" : "Produto criado com sucesso!");
        router.refresh();
        setTimeout(() => {
          router.push("/admin/produtos");
        }, 1500);
      } else {
        setError(res.error || "Ocorreu um erro ao salvar o produto.");
      }
    } catch (err) {
      setError("Ocorreu uma falha inesperada.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
      {error && (
        <div role="alert" className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium">
          {error}
        </div>
      )}

      {successMessage && (
        <div role="status" className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
          {successMessage}
        </div>
      )}

      <div className="bg-brand-surface p-6 sm:p-8 rounded-2xl border border-brand-border/70 shadow-sm space-y-6">
        <h2 className="font-heading text-lg font-medium text-brand-heading border-b border-brand-border/40 pb-3">
          Informações Básicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-heading">
              Nome do Produto *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Máscara L'Oréal Absolut Repair"
              className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-sm text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-heading">
              Preço (R$) *
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              placeholder="Ex: 249.90"
              className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-sm text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-heading">
            Descrição do Produto
          </label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Detalhe os benefícios, indicação de uso ou tamanho da embalagem..."
            className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-sm text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-primary resize-y"
          />
        </div>

        <div className="pt-4">
          <ImageUploader
            currentUrl={formData.image_url}
            currentPath={formData.image_path}
            onImageChange={handleImageChange}
            uploadAction={uploadProductImageAction}
          />
        </div>

        <div className="pt-4 border-t border-brand-border/40 flex items-center gap-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={(e) => setFormData((prev) => ({ ...prev, is_active: e.target.checked }))}
              className="w-4 h-4 text-brand-primary border-brand-border rounded focus:ring-brand-primary"
            />
            <span className="text-sm font-semibold text-brand-dark">Ativo no Site</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              <span>Salvando...</span>
            </>
          ) : (
            <>
              <Save className="w-5 h-5 mr-2" />
              <span>Salvar Produto</span>
            </>
          )}
        </Button>

        <Link
          href="/admin/produtos"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-brand-border/70 text-brand-dark bg-white text-sm font-semibold shadow-sm hover:bg-stone-50 transition-colors w-full sm:w-auto text-center"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para lista</span>
        </Link>
      </div>
    </form>
  );
}
