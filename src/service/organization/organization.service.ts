import { useQuery } from '@tanstack/vue-query';
import { getAuthUserOrganization } from '@/api/organization.api.ts';
import type { OrganizationType } from '@/api/types/organization.types.ts';

export const getAuthOrganizationQuery = () => {
  return useQuery<OrganizationType>({
    queryKey: ['auth-organization'],
    queryFn: getAuthUserOrganization,
    throwOnError: true,
  });
};
