import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { i18n } from './localization';

const SpimexPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
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
        surface: {
          0: '#fff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },

        border: '{stone.200}',
      },
      dark: {
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

        border: '{zinc.700}',
      },
    },

    logo: {
      icon: '{blue.500}',
      text: '{blue.500}',
    },
  },

  components: {
    card: {
      colorScheme: {
        light: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          //TODO это корректно и работает, разобраться в схемах primevue
          shadow: '0 1px 3px 0 rgba(0,0,0,0.4),0 1px 0px -1px rgba(0,0,0,0.4)',
          body: {
            gap: '1rem',
          },
        },
        dark: {
          body: {
            gap: '1rem',
          },
        },
      },
    },

    divider: {
      horizontal: {
        margin: 'none',
      },
    },

    logo: {
      icon: '{blue.500}',
      text: '{blue.500}',
    },

    button: {
      colorScheme: {
        dark: {
          root: {
            primary: {
              color: '{zinc.50}',
              hoverColor: '{slate.700}',
            },
          },
        },
      },
    },
  },
});

export const getPrimeVueConfig = () => {
  const currentLocale = i18n.global.locale.value;
  //Мы не знаем заранее, какие поля будут в локализации, поэтому приводим к any
  const locale = i18n.global.getLocaleMessage(currentLocale) as Record<string, string>;

  if (!locale) throw new Error('Locale not found');

  const primevueMessages = locale.primevue;

  if (!primevueMessages) throw new Error('PrimeVue messages not found');

  return {
    theme: { preset: SpimexPreset },
    locale: primevueMessages,
  };
};
