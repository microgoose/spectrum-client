import { useQuery } from '@tanstack/vue-query';
import { getNotification, getNotifications } from '@/api/notification/notification.api.ts';
import type { NotificationType } from '@/api/notification/notification.types.ts';

export const getNotificationQuery = (id: string) => {
  return useQuery<NotificationType>({
    queryKey: ['notification-' + id],
    queryFn: () => getNotification(id),
    throwOnError: true,
  });
};

export const getNotificationsQuery = () => {
  return useQuery<NotificationType[]>({
    queryKey: ['notifications'],
    queryFn: getNotifications,
    throwOnError: true,
  });
};
