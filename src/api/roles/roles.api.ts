import type {
  UpdateUserRolesRequest,
  UpdateUserRolesResponse,
  UserRole,
  UserRolesInfo,
} from '@/api/roles/roles.types.ts';
import { api } from '@/config/api.ts';

export const getAllRoles = async () => {
  return await api.get('spectrum-core/userroles/allroles.json').json<UserRole[]>();
};

export const getOrganizationUserRoles = async () => {
  return await api.get('spectrum-core/userroles.json').json<UserRolesInfo[]>();
};

export const getUserRolesById = async (userId: number) => {
  return await api.get(`spectrum-core/userroles/${userId}.json`).json<UserRolesInfo>();
};

export const updateUserRoles = async (data: UpdateUserRolesRequest) => {
  //TODO dont work
  return await api.put('spectrum-core/userroles.json', {
    json: data,
  }).json<UpdateUserRolesResponse>();
};
