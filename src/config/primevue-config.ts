import Aura from '@primeuix/themes/aura';

import { i18n } from './localization';

export const getPrimeVueConfig = () => {
  const currentLocale = i18n.global.locale.value;
  //Мы не знаем заранее, какие поля будут в локализации, поэтому приводим к any
  const locale = i18n.global.getLocaleMessage(currentLocale) as any;

  if (!locale) throw new Error('Locale not found');

  const primevueMessages = locale.primevue;

  if (!primevueMessages) throw new Error('PrimeVue messages not found');

  return {
    theme: { preset: Aura },
    locale: primevueMessages,
  };
};
