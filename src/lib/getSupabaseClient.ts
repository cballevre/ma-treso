import { createClient } from '@supabase/supabase-js'


export type SupabaseClient = ReturnType<typeof createClient<import('../../types_db.ts').Database>>;
let client: SupabaseClient | undefined;

export function getSupabaseClient() {
  if (client) {
    return client;
  }

  const supabaseUrl = process.env.FARM_SUPABASE_URL;
  const supabaseKey = process.env.FARM_SUPABASE_KEY;

  if(!supabaseUrl) {
    throw new Error('Supabase URL was not provided');
  }

  if(!supabaseKey) {
    throw new Error('Supabase key was not provided');
  }


  client = createClient(supabaseUrl, supabaseKey)

  console.log('client', client);

  return client;
}
