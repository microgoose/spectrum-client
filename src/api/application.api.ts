import { api } from '@/config/api.ts';
import type { ApplicationType } from '@/model/application/application.types.ts';

export const getApplications = async () => {
  return api.get(`applications`).json<ApplicationType[]>();
};
