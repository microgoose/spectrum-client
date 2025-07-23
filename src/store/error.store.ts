import { defineStore } from 'pinia';

interface UseErrorStore {
  error: Error | null;
}

export const useErrorStore = defineStore('error', {
  state: (): UseErrorStore => ({
    error: null,
  }),

  actions: {
    setError(error: Error) {
      this.error = error;
    },
  },
});
