import type { NotificationType } from '@/api/types/notification.types.ts';
import { api } from '@/config/api.ts';

export const getNotifications = () => {
  return api.get(`notification.json`).json<Record<string, NotificationType>>();
};

export const getNotification = async (id: string) => {
  const notifications = await getNotifications();
  return notifications[id];
};
