import { useQuery } from '@tanstack/vue-query';
import { getApplications } from '@/api/application/application.api.ts';
import type { ApplicationType } from '@/api/application/application.types.ts';
import { dialogs } from '@/config/dialog.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';

export const getApplicationsQuery = () => {
  return useQuery<ApplicationType[]>({
    queryKey: ['applications'],
    queryFn: getApplications,
    throwOnError: true,
  });
};

export const removeApplication = async (id: string) => {
  const dialog = useDialogStore();
  const result = await dialog.open(dialogs.CANCEL_APPLICATION);

  if (result) {
    alert('Removing application id ' + id);
  }
};
