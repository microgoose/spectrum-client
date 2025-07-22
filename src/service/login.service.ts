import { Routes } from '@/config/router';
import { useAuthStore } from '@/store/auth.store';

import { pushPage } from './route.service';

export const login = async () => {
  const auth = useAuthStore();
  auth.login('test-token'); // TODO: remove this
  pushPage(Routes.HOME);
};
