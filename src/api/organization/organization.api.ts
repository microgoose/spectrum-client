import type { OrganizationType } from '@/api/organization/organization.types.ts';
import { api } from '@/config/api.ts';

export const getCurrentUserOrganization = async () => {
  return await api.get('spectrum-core/organization.json').json<OrganizationType>();
};

export const getOrganizationById = async (organizationId: number) => {
  return await api
    .get(`spectrum-core/organization/${organizationId}.json`)
    .json<OrganizationType>();
};
