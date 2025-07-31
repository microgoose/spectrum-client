import { api } from '@/config/api.ts';
import type { NotificationType } from '@/model/notification/notification.types.ts';

export const getNotifications = async () => {
  return api.get(`notification`).json<NotificationType[]>();
};

export const getNotification = async (id: string) => {
  return api.get(`notification/${id}`).json<NotificationType>();
};
