import { auth } from '@/api/auth/auth.api.ts';
import type { LoginData } from '@/api/auth/auth.types.ts';
import { Routes } from '@/config/router.ts';
import { useAuthStore } from '@/store/auth/auth.store.ts';
import { pushPage } from '../app/route.service.ts';
import { t } from '@/config/localization.ts';
import { getHTTPErrorCode } from '@/shared/lib/error-util.ts';

export const login = async (data: LoginData) => {
  try {
    const authToken = await auth(data);
    const authStore = useAuthStore();
    authStore.login(authToken.token);
    pushPage(Routes.HOME);
  } catch (err: unknown) {
    if (getHTTPErrorCode(err) === 401) {
      throw new Error(t('loginService.errors.incorrectLoginData'));
    }

    throw err;
  }
};
