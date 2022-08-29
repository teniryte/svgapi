import { Client } from './client';

export async function search(
  domainKey: string,
  term: string,
  page = 1,
  limit = 20
) {
  const client = create(domainKey, limit);
  const result = await client.search(term, page, limit);
  return result;
}

export function create(domainKey: string, limit = 20) {
  const client = new Client(domainKey, limit);
  return client;
}
