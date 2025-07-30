import type {
  UpdateUserRolesRequest,
  UpdateUserRolesResponse,
  UserRole,
  UserRolesInfo,
} from '@/api/roles/roles.types.ts';
import { api } from '@/config/api.ts';

export const getAllRoles = async () => {
  return api.get('userroles/allroles').json<UserRole[]>();
};

export const getOrganizationUserRoles = async () => {
  return api.get('userroles').json<UserRolesInfo[]>();
};

export const getUserRolesById = async (userId: number) => {
  return api.get(`userroles/${userId}`).json<UserRolesInfo>();
};

export const updateUserRoles = async (data: UpdateUserRolesRequest) => {
  return api.put('userroles', { json: data }).json<UpdateUserRolesResponse>();
};
