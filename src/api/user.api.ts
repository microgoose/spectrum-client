import type { UserType } from '@/api/types/user.types.ts';
import { api } from '@/config/api.ts';

export const getAuthUser = async () => {
  const response = await api.get(`user.json`).json<Record<string, UserType>>();
  return response[1];
};
