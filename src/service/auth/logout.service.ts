import { Dialogs } from '@/config/dialog.ts';
import { Routes } from '@/config/router.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import { useAuthStore } from '@/store/auth/auth.store.ts';
import { pushPage } from '../app/route.service.ts';

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
