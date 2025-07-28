import { type Certificate } from 'crypto-pro';
import { defineStore } from 'pinia';

export interface CertificateOption {
  label: string;
  value: Certificate;
}

export interface CertStoreState {
  selectedCert: CertificateOption | null;
}

export const useCertStore = defineStore('cert-store', {
  state: (): CertStoreState => ({
    selectedCert: null,
  }),
  actions: {
    setSelectedCert(cert: CertificateOption | null) {
      this.selectedCert = cert;
    },
  },
});
