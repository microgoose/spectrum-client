import {
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type Router,
  createRouter,
  createWebHistory,
} from 'vue-router';

import { t } from '@/config/localization';
import { Routes, routes } from '@/config/router';
import { useAuthStore } from '@/store/auth.store';

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

  router.beforeEach(beforeEach);
  router.onError(onError);
};

export const pushPage = (route: Routes, params?: Record<string, string>) => {
  getRouter().push({ name: route, params });
};

export const getRoutePath = (route: Routes, params?: Record<string, string>) => {
  return getRouter().resolve({ name: route, params }).href;
};

export const setPageTitle = (to: RouteLocationNormalized) => {
  if (to.meta.titleKey) {
    document.title = t(to.meta.titleKey as string);
  }
};

const beforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  to.meta.title = t(to.meta.titleKey as string);

  const auth = useAuthStore();

  if (!to.meta.unauthorized && !auth.isAuthenticated) {
    next({ name: Routes.LOGIN });
  } else {
    next();
  }
};

const onError = (error: Error, to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  console.error('Router error:', error);
  pushPage(Routes.ERROR, { message: error.message });
};
