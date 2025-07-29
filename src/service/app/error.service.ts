import { dialogs } from '@/config/dialog.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import { useErrorStore } from '@/store/app/error.store.ts';

export const openError = (error: Error) => {
  const dialogStore = useDialogStore();
  const errorStore = useErrorStore();
  dialogStore.open(dialogs.ERROR_MESSAGE);
  errorStore.setError(error);
};
