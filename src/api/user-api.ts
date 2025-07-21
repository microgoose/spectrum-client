import { api } from '@/config/api';

export type UserResponse = {
  id: string;
  name: string;
  email: string;
  fio: string;
  phone: string;
};

export const getUserInfo = async (userId: string) => {
  const response = await api.get(`/user/${userId}`).json<UserResponse>();
  return response;
};
