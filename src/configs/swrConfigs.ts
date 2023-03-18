import { ApiService } from '@/api/apiInstance';

const API = new ApiService();

export const fetcher = (url: string) => API.get(url).then((res) => res.data);

export const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  revalidateOnReconnect: false,
};
