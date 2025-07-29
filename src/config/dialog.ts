import type { Component } from 'vue';
import ErrorView from '@/view/entity/error/ErrorView.vue';
import CancelApplicationDialog from '@/view/feature/application/CancelApplicationDialog.vue';
import ConfirmLogoutDialog from '@/view/feature/auth/ConfirmLogoutDialog.vue';
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

export const DEFAULT_TITLE = 'dialog.title';

//TODO lazy loading
export const dialogs: DialogRoutes = {
  ERROR_MESSAGE: {
    name: 'error-message',
    titleKey: 'error.text.errorTitle',
    component: ErrorView,
  },
  CONFIRM_LOGOUT: {
    name: 'confirm-logout',
    titleKey: 'profile.text.logoutTitle',
    component: ConfirmLogoutDialog,
  },
  CANCEL_APPLICATION: {
    name: 'cancel-application',
    titleKey: 'cancelApplication.dialogTitle',
    component: CancelApplicationDialog,
  },
  CLAIM_CANCEL: {
    name: 'claim-cancel',
    titleKey: 'claimCancelDialog.title',
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
    name: 'send-document-success',
    titleKey: 'selectSignCertificateDialog.title',
    component: SelectSignCertificate,
  },
};
