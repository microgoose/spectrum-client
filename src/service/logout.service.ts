import { Dialogs } from '@/config/dialog';
import { Routes } from '@/config/router';
import { useAuthStore } from '@/store/auth.store';
import { useDialogStore } from '@/store/dialog.store';

import { pushPage } from './route.service';

export const confirmLogout = () => {
  const dialogStore = useDialogStore();
  dialogStore.open(Dialogs.LOGOUT);
};

export const logout = () => {
  const dialogStore = useDialogStore();
  const auth = useAuthStore();
  auth.logout();

  dialogStore.close(Dialogs.LOGOUT);
  pushPage(Routes.LOGIN);
};
