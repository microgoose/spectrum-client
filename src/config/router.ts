import { type Router, createRouter, createWebHistory } from 'vue-router';

import { t } from '@/config/localization';
import ErrorPage from '@/pages/errors/ErrorPage.vue';
import NotFoundPage from '@/pages/errors/NotFoundPage.vue';

// Перечисление маршрутов, используется для программного перехода на страницу
export enum Routes {
  HOME = 'home ',
  NOT_FOUND = 'not-found',
  ERROR = 'error',
  NOTIFICATIONS = 'notifications',
  CONTACTS = 'contacts',
  DOCUMENTS = 'documents',
  CLEARING_ACCOUNTS = 'clearing-accounts',
  REPORTS = 'reports',
  PROFILE = 'profile',
}

export const routes = [
  {
    path: '/',
    name: Routes.HOME,
    component: () => import('@/pages/HomePage.vue'), //Асинхронная загрузка страницы, для уменьшения размера бандла
    meta: { titleKey: 'homePageTitle' },
  },
  {
    path: '/notifications',
    name: Routes.NOTIFICATIONS,
    component: () => import('@/pages/NotificationsPage.vue'),
    meta: { titleKey: 'notificationsPageTitle' },
  },
  {
    path: '/contacts',
    name: Routes.CONTACTS,
    component: () => import('@/pages/ContactsPage.vue'),
    meta: { titleKey: 'contactsPageTitle' },
  },
  {
    path: '/documents',
    name: Routes.DOCUMENTS,
    component: () => import('@/pages/DocumentsPage.vue'),
    meta: { titleKey: 'documentsPageTitle' },
  },
  {
    path: '/clearing-accounts',
    name: Routes.CLEARING_ACCOUNTS,
    component: () => import('@/pages/ClearingAccountsPage.vue'),
    meta: { titleKey: 'clearingAccountsPageTitle' },
  },
  {
    path: '/reports',
    name: Routes.REPORTS,
    component: () => import('@/pages/ReportsPage.vue'),
    meta: { titleKey: 'reportsPageTitle' },
  },
  {
    path: '/profile',
    name: Routes.PROFILE,
    component: () => import('@/pages/ProfilePage.vue'),
    meta: { titleKey: 'profilePageTitle' },
  },
  {
    path: '/error',
    name: Routes.ERROR,
    component: ErrorPage,
    meta: { titleKey: 'errorPageTitle' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: Routes.NOT_FOUND,
    component: NotFoundPage, // Обязательная страница для отображения при ошибке, не загружать асинхронно
    meta: { titleKey: 'notFoundPageTitle' },
  },
];

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
    name: route,
    params,
  });
};

export const getRoutePath = (route: Routes, params?: Record<string, string>) => {
  return getRouter().resolve({ name: route, params }).href;
};
