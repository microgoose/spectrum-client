import { api } from '@/config/api';

export type OrganizationResponse = {
  id: string;
  name: string;
  description: string;
};

export const getOrganizationInfo = async (organizationId: string) => {
  const response = await api.get(`/organization/${organizationId}`).json<OrganizationResponse>();
  return response;
};
