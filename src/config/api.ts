import ky from 'ky';

export const BASE_API_URL = 'http://localhost:5173';

// TODO Remove Функция задержки
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = ky.create({
  prefixUrl: BASE_API_URL,
  hooks: {
    beforeRequest: [
      async () => {
        const shouldDelay = Math.random() < 1 / 3;
        if (shouldDelay) {
          await delay(1000);
        }
      },
    ],
  },
});
