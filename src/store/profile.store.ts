import { defineStore } from 'pinia';

import type { Organization } from '@/feature/organization/model/organization.types';
import type { User } from '@/feature/user/model/user.types';

export interface ProfileState {
  isLoading: boolean;
  profile: User | null;
  organization: Organization | null;
}

export const useProfileStore = defineStore('profile', {
  state: (): ProfileState => ({
    isLoading: false,
    profile: null,
    organization: null,
  }),

  actions: {
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    },
    setProfile(profile: User) {
      this.profile = profile;
    },
    setOrganization(organization: Organization) {
      this.organization = organization;
    },
  },
});
