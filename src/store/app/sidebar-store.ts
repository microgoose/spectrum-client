import { defineStore } from 'pinia';
import { t } from '@/config/localization.ts';
import { Routes } from '@/config/router.ts';
import { getRoutePath } from '@/service/app/route.service.ts';

export interface SidebarItemType {
  label: string;
  to: string;
  icon: string;
  isActive?: boolean;
}

export interface SidebarStoreType {
  items: SidebarItemType[];
}

export const useSidebarStore = defineStore('sidebar', {
  state: (): SidebarStoreType => ({
    items: [
      { label: t('appSidebar.main'), to: getRoutePath(Routes.HOME), icon: 'pi pi-home' },
      {
        label: t('appSidebar.notifications'),
        to: getRoutePath(Routes.NOTIFICATIONS),
        icon: 'pi pi-bell',
      },
      { label: t('appSidebar.documents'), to: getRoutePath(Routes.DOCUMENTS), icon: 'pi pi-book' },
      {
        label: t('appSidebar.applications'),
        to: getRoutePath(Routes.APPLICATIONS),
        icon: 'pi pi-inbox',
      },
      {
        label: t('appSidebar.organization'),
        to: getRoutePath(Routes.ORGANIZATION),
        icon: 'pi pi-sitemap',
      },
      {
        label: t('appSidebar.sendDocument'),
        to: getRoutePath(Routes.SEND_DOCUMENT),
        icon: 'pi pi-send',
      },
      { label: t('appSidebar.profile'), to: getRoutePath(Routes.PROFILE), icon: 'pi pi-user' },
    ],
  }),
  getters: {
    sidebarItems: (state): SidebarItemType[] => state.items,
  },
});
