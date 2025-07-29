import type { IdentityType } from '@/api/identity-type/identity-type.types.ts';
import { api } from '@/config/api.ts';

export const getIdentityTypes = async () => {
  return await api.get('identity_type').json<IdentityType[]>();
};

export const getIdentityTypeById = async (identityTypeId: number) => {
  return await api.get(`identity_type/${identityTypeId}.json`).json<IdentityType>();
};
