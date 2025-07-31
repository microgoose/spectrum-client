import { useQuery } from '@tanstack/vue-query';
import { getCurrentUserInfo } from '@/api/user.api.ts';
import type { UserType } from '@/model/user/user.types.ts';

export const getAuthUserQuery = () => {
  return useQuery<UserType>({
    queryKey: ['user-user'],
    queryFn: getCurrentUserInfo,
    throwOnError: true,
  });
};
