import { api } from '@/config/api.ts';
import type { UserType } from '@/model/user/user.types.ts';

export const getCurrentUserInfo = async () => {
  return api.get('user').json<UserType>();
};
