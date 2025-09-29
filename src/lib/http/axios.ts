import axios, { type AxiosError } from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  timeout: 10_000,
});

// Example: attach auth token if you have one
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Optional: basic error normalization
export type ApiError = {
  status: number;
  message: string;
  details?: unknown;
};

export function toApiError(err: unknown): ApiError {
  const e = err as AxiosError<any>;
  return {
    status: e.response?.status ?? 0,
    message: e.response?.data?.message ?? e.message ?? 'Unknown error',
    details: e.response?.data,
  };
}
