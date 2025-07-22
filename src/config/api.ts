import ky from 'ky';

export const BASE_API_URL = 'http://localhost:5173';

export const api = ky.create({
  prefixUrl: BASE_API_URL,
});
