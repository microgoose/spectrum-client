import { dialogs } from '@/config/dialog.ts';
import { Routes } from '@/config/router.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import { useAuthStore } from '@/store/auth/auth.store.ts';
import { pushPage } from '../app/route.service.ts';

export const logout = async () => {
  const auth = useAuthStore();
  auth.logout();
};

export const confirmLogout = async () => {
  const dialogStore = useDialogStore();
  const result = await dialogStore.open(dialogs.CONFIRM_LOGOUT);

  if (result) {
    logout();
    pushPage(Routes.LOGIN);
  }
};
