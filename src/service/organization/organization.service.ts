import { useQuery } from '@tanstack/vue-query';
import { getAuthUserOrganization } from '@/api/organization/organization.api.ts';
import type { OrganizationType } from '@/api/organization/organization.types.ts';

export const getAuthOrganizationQuery = () => {
  return useQuery<OrganizationType>({
    queryKey: ['user-organization'],
    queryFn: getAuthUserOrganization,
    throwOnError: true,
  });
};
