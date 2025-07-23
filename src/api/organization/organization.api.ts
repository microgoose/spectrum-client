import type { OrganizationType } from '@/api/organization/organization.types.ts';
import { api } from '@/config/api.ts';

export const getAuthUserOrganization = async () => {
  const response = await api.get(`organization.json`).json<Record<string, OrganizationType>>();
  return response[1];
};

export const getOrganizationById = async (organizationId: string) => {
  const response = await api.get(`organization.json`).json<Record<string, OrganizationType>>();
  return response[organizationId];
};
