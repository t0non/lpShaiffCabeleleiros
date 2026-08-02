"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StoreProduct } from "@/components/sections/StoreSection";
import { ConfirmDialog } from "./ConfirmDialog";
import { deleteProductAction } from "@/app/admin/actions";
import {
  Edit3,
  Trash2,
  Eye,
  Power,
  Loader2,
} from "lucide-react";

interface ProductTableProps {
  products: StoreProduct[];
}

export function ProductTable({ products }: ProductTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const handleDeleteConfirm = async () => {
    if (!deletingId) return;
    setIsDeleting(true);
    setActionError(null);

    try {
      const res = await deleteProductAction(deletingId);
      if (!res.success) {
        setActionError(res.error || "Erro ao excluir produto.");
      }
    } catch {
      setActionError("Falha na comunicação com o servidor.");
    } finally {
      setIsDeleting(false);
      setDeletingId(null);
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);
  };

  if (!products || products.length === 0) {
    return (
      <div className="bg-brand-surface rounded-xl border border-brand-border/70 p-12 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center mx-auto text-brand-primary">
          <Eye className="w-6 h-6" />
        </div>
        <h3 className="font-heading text-lg font-medium text-brand-heading">
          Nenhum produto cadastrado na Loja
        </h3>
        <p className="text-xs text-brand-bodyText/80 max-w-sm mx-auto">
          Clique no botão &quot;Novo produto&quot; acima para cadastrar seu primeiro item.
        </p>
      </div>
    );
  }

  return (
    <>
      {actionError && (
        <div role="alert" className="p-4 mb-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
          {actionError}
        </div>
      )}

      {/* Desktop Table View */}
      <div className="hidden md:block bg-brand-surface rounded-xl border border-brand-border/70 shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs text-brand-bodyText border-collapse">
          <thead>
            <tr className="bg-brand-muted/50 border-b border-brand-border/50 text-brand-heading font-semibold uppercase tracking-wider text-[11px]">
              <th className="py-3.5 px-4">Produto</th>
              <th className="py-3.5 px-4">Valor</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border/40">
            {products.map((product) => {
              const isLoadingThis = loadingId === product.id;

              return (
                <tr key={product.id} className="hover:bg-brand-cream/20 transition-colors">
                  {/* Thumbnail & Title */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-brand-muted overflow-hidden shrink-0 border border-brand-border/40">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] text-brand-bodyText/40">
                            Sem Foto
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="font-semibold text-brand-heading text-sm block">
                          {product.name}
                        </span>
                        <span className="text-[11px] text-brand-bodyText/60 truncate max-w-xs block">
                          {product.description}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-3 px-4 font-mono font-medium">
                    <span className="text-brand-primary text-sm font-semibold">
                      {formatCurrency(product.price)}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                      product.is_active
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-stone-100 text-stone-600 border border-stone-200"
                    }`}>
                      {product.is_active ? "Ativo" : "Rascunho"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {/* Edit */}
                      <Link
                        href={`/admin/produtos/${product.id}/editar`}
                        className="p-1.5 rounded-md bg-brand-muted text-brand-primary hover:bg-brand-border/50 transition-colors"
                        title="Editar produto"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Link>

                      {/* Delete */}
                      <button
                        type="button"
                        disabled={isLoadingThis}
                        onClick={() => setDeletingId(product.id)}
                        className="p-1.5 rounded-md bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                        title="Excluir produto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-brand-surface p-4 rounded-xl border border-brand-border/70 shadow-sm space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg bg-brand-muted overflow-hidden shrink-0 border border-brand-border/40">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] text-brand-bodyText/40">
                    Sem Foto
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-brand-heading text-sm truncate">
                    {product.name}
                  </h4>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    product.is_active
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-stone-100 text-stone-600"
                  }`}>
                    {product.is_active ? "Ativo" : "Rascunho"}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-brand-primary block mt-0.5">
                  {formatCurrency(product.price)}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-brand-border/40 flex items-center justify-end gap-2 text-xs">
              <Link
                href={`/admin/produtos/${product.id}/editar`}
                className="px-2.5 py-1 rounded bg-brand-primary text-white text-xs font-semibold"
              >
                Editar
              </Link>
              <button
                type="button"
                onClick={() => setDeletingId(product.id)}
                className="p-1 rounded bg-rose-50 text-rose-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <ConfirmDialog
        isOpen={Boolean(deletingId)}
        title="Excluir Produto da Loja"
        message="Tem certeza que deseja excluir este produto? Esta ação não poderá ser desfeita."
        confirmLabel="Sim, excluir produto"
        cancelLabel="Cancelar"
        isConfirming={isDeleting}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeletingId(null)}
      />
    </>
  );
}
