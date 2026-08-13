/**
 * Utility for resolving backend API endpoints dynamically.
 * In development, returns relative paths so Vite dev server proxies /api/ requests.
 * In production, prepends VITE_API_URL if configured.
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const getApiUrl = (endpoint) => {
  if (!API_BASE_URL) return endpoint;
  const base = API_BASE_URL.replace(/\/$/, '');
  const path = endpoint.replace(/^\//, '');
  return `${base}/${path}`;
};
