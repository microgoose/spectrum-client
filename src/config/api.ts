import ky from 'ky';

export const BASE_API_URL = 'http://localhost:3000';

export const api = ky.create({
  prefixUrl: BASE_API_URL,
});