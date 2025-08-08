import type { Component } from 'vue';
import ErrorView from '@/view/entity/error/ErrorView.vue';
import ConfirmLogoutDialog from '@/view/feature/auth/ConfirmLogoutDialog.vue';
import CancelClaimDialog from '@/view/feature/claim/CancelClaimDialog.vue';
import ClaimCancelDialog from '@/view/feature/claim/ClaimCancelDialog.vue';
import ClaimSentDialog from '@/view/feature/claim/ClaimSentDialog.vue';
import SendDocumentSuccessDialog from '@/view/feature/document/SendDocumentSuccessDialog.vue';
import SelectSignCertificate from '@/view/feature/sign/SelectSignCertificate.vue';

export interface DialogRoute {
  name: string;
  titleKey: string;
  component: Component;
}

export type DialogRoutes = Record<string, DialogRoute>;

export const DEFAULT_TITLE = 'text.attention';

//TODO lazy loading
export const dialogs: DialogRoutes = {
  ERROR_MESSAGE: {
    name: 'error-message',
    titleKey: 'text.error',
    component: ErrorView,
  },
  CONFIRM_LOGOUT: {
    name: 'confirm-logout',
    titleKey: 'actions.logout',
    component: ConfirmLogoutDialog,
  },
  CANCEL_CLAIM: {
    name: 'cancel-claim',
    titleKey: 'cancelApplication.dialogTitle',
    component: CancelClaimDialog,
  },
  CLAIM_CANCEL: {
    name: 'claim-cancel',
    titleKey: 'text.dearColleagues',
    component: ClaimCancelDialog,
  },
  CLAIM_SENT: {
    name: 'claim-sent',
    titleKey: 'claimSentDialog.title',
    component: ClaimSentDialog,
  },
  SEND_DOCUMENT_SUCCESS: {
    name: 'send-document-success',
    titleKey: 'sendDocumentSuccessDialog.title',
    component: SendDocumentSuccessDialog,
  },
  SELECT_SIGN_CERTIFICATE: {
    name: 'select-sign-certificate',
    titleKey: 'selectSignCertificateDialog.title',
    component: SelectSignCertificate,
  },
};
