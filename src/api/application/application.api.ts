import type { ApplicationType } from '@/api/application/application.types.ts';
import { api } from '@/config/api.ts';

export const getApplications = async () => {
  const notifications = await api.get(`applications.json`).json<Record<string, ApplicationType>>();
  return Object.values(notifications);
};
