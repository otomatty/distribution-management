import { Hono } from 'hono';
import { createClient } from '@supabase/supabase-js';

const app = new Hono();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error('Supabase URL and Key must be provided as environment variables.');
}

const supabaseClient = createClient(supabaseUrl, supabaseKey);

app.post('/register', async (c) => {
	const { email, password } = await c.req.json();
	const { data, error } = await supabaseClient.auth.signUp({ email, password });

	if (error) {
		return c.json({ error: error.message }, 400);
	}

	return c.json({ user: data.user });
});

export default app;
