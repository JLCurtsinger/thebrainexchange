// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pkmrzlbfbcjcnhxdsjud.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrbXJ6bGJmYmNqY25oeGRzanVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMDgyODEsImV4cCI6MjA1MTg4NDI4MX0.SA-8JR-n7J22PMd_uxO7YvynQ54awo5jMCnUVcY9S8I";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);