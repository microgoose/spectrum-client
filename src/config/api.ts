import ky, { HTTPError } from 'ky';
import { logout } from '@/service/auth/logout.service';
import { useAuthStore } from '@/store/auth/auth.store';
import { t } from './localization';

export const SPECTRUM_CORE_API = import.meta.env.VITE_SPECTRUM_CORE_API as string;

//TODO русифицировать ошибки: TimeoutError, ERR_CONNECTION_TIMED_OUT
export const api = ky.create({
  prefixUrl: SPECTRUM_CORE_API,
  hooks: {
    beforeError: [
      async (error: HTTPError) => {
        if (error.response.status === 401) {
          logout();
        }

        if (error.response.status === 500) {
          error.message = t('errors.internalServiceError');
        }

        return error;
      },
    ],

    beforeRequest: [
      (request) => {
        const authStore = useAuthStore();
        if (authStore.token) {
          request.headers.set('Authorization', `Bearer ${authStore.token}`);
        }
      },
    ],

    afterResponse: [
      async (request, options, response) => {
        //TODO X_AUTH or _X_AUTH, test? Обновляем токен, если сервер прислал новый в заголовках
        const newToken = response.headers.get('X_AUTH');
        if (newToken) {
          const authStore = useAuthStore();
          authStore.login(newToken);
        }

        return response;
      },
    ],
  },
});
