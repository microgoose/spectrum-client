import { api } from '@/config/api.ts';
import type { OrganizationType } from '@/model/organization/organization.types.ts';

export const getAuthUserOrganization = async () => {
  return api.get('organization').json<OrganizationType>();
};

export const getOrganizationById = async (organizationId: number) => {
  return api.get(`organization/${organizationId}`).json<OrganizationType>();
};
