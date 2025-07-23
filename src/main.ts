import { createApp } from 'vue';

import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import App from '@/App.vue';
import { i18n } from '@/config/localization';
import { getPrimeVueConfig } from '@/config/primevue-config';
import { changeLocale, detectUserLanguage } from '@/service/localization.service';
import { getRouter } from '@/service/route.service';
import '@/shared/styles/index.scss';
import { openError } from '@/service/error.service.ts';

// Загружаем локализацию
await changeLocale(detectUserLanguage());

// Создаем приложение
const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(getRouter());
app.use(PrimeVue, getPrimeVueConfig());
app.use(ToastService);

// Добавляем глобальные свойства для доступа к i18n в компонентах
app.config.globalProperties.$t = i18n.global.t.bind(i18n.global);
app.config.globalProperties.$n = i18n.global.n.bind(i18n.global);

app.config.errorHandler = (err) => {
  openError(err as Error);
}

app.mount('#app');
