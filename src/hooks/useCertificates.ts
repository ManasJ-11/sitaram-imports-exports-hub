
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Certificate {
  id: string;
  name: string;
  type: string;
  issuer: string;
  issue_date: string;
  expiry_date: string;
  status: string;
  document_url: string | null;
  created_at: string;
  updated_at: string;
}

export const useCertificates = () => {
  return useQuery({
    queryKey: ['certificates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching certificates:', error);
        throw error;
      }

      return data as Certificate[];
    },
  });
};
