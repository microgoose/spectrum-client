import { defineStore } from 'pinia';
import { Dialogs } from '@/config/dialog.ts';

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    visibleDialogs: new Set<Dialogs>(),
  }),

  actions: {
    open(name: Dialogs) {
      this.visibleDialogs.add(name);
    },
    close(name: Dialogs) {
      this.visibleDialogs.delete(name);
    },
    toggle(name: Dialogs) {
      if (this.visibleDialogs.has(name)) {
        this.close(name);
      } else {
        this.open(name);
      }
    },
    isOpen(name: Dialogs): boolean {
      return this.visibleDialogs.has(name);
    },
  },
});
