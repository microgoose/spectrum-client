import { defineStore } from 'pinia';

import { t } from '@/config/localization';
import { Routes } from '@/config/router';
import { getRoutePath } from '@/service/route.service';

export interface SidebarItemType {
  label: string;
  to: string;
  icon: string;
}

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    items: [
      { label: t('sidebar.main'), to: getRoutePath(Routes.HOME), icon: 'pi pi-home' },
      {
        label: t('sidebar.notifications'),
        to: getRoutePath(Routes.NOTIFICATIONS),
        icon: 'pi pi-bell',
      },
      { label: t('sidebar.contacts'), to: getRoutePath(Routes.CONTACTS), icon: 'pi pi-users' },
      { label: t('sidebar.documents'), to: getRoutePath(Routes.DOCUMENTS), icon: 'pi pi-file' },
      {
        label: t('sidebar.clearingAccounts'),
        to: getRoutePath(Routes.CLEARING_ACCOUNTS),
        icon: 'pi pi-credit-card',
      },
      { label: t('sidebar.reports'), to: getRoutePath(Routes.REPORTS), icon: 'pi pi-clipboard' },
      { label: t('sidebar.profile'), to: getRoutePath(Routes.PROFILE), icon: 'pi pi-user' },
    ],
  }),
  getters: {
    sidebarItems: (state): SidebarItemType[] => state.items,
  },
});
