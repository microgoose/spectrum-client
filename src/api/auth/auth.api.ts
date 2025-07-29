import { api } from '@/config/api';
import type { LoginData, AuthToken } from './auth.types';

export const auth = async (data: LoginData): Promise<AuthToken> => {
  return await api.post('auth', { json: data }).json();
};
