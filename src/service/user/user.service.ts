import { useQuery } from '@tanstack/vue-query';
import { getCurrentUserInfo } from '@/api/user/user.api.ts';
import type { UserType } from '@/api/user/user.types.ts';

export const getAuthUserQuery = () => {
  return useQuery<UserType>({
    queryKey: ['user-user'],
    queryFn: getCurrentUserInfo,
    throwOnError: true,
  });
};
