import { useQuery } from '@tanstack/vue-query';
import type { UserType } from '@/api/types/user.types.ts';
import { getAuthUser } from '@/api/user.api.ts';

export const getAuthUserQuery = () => {
  return useQuery<UserType>({
    queryKey: ['auth-user'],
    queryFn: getAuthUser,
    throwOnError: true,
  });
};
