export async function getByIdPlan(
  client: import('../lib/getSupabaseClient').SupabaseClient,
  id: string
) {
  return await client
    .from('plans')
    .select(`
      id,
      title
    `)
    .eq('id', id)
    .maybeSingle()
}
