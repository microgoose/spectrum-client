import { DEFAULT_LANG, SUPPORTED_LANGUAGES, i18n } from '@/config/localization';

// 1. Получаем язык из URL
export function getLangFromUrl(): string | null {
  const urlLang = window.location.pathname.split('/')[1];
  return SUPPORTED_LANGUAGES.includes(urlLang) ? urlLang : null;
}

// 2. Из localStorage
export function getLangFromLocalStorage(): string | null {
  return localStorage.getItem('app-lang');
}

// 3. Из браузера
export function getLangFromNavigator(): string {
  const browserLang = navigator.language.split('-')[0]; // 'ru-RU' → 'ru'
  return SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANG;
}

// Финальный выбор
export function detectUserLanguage(): string {
  return getLangFromUrl() || getLangFromLocalStorage() || getLangFromNavigator() || DEFAULT_LANG;
}

// Функция для динамической загрузки переводов
export async function changeLocale(locale: string) {
  const response = await fetch(`/locales/${locale}.json`);
  const messages = await response.json();
  i18n.global.setLocaleMessage(locale, messages);
}
