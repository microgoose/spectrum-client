import { api } from '@/config/api.ts';
import type { AuthToken, LoginData } from '@/model/auth/auth.types.ts';

export const auth = async (data: LoginData): Promise<AuthToken> => {
  return api.post('auth', { json: data }).json();
};
