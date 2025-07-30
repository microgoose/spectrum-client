import type { UserType } from '@/api/user/user.types.ts';
import { api } from '@/config/api.ts';

export const getCurrentUserInfo = async () => {
  return api.get('user').json<UserType>();
};
