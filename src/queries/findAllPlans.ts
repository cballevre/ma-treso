export async function findAllPlans(
    client: import('../lib/getSupabaseClient').SupabaseClient
  ) {
    const { data, error } = await client.auth.signInAnonymously()
    console.log('data', data)
    console.log('error', error)
    return await client
      .from('plans')
      .select(`
        id,
        title
      `)
  }
