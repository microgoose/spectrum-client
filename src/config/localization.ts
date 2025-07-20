import { createI18n } from 'vue-i18n';

const SUPPORTED_LANGUAGES = ['en', 'ru'];
const DEFAULT_LANG = 'ru';

// 1. Получаем язык из URL
function getLangFromUrl(): string | null {
  const urlLang = window.location.pathname.split('/')[1];
  return SUPPORTED_LANGUAGES.includes(urlLang) ? urlLang : null;
}

// 2. Из localStorage
function getLangFromLocalStorage(): string | null {
  return localStorage.getItem('app-lang');
}

// 3. Из браузера
function getLangFromNavigator(): string {
  const browserLang = navigator.language.split('-')[0]; // 'ru-RU' → 'ru'
  return SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANG;
}

// Финальный выбор
export function detectUserLanguage(): string {
  return getLangFromUrl() || getLangFromLocalStorage() || getLangFromNavigator() || DEFAULT_LANG;
}

export const i18n = createI18n({
  locale: detectUserLanguage(),
  fallbackLocale: DEFAULT_LANG,
  legacy: false,
  messages: {}, // Переводы будут загружаться асинхронно
});

export const t = i18n.global.t;

// Функция для динамической загрузки переводов
export async function changeLocale(locale: string) {
  const response = await fetch(`/locales/${locale}.json`);
  const messages = await response.json();
  i18n.global.setLocaleMessage(locale, messages);
}
