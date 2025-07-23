import { useToast } from 'primevue/usetoast';

import { t } from '@/config/localization';
import { getAuthUserOrganization } from '@/entity/organization/api/organization.api';
import { getAuthUser } from '@/entity/user/api/user.api.ts';
import { useProfileStore } from '@/store/profile.store';

export const loadProfile = async () => {
  const profile = useProfileStore();
  const toast = useToast();

  profile.setIsLoading(true);

  try {
    const user = await getAuthUser();
    const organization = await getAuthUserOrganization();

    profile.setProfile(user);
    profile.setOrganization(organization);
  } catch (error) {
    console.error(error);
    toast.add({
      severity: 'error',
      summary: t('profile.error.loadProfile'),
      life: 3000,
    });
  } finally {
    profile.setIsLoading(false);
  }
};
