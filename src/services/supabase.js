import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lbfljykaafwfbrgubfwg.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiZmxqeWthYWZ3ZmJyZ3ViZndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NDg5NDIsImV4cCI6MjA5MjAyNDk0Mn0.-S3ba4RKugETxpfpTrPF-pE1ttWpgMpc-e6mLi4eyRY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
