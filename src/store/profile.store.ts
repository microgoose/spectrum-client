import { defineStore } from 'pinia';

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  avatar: string | null;
}

export interface ProfileState {
  profile: UserProfile;
}

export const useProfileStore = defineStore('profile', {
  // TODO: добавить логику получения данных из API
  state: () => ({
    profile: {
      id: '1',
      fullName: 'Иванов Иван Иванович',
      email: 'ivanov@example.com',
      phone: '+7 (999) 123-45-67',
      avatar: null,
    },
    organization: {
      id: '1',
      name: 'Акционерное общество "Авиакомпания "Аэрофлот"',
      inn: '7707083893',
      ogrn: '1027700132000',
    },
  }),
});
