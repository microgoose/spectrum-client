import { api } from '@/config/api';
import type { AuthToken, LoginData } from './auth.types';

export const auth = async (data: LoginData): Promise<AuthToken> => {
  return api.post('auth', { json: data }).json();
};
