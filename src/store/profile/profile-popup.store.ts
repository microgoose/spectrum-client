import { defineStore } from 'pinia';
import { dialogs } from '@/config/dialog';
import { t } from '@/config/localization';
import { confirmLogout } from '@/service/auth/logout.service.ts';
import { useDialogStore } from '../app/dialog.store';

const dialog = useDialogStore();

export const useProfilePopupStore = defineStore('profilePopup', {
  state: () => ({
    menuItems: [
      {
        label: t('profileMenu.actions.choseCert'),
        icon: 'pi pi-key',
        command: () => dialog.open(dialogs.SELECT_SIGN_CERTIFICATE),
      },
      {
        label: t('profileMenu.actions.logout'),
        icon: 'pi pi-sign-out',
        command: confirmLogout,
      },
    ],
  }),
});
