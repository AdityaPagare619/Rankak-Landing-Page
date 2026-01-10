
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// SECURITY NOTE:
// It is safe to expose the VITE_SUPABASE_ANON_KEY on the client side.
// This key is restricted by Row Level Security (RLS) policies on the Supabase database.
// It allows ONLY the actions we explicitly permit (e.g., INSERT for new users), 
// and prevents unauthorized access (e.g., SELECT/DELETE on user data).

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Check .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
