import { useQuery } from '@tanstack/vue-query';
import { getApplications } from '@/api/application/application.api.ts';
import type { ApplicationType } from '@/api/application/application.types.ts';

export const getApplicationsQuery = () => {
  return useQuery<ApplicationType[]>({
    queryKey: ['applications'],
    queryFn: getApplications,
    throwOnError: true,
  });
};

export const removeApplication = (id: string) => {
  //todo
  alert('Removing application id ' + id);
};
