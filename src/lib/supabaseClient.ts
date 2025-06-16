import { createClient } from '@supabase/supabase-js'; // ✅ THIS is the missing line

const supabaseUrl = 'https://fnsrdflqlkmjznvrulcu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuc3JkZmxxbGttanpudnJ1bGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTk2NTQsImV4cCI6MjA2NTU5NTY1NH0.AQ_ayPAO_Qt9aK-52QuX_eYgLFN1KSlwV2vvzKXeZbk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
