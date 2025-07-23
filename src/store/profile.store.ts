import { defineStore } from 'pinia';
import type { OrganizationType } from '@/api/types/organization.types.ts';
import type { UserType } from '@/api/types/user.types.ts';

export interface ProfileState {
  isLoading: boolean;
  profile: UserType | null;
  organization: OrganizationType | null;
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
    setProfile(profile: UserType) {
      this.profile = profile;
    },
    setOrganization(organization: OrganizationType) {
      this.organization = organization;
    },
  },
});
