export async function createPlan(
  client: import('../lib/getSupabaseClient').SupabaseClient,
  plan: {
    title: string;
  }
) {
  return await client
  .from('plans')
  .insert(plan)
  .select()
}
