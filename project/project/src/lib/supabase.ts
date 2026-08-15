import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Document = {
  id: string;
  title: string;
  description: string;
  category: string;
  price_inr: number;
  price_usd: number;
  pages: number | null;
  file_type: string;
  is_featured: boolean;
  preview_text: string | null;
  tags: string[] | null;
  created_at: string;
};

export type PurchaseRequest = {
  document_id: string;
  full_name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
};
