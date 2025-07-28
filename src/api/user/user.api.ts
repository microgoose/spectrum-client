import type { UserType } from '@/api/user/user.types.ts';
import { api } from '@/config/api.ts';

export const getCurrentUserInfo = async () => {
  return await api.get('spectrum-core/user.json').json<UserType>();
};
