import { api } from '@/config/api.ts';
import type { Organization } from '@/entity/organization/model/organization.types.ts';

export const getAuthUserOrganization = async () => {
  const response = await api.get(`organization.json`).json<Record<string, Organization>>();
  return response[1];
};

export const getOrganizationById = async (organizationId: string) => {
  const response = await api.get(`organization.json`).json<Record<string, Organization>>();
  return response[organizationId];
};
