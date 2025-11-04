import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://jfrpgyithteyzfppjgxz.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcnBneWl0aHRleXpmcHBqZ3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2MzI5MjgsImV4cCI6MjA3NzIwODkyOH0.rC9AY2FEZqkZrLjQaEpEX-TA0Cocb2XbhADO9lXOnW8";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("🔍 Supabase URL:", supabaseUrl);
console.log("🔍 Supabase Key:", supabaseAnonKey ? "Loaded ✅" : "Missing ❌");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
