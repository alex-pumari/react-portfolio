interface FetchOptions {
  headers?: Record<string, string>,
}

export async function fetchJson<Type>(url: string, options: FetchOptions = {}): Promise<Type> {
  const response = await fetch(url, options)

  if (!response.ok) throw new Error(`Request failed: ${response.status}`)

  return response.json() as Promise<Type>
}
