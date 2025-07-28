import { useQuery } from '@tanstack/vue-query';
import { getCurrentUserOrganization } from '@/api/organization/organization.api.ts';
import type { OrganizationType } from '@/api/organization/organization.types.ts';

export const getAuthOrganizationQuery = () => {
  return useQuery<OrganizationType>({
    queryKey: ['user-organization'],
    queryFn: getCurrentUserOrganization,
    throwOnError: true,
  });
};
