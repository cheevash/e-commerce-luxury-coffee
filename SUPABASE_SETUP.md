# Supabase Setup Guide for Aura Luxury Coffee

Follow these steps to configure your Supabase backend for the application.

## 1. Create a New Project

1. Go to [Supabase](https://supabase.com/) and create a new project.
2. Once created, go to **Project Settings -> API**.
3. Copy the `Project URL` and `anon public` key.
4. Rename `.env.example` in this repository to `.env.local` and paste those values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

## 2. Execute SQL Schema

Go to the **SQL Editor** in your Supabase dashboard and run the following script to create the required tables and insert mock data.

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Products Table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  image_url TEXT,
  rating NUMERIC(3, 1) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Recommendations Table
CREATE TABLE recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  recommended_product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  UNIQUE(product_id, recommended_product_id)
);

-- Turn on Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE recommendations ENABLE ROW LEVEL SECURITY;

-- Create Policies to allow public read access (No authentication required to view products)
CREATE POLICY "Allow public read access to products"
  ON products FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to recommendations"
  ON recommendations FOR SELECT
  USING (true);

-- ==========================================
-- INSERT MOCK DATA
-- ==========================================

-- Insert 4 Luxury Coffee Products
INSERT INTO products (id, name, description, price, image_url, rating) VALUES
  ('ed38a9d1-3b5f-4f32-8419-1582e0e1a123', 'Obsidian Black Reserve', 'A highly exclusive micro-lot from the volcanic soils of Panama. Features deep notes of dark chocolate, black cherry, and a hint of smoked vanilla.', 125.00, 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=600', 4.9),
  ('b1f8c12a-8eb1-4d32-9c1a-5b1e905de456', 'Golden Crema Blend', 'Our signature espresso blend crafted for the perfect honey-hued crema. Tasting notes of toasted hazelnut, caramel, and bright citrus.', 85.00, 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600', 4.8),
  ('c4a1d82b-5e92-4f11-8a9d-3b5e40e2a789', 'Midnight Ethiope', 'Sourced selectively from Yirgacheffe, this washed processed coffee reveals delicate floral aromatics of jasmine, bergamot, and wild honey.', 95.00, 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600', 4.9),
  ('d8e2f14a-7c5b-4d99-8b2e-6a3d5e90b123', 'Royal Geisha Drop', 'The pinnacle of coffee royalty. This rare Geisha varietal offers an unforgettably sweet and complex flavor profile with notes of peach blossom and white tea.', 250.00, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600', 5.0);

-- Notice: Map recommendations manually based on the IDs above (Optional: modify ids in your dash if needed)
```
