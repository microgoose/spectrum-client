import { createI18n } from 'vue-i18n';
import { detectUserLanguage } from '@/service/app/localization.service.ts';

export const SUPPORTED_LANGUAGES = ['en', 'ru'];
export const DEFAULT_LANG = 'ru';

export const i18n = createI18n({
  locale: detectUserLanguage(),
  fallbackLocale: DEFAULT_LANG,
  legacy: false,
  messages: {}, // Переводы будут загружаться асинхронно
});

export const t = i18n.global.t;
