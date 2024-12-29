import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jxamvxyxyrncpqbslgfa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4YW12eHl4eXJuY3BxYnNsZ2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0ODE0MTYsImV4cCI6MjA1MTA1NzQxNn0.x0AUDQaO_yqNdO2pnhbVUAq3f_aIN8CSpgOl9A9n8Jo';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

//database password : gonebrassed69

