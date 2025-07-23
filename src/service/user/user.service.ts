import { useQuery } from '@tanstack/vue-query';
import { getAuthUser } from '@/api/user/user.api.ts';
import type { UserType } from '@/api/user/user.types.ts';

export const getAuthUserQuery = () => {
  return useQuery<UserType>({
    queryKey: ['auth-user'],
    queryFn: getAuthUser,
    throwOnError: true,
  });
};
