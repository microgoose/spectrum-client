import { Routes } from '@/config/router.ts';
import { useAuthStore } from '@/store/auth/auth.store.ts';
import { pushPage } from '../app/route.service.ts';

export const login = async () => {
  const auth = useAuthStore();
  auth.login('test-token'); // TODO: remove this
  pushPage(Routes.HOME);
};
