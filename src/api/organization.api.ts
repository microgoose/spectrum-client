import { api } from '@/config/api';

import type { ApiOrganization } from './organization-api.types';

export const getAuthUserOrganization = async () => {
  const response = await api.get(`organization.json`).json<Record<string, ApiOrganization>>();
  return response[1];
};

export const getOrganizationById = async (organizationId: string) => {
  const response = await api.get(`organization.json`).json<Record<string, ApiOrganization>>();
  return response[organizationId];
};
