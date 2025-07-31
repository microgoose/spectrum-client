import {
  type Certificate,
  createDetachedSignature,
  createHash,
  getUserCertificates,
} from 'crypto-pro';
import { t } from '@/config/localization';
import { type CertificateOption, useCertStore } from '@/store/sign/cert-store';

export const getLabel = (cert: Certificate) => {
  const name = cert.name;
  const validTo = cert.validTo;
  return t('certificateService.text.selectedCert', {
    name,
    validTo,
  });
};

export const getUserCertificate = () => {
  const selectedCert = useCertStore().selectedCert;
  if (!selectedCert) throw new Error(t('certificateService.error.noCertificate'));
  return selectedCert;
};

//TODO протестировать
export const signData = async (message: string): Promise<string> => {
  const cert = getUserCertificate();
  const hash = await createHash(message);
  return createDetachedSignature(cert.value.thumbprint, hash);
};

export const getAuthUserCertificates = async (): Promise<CertificateOption[]> => {
  const certificates = await getUserCertificates();
  const certificateOptions = [];

  for (let i = 0; i <= certificates.length; i++) {
    const certificate = certificates[i];

    if (!certificate) continue;

    certificateOptions.push({
      label: getLabel(certificate),
      value: certificate,
    });
  }

  if (certificateOptions.length === 0)
    throw new Error(t('selectSignCertificateDialog.error.notFoundActiveCert'));

  return certificateOptions;
};
