import type { ApplicationType } from '@/api/application/application.types.ts';
import { api } from '@/config/api.ts';

export const getApplications = async () => {
  return api.get(`applications`).json<ApplicationType[]>();
};
