import { Dialogs } from '@/config/dialog.ts';
import { useDialogStore } from '@/store/dialog.store.ts';
import { useErrorStore } from '@/store/error.store.ts';

export const openError = (error: Error) => {
  const dialogStore = useDialogStore();
  const errorStore = useErrorStore();
  dialogStore.open(Dialogs.ERROR_MESSAGE);
  errorStore.setError(error);
};
