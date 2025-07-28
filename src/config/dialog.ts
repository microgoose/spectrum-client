import type { Component } from 'vue';
import ErrorView from '@/view/entity/error/ErrorView.vue';
import CancelApplicationDialog from '@/view/feature/application/CancelApplicationDialog.vue';
import ConfirmLogoutDialog from '@/view/feature/auth/ConfirmLogoutDialog.vue';
import SendDocumentSuccessDialog from '@/view/feature/document/SendDocumentSuccessDialog.vue';
import OrganizationFormCancelDialog from '@/view/feature/organization/OrganizationFormCancelDialog.vue';
import OrganizationFormSentDialog from '@/view/feature/organization/OrganizationFormSentDialog.vue';
import SelectSignCertificate from '@/view/feature/sign/SelectSignCertificate.vue';

export interface DialogRoute {
  name: string;
  titleKey: string;
  component: Component;
}

export type DialogRoutes = Record<string, DialogRoute>;

export const DEFAULT_TITLE = 'dialog.title';

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
  ORGANIZATION_CANCEL_CREATION_CONFIRMATION: {
    name: 'organization-cancel-creation-confirmation',
    titleKey: 'cancelCreation.cancelCreationTitle',
    component: OrganizationFormCancelDialog,
  },
  ORGANIZATION_SENT_NOTICE: {
    name: 'organization-send-notice',
    titleKey: 'applicationSent.title',
    component: OrganizationFormSentDialog,
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
