
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Product {
  id: string;
  name: string;
  category: string;
  image_url: string | null;
  description: string | null;
  rating: number;
  in_stock: boolean;
  created_at: string;
  updated_at: string;
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }

      return data as Product[];
    },
  });
};
