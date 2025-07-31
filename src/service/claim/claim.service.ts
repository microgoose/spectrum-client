import { saveClaim } from '@/api/claim.api';
import type { ClaimRequestData } from '@/model/claim/claim.types';
import type { OrganizationType } from '@/model/organization/organization.types';
import { signData } from '@/service/sign/certificate.service';
import { encodeToBase64 } from '@/shared/lib/base64-util.ts';

export const sendOrganizationClaim = async (
  newData: OrganizationType,
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
