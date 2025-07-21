import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import { i18n } from './localization';

const SpimexPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },

    colorScheme: {
      light: {
        surface: {
          border: '{stone.200}',
        },
      },
      dark: {
        surface: {
          border: '{stone.400}',
        },
      },
    },
  },
});

export const getPrimeVueConfig = () => {
  const currentLocale = i18n.global.locale.value;
  //Мы не знаем заранее, какие поля будут в локализации, поэтому приводим к any
  const locale = i18n.global.getLocaleMessage(currentLocale) as any;

  if (!locale) throw new Error('Locale not found');

  const primevueMessages = locale.primevue;

  if (!primevueMessages) throw new Error('PrimeVue messages not found');

  return {
    theme: { preset: SpimexPreset },
    locale: primevueMessages,
  };
};
