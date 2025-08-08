import { api } from '@/config/api';
import type {OrganizationType, RawOrganizationType} from '@/model/organization/organization.types.ts';
// import { getJsDate } from '@/shared/lib/date-util';

export const getAuthUserOrganization = async () => {
  const organization = await api.get('organization').json<RawOrganizationType>();

  return {
    ...organization,
    // ipIdentity: {
    //   ...organization.ipIdentity,
    //   idIssueDate: getJsDate(organization.ipIdentity.idIssueDate),
    //   idBirthdate: getJsDate(organization.ipIdentity.idBirthdate),
    // },
  };
};

export const getOrganizationById = async (organizationId: number) => {
  return api.get(`organization/${organizationId}`).json<OrganizationType>();
};
