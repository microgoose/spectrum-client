import type { NotificationType } from '@/api/notification/notification.types.ts';
import { api } from '@/config/api.ts';

export const getNotifications = async () => {
  const notifications = await api.get(`notification.json`).json<Record<string, NotificationType>>();
  return Object.values(notifications);
};

export const getNotification = async (id: string) => {
  const notifications = await api.get(`notification.json`).json<Record<string, NotificationType>>();

  return notifications[id];
};
