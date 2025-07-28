import ky from 'ky';

export const BASE_API_URL = '/';

// TODO Remove Функция задержки
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = ky.create({
  prefixUrl: BASE_API_URL,
  hooks: {
    beforeRequest: [
      async () => {
        // Добавление задержки случайно
        const shouldDelay = Math.random() < 1 / 3;
        if (shouldDelay) {
          await delay(1000);
        }
      },
    ],
  },
});
