-- ==============================================================================
-- Migration: Store Products & Storage Policies
-- Database: Supabase PostgreSQL (Timezone: America/Sao_Paulo)
-- ==============================================================================

-- 1. Table: store_products
CREATE TABLE IF NOT EXISTS public.store_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
  image_url TEXT,
  image_path TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Indices for fast querying
CREATE INDEX IF NOT EXISTS idx_store_products_active 
  ON public.store_products (is_active, sort_order);

-- Auto-update updated_at timestamp trigger
DROP TRIGGER IF EXISTS set_store_products_updated_at ON public.store_products;
CREATE TRIGGER set_store_products_updated_at
  BEFORE UPDATE ON public.store_products
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Enable RLS on store_products
ALTER TABLE public.store_products ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public SELECT (Visitors can view active products)
CREATE POLICY "Public can view active store products"
  ON public.store_products
  FOR SELECT
  TO public
  USING (is_active = true);

-- Policy 2: Admin SELECT (Authenticated admins can view ALL products)
CREATE POLICY "Admins can view all store products"
  ON public.store_products
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM public.admin_users));

-- Policy 3: Admin INSERT
CREATE POLICY "Admins can insert store products"
  ON public.store_products
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (SELECT id FROM public.admin_users));

-- Policy 4: Admin UPDATE
CREATE POLICY "Admins can update store products"
  ON public.store_products
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM public.admin_users))
  WITH CHECK (auth.uid() IN (SELECT id FROM public.admin_users));

-- Policy 5: Admin DELETE
CREATE POLICY "Admins can delete store products"
  ON public.store_products
  FOR DELETE
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM public.admin_users));

-- 2. Storage Bucket: store-products
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'store-products',
  'store-products',
  true,
  5242880, -- 5 MB
  ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp'];

-- Storage RLS Policies
CREATE POLICY "Public Read Access for store-products"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'store-products');

CREATE POLICY "Admin Insert for store-products"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'store-products'
    AND auth.uid() IN (SELECT id FROM public.admin_users)
  );

CREATE POLICY "Admin Update for store-products"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'store-products'
    AND auth.uid() IN (SELECT id FROM public.admin_users)
  );

CREATE POLICY "Admin Delete for store-products"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'store-products'
    AND auth.uid() IN (SELECT id FROM public.admin_users)
  );
