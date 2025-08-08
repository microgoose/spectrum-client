import { useQuery } from '@tanstack/vue-query';
import { getClaims, saveClaim } from '@/api/claim.api';
import { dialogs } from '@/config/dialog';
import type { ClaimRequestData, ClaimSummary } from '@/model/claim/claim.types';
import { signData } from '@/service/sign/certificate.service';
import { encodeToBase64 } from '@/shared/lib/base64-util.ts';
import { useDialogStore } from '@/store/app/dialog.store';
import type { OrganizationZodType } from '@/model/organization/organization.zod.ts';

export const sendOrganizationClaim = async (
  newData: OrganizationZodType,
  withSign: boolean,
): Promise<void> => {
  const newDataString = JSON.stringify(newData);
  let newDataSign = null;

  if (withSign) {
    //Используем сервис подписи данных
    newDataSign = await signData(newDataString);
  }

  const payload: ClaimRequestData = {
    document: encodeToBase64(newDataString),
    signature: newDataSign ? encodeToBase64(newDataSign) : null,
  };

  await saveClaim(payload);
};

export const getClaimsQuery = () => {
  return useQuery<ClaimSummary[]>({
    queryKey: ['auth-org-claims'],
    queryFn: getClaims,
    throwOnError: true,
  });
};

export const removeClaim = async (id: string) => {
  const dialog = useDialogStore();
  const result = await dialog.open(dialogs.CANCEL_CLAIM);

  if (result) {
    //TODO
    alert('Removing claim id ' + id);
  }
};
