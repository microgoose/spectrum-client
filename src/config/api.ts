import { logout } from '@/service/auth/logout.service';
import { useAuthStore } from '@/store/auth/auth.store';
import ky, { HTTPError } from 'ky';
import { t } from './localization';

export const BASE_API_URL = 'http://10.115.154.17:3100/spectrum-core';

export const api = ky.create({
  prefixUrl: BASE_API_URL,
  hooks: {
    beforeError: [
      async (error: HTTPError<unknown>) => {
        if (error.response.status === 401) {
          logout();
        }

        if (error.response.status === 500) {
          error.message = t('errors.internalServiceError');
        }

        return error;
      }
    ],

    beforeRequest: [
      (request) => {
        const authStore = useAuthStore();
        if (authStore.token) {
          request.headers.set('Authorization', `Bearer ${authStore.token}`);
        }
      }
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
      }
    ]
  }
});
