import { defineStore } from 'pinia';

interface UseLoginStoreState {
  login: string | null;
  password: string | null;
}

export const useLoginStore = defineStore('login', {
  state: (): UseLoginStoreState => ({
    login: null,
    password: null,
  }),
});
