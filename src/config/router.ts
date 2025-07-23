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
  LOGIN = 'login',
}

export const routes = [
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
    path: '/login',
    name: Routes.LOGIN,
    component: () => import('@/pages/LoginPage.vue'),
    meta: { titleKey: 'loginPageTitle', unauthorized: true, layout: 'auth' },
  },
  {
    path: '/error',
    name: Routes.ERROR,
    component: ErrorPage,
    meta: { titleKey: 'errorPageTitle' },
  },
  {
    path: '/',
    name: Routes.HOME,
    component: () => import('@/pages/HomePage.vue'), //Асинхронная загрузка страницы, для уменьшения размера бандла
    meta: { titleKey: 'homePageTitle' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: Routes.NOT_FOUND,
    component: NotFoundPage, // Обязательная страница для отображения при ошибке, не загружать асинхронно
    meta: { titleKey: 'notFoundPageTitle' },
  },
];
