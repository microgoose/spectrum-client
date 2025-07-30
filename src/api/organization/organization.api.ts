import type { OrganizationType } from '@/api/organization/organization.types.ts';
import { api } from '@/config/api.ts';

export const getCurrentUserOrganization = async () => {
  return api.get('organization').json<OrganizationType>();
};

export const getOrganizationById = async (organizationId: number) => {
  return api.get(`organization/${organizationId}`).json<OrganizationType>();
};
