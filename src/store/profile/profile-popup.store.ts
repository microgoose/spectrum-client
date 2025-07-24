import { defineStore } from 'pinia';
import { logout } from '@/service/auth/logout.service.ts';

export const useProfilePopupStore = defineStore('profilePopup', {
  state: () => ({
    menuItems: [
      {
        label: 'Выйти',
        icon: 'pi pi-sign-out',
        command: logout,
      },
    ],
  }),
});
