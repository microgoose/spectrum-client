export interface UserRole {
  id: number;
  name: string;
}

export interface UserRolesInfo {
  userId: number;
  login: string;
  roles: string[];
}

export interface UpdateUserRolesRequest {
  userId: number | string;
  roles: string[];
}

export interface UpdateUserRolesResponse {
  status: number;
  message: string;
  timestamp: string;
}
