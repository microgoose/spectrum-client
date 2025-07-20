import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { detectUserLanguage, i18n, loadLocaleMessages } from './config/localization';
import { getRouter, setupRouter } from './config/router';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './app.vue';
import '@/shared/styles/index.scss';

// Загружаем локализацию
await loadLocaleMessages(detectUserLanguage());
// Создаем роутер
setupRouter();

// Создаем приложение
const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(getRouter());
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

// Добавляем глобальные свойства для доступа к i18n в компонентах
app.config.globalProperties.$t = i18n.global.t.bind(i18n.global);
app.config.globalProperties.$n = i18n.global.n.bind(i18n.global);

app.mount('#app');
