import { defineStore } from 'pinia';
import type { MenuItem } from 'primevue/menuitem';
import { confirmLogout } from '@/service/auth/logout.service.ts';

export const useProfilePopupStore = defineStore('profilePopup', () => {
  const menuItems: MenuItem[] = [
    {
      label: 'Выйти',
      icon: 'pi pi-sign-out',
      command: confirmLogout,
    },
  ];

  return {
    menuItems,
  };
});
