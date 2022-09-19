import { FetchRequest } from './fetch.interface';
import { fetchRequest } from './fetch.service';
import { mountHeaders } from './header.service';

const baseApi = import.meta.env.VITE_API_BASE_URL;

export const callApiBaseAsync = async (endpoint: RequestInfo, call: FetchRequest) => {
  const { method, body, tokenCustom, headers } = call;

  const requestHeader = mountHeaders({ tokenCustom, headers });

  const { data } = await fetchRequest({
    endpoint: `${baseApi}${endpoint}`,
    headers: requestHeader,
    method,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (data?.statusCode >= 300) {
    throw new Error('default', data.message);
  }

  return data;
};
