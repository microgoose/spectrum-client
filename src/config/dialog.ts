import type { Component } from 'vue';
import CancelApplicationDialog from '@/view/feature/application/CancelApplicationDialog.vue';
import ConfirmLogoutDialog from '@/view/feature/auth/ConfirmLogoutDialog.vue';
import ErrorDialog from '@/view/feature/error/ErrorDialog.vue';
import OrganizationCancelConfirmDialog from '@/view/feature/organization/OrganizationCancelConfirmDialog.vue';
import OrganizationSentNoticeDialog from '@/view/feature/organization/OrganizationSentNoticeDialog.vue';

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
    component: ErrorDialog,
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
    component: OrganizationCancelConfirmDialog,
  },
  ORGANIZATION_SENT_NOTICE: {
    name: 'organization-send-notice',
    titleKey: 'applicationSent.title',
    component: OrganizationSentNoticeDialog,
  },
};
