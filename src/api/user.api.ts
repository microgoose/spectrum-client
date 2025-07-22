import { api } from '@/config/api';

import type { ApiUser } from './user-api.types';

export const getAuthUser = async () => {
  const response = await api.get(`user.json`).json<Record<string, ApiUser>>();
  return response[1];
};
