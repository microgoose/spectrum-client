import {
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type Router,
  createRouter,
  createWebHistory,
} from 'vue-router';
import { t } from '@/config/localization';
import { Routes, routes } from '@/config/router';
import { openError } from '@/service/error.service.ts';
import { useAuthStore } from '@/store/auth.store';
import { useSidebarStore } from '@/store/sidebar-store';

let router: Router | undefined;

export const getRouter = () => {
  if (!router) {
    router = setupRouter();
  }

  return router;
};

const setupRouter = () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: Object.values(routes),
  });

  router.beforeEach(beforeEach);
  router.onError(onError);

  return router;
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
  const sidebar = useSidebarStore();

  sidebar.items.forEach((item) => {
    item.isActive = item.to === to.path;
  });

  if (!to.meta.unauthorized && !auth.isAuthenticated) {
    next({ name: Routes.LOGIN });
  } else {
    next();
  }
};

const onError = (err: Error) => {
  openError(err);
  pushPage(Routes.HOME);
};
