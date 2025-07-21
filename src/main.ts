import { createApp } from 'vue';

import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';

import App from '@/App.vue';
import { changeLocale, detectUserLanguage, i18n } from '@/config/localization';
import { getPrimeVueConfig } from '@/config/primevue-config';
import { getRouter, setupRouter } from '@/config/router';
import '@/shared/styles/index.scss';

// Загружаем локализацию
await changeLocale(detectUserLanguage());
// Создаем роутер
setupRouter();

// Создаем приложение
const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(getRouter());
app.use(PrimeVue, getPrimeVueConfig());

// Добавляем глобальные свойства для доступа к i18n в компонентах
app.config.globalProperties.$t = i18n.global.t.bind(i18n.global);
app.config.globalProperties.$n = i18n.global.n.bind(i18n.global);

app.mount('#app');
