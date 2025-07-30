import type { NotificationType } from '@/api/notification/notification.types.ts';
import { api } from '@/config/api.ts';

export const getNotifications = async () => {
  return api.get(`notification`).json<NotificationType[]>();
};

export const getNotification = async (id: string) => {
  return api.get(`notification/${id}`).json<NotificationType>();
};
