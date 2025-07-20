import { type RouteRecordRaw, type Router, createRouter, createWebHistory } from 'vue-router';

import { t } from '@/config/localization';
import ErrorPage from '@/pages/errors/error-page.vue';
import NotFoundPage from '@/pages/errors/not-found-page.vue';

// Перечисление маршрутов, используется для программного перехода на страницу
export enum Routes {
  HOME = 'HOME',
  NOT_FOUND = 'NOT_FOUND',
  ERROR = 'ERROR',
}

export const routes: Record<string, RouteRecordRaw> = {
  [Routes.HOME]: {
    path: '/',
    component: () => import('@/pages/home-page.vue'), //Асинхронная загрузка страницы, для уменьшения размера бандла
    meta: { titleKey: 'HOME_PAGE_TITLE' },
  },
  [Routes.ERROR]: {
    path: '/error',
    component: ErrorPage,
    meta: { titleKey: 'ERROR_PAGE_TITLE' },
  },
  [Routes.NOT_FOUND]: {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage, // Обязательная страница для отображения при ошибке, не загружать асинхронно
    meta: { titleKey: 'NOT_FOUND_PAGE_TITLE' },
  },
};

let router: Router | undefined;

export const getRouter = () => {
  if (!router) {
    throw new Error('Router not initialized');
  }
  return router;
};

export const setupRouter = () => {
  router = createRouter({
    history: createWebHistory(),
    routes: Object.values(routes),
  });

  router.beforeEach((to, from, next) => {
    to.meta.title = t(to.meta.titleKey as string);
    next();
  });

  router.onError((error, to, from) => {
    console.error('Router error:', error);
    pushPage(Routes.ERROR, { message: error.message });
  });
};

export const pushPage = (route: Routes, params?: Record<string, string>) => {
  getRouter().push({
    path: routes[route].path,
    query: params,
  });
};
