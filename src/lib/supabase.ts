import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	const msg = 'Missing environment variables: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.\n' +
		'Create a .env file at the project root with these values (see README).';
	// Log a clear message to the console for development
	// and throw so the developer notices the misconfiguration early.
	console.error(msg);
	throw new Error(msg);
}

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
