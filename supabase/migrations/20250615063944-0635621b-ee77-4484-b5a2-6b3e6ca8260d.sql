
-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  description TEXT,
  rating DECIMAL(2,1) DEFAULT 4.5,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create certificates table
CREATE TABLE public.certificates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  issuer TEXT NOT NULL,
  issue_date DATE NOT NULL,
  expiry_date DATE NOT NULL,
  status TEXT DEFAULT 'Active',
  document_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (no authentication required for viewing)
CREATE POLICY "Anyone can view products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Anyone can view certificates" ON public.certificates FOR SELECT USING (true);

-- Create storage buckets for images and documents
INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('certificate-docs', 'certificate-docs', true);

-- Create storage policies for public access
CREATE POLICY "Anyone can view product images" ON storage.objects FOR SELECT USING (bucket_id = 'product-images');
CREATE POLICY "Anyone can view certificate documents" ON storage.objects FOR SELECT USING (bucket_id = 'certificate-docs');

-- Enable realtime for tables
ALTER TABLE public.products REPLICA IDENTITY FULL;
ALTER TABLE public.certificates REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.products;
ALTER PUBLICATION supabase_realtime ADD TABLE public.certificates;

-- Insert sample data for products
INSERT INTO public.products (name, category, image_url, description, rating, in_stock) VALUES 
('Premium Indian Spices', 'Quality Export', 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400', 'Premium spices including turmeric, cardamom, and garam masala from traditional sources', 4.9, true),
('Traditional Textiles', 'Heritage Export', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400', 'Handwoven fabrics, silk sarees, and traditional garments with authentic craftsmanship', 4.8, true),
('Ayurvedic Products', 'Wellness Export', 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400', 'Traditional ayurvedic medicines and wellness products from ancient wisdom', 4.9, true),
('Indian Handicrafts', 'Artisan Crafts', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400', 'Handcrafted items, pottery, and traditional artwork from skilled artisans', 4.7, true),
('Organic Food Products', 'Premium Nutrition', 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400', 'Organic rice, pulses, and traditional food items with authentic taste', 4.8, true),
('Indian Tea & Coffee', 'Premium Beverages', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', 'Premium Darjeeling tea, Assam tea, and traditional Indian coffee', 4.9, true);

-- Insert sample data for certificates
INSERT INTO public.certificates (name, type, issuer, issue_date, expiry_date, status) VALUES 
('Export License', 'Government Authorization', 'Directorate General of Foreign Trade', '2023-01-15', '2028-01-15', 'Active'),
('ISO 9001:2015', 'Quality Management', 'International Organization for Standardization', '2022-06-10', '2027-06-10', 'Active'),
('APEDA Registration', 'Agricultural Export', 'Agricultural and Processed Food Products Export Development Authority', '2023-03-20', '2028-03-20', 'Active'),
('GST Registration', 'Tax Compliance', 'GST Council', '2022-04-01', '2025-04-01', 'Active'),
('FSSAI License', 'Food Safety', 'Food Safety and Standards Authority of India', '2023-02-14', '2026-02-14', 'Active'),
('Spices Board Certification', 'Spice Quality', 'Spices Board of India', '2022-11-05', '2025-11-05', 'Active');
