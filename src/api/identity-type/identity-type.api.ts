import type { IdentityType } from '@/api/identity-type/identity-type.types.ts';
import { api } from '@/config/api.ts';

export const getIdentityTypes = async () => {
  return api.get('identity_type').json<IdentityType[]>();
};

export const getIdentityTypeById = async (identityTypeId: number) => {
  return api.get(`identity_type/${identityTypeId}`).json<IdentityType>();
};
