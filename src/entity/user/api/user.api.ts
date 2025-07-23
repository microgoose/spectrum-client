import { api } from '@/config/api.ts';
import type { User } from '@/entity/user/model/user.types.ts';

export const getAuthUser = async () => {
  const response = await api.get(`user.json`).json<Record<string, User>>();
  return response[1];
};
