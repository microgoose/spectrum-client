import NotFoundPage from '@/view/pages/error/NotFoundPage.vue';

// Перечисление маршрутов, используется для программного перехода на страницу
export enum Routes {
  HOME = 'home ',
  LOGIN = 'login',
  NOTIFICATIONS = 'notifications',
  NOTIFICATION = 'notification',
  DOCUMENTS = 'documents',
  APPLICATIONS = 'applications',
  ORGANIZATION = 'organization',
  SEND_DOCUMENT = 'send-document',
  PROFILE = 'profile',
  NOT_FOUND = 'not-found',
}

export const routes = [
  {
    path: '/applications',
    name: Routes.APPLICATIONS,
    component: () => import('@/view/pages/application/ApplicationsPage.vue'),
    meta: { titleKey: 'applicationsPage.title' },
  },
  {
    path: '/organization',
    name: Routes.ORGANIZATION,
    component: () => import('@/view/pages/organization/OrganizationPage.vue'),
    meta: { titleKey: 'organizationPage.title' },
  },
  {
    path: '/send-document',
    name: Routes.SEND_DOCUMENT,
    component: () => import('@/view/pages/document/SendDocumentPage.vue'),
    meta: { titleKey: 'sendDocumentPage.title' },
  },
  {
    path: '/notifications',
    name: Routes.NOTIFICATIONS,
    component: () => import('@/view/pages/notification/NotificationsPage.vue'),
    meta: { titleKey: 'notificationsPage.title' },
  },
  {
    path: '/notification/:id',
    name: Routes.NOTIFICATION,
    component: () => import('@/view/pages/notification/NotificationPage.vue'),
    meta: { titleKey: 'notificationPage.title' },
  },
  {
    path: '/documents',
    name: Routes.DOCUMENTS,
    component: () => import('@/view/pages/document/DocumentsPage.vue'),
    meta: { titleKey: 'documentsPage.title' },
  },
  {
    path: '/profile',
    name: Routes.PROFILE,
    component: () => import('@/view/pages/user/ProfilePage.vue'),
    meta: { titleKey: 'profilePage.title' },
  },
  {
    path: '/login',
    name: Routes.LOGIN,
    component: () => import('@/view/pages/auth/LoginPage.vue'),
    meta: { titleKey: 'loginPage.title', unauthorized: true, layout: 'auth' },
  },
  {
    path: '/',
    name: Routes.HOME,
    component: () => import('@/view/pages/HomePage.vue'), //Асинхронная загрузка страницы, для уменьшения размера бандла
    meta: { titleKey: 'homePage.title' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: Routes.NOT_FOUND,
    component: NotFoundPage, // Обязательная страница для отображения при ошибке, не загружать асинхронно
    meta: { titleKey: 'notFoundPage.title' },
  },
];
