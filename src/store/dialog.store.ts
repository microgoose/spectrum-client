import { defineStore } from 'pinia';

import { Dialogs } from '@/config/dialog';

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
      this.visibleDialogs.has(name) ? this.close(name) : this.open(name);
    },
    isOpen(name: Dialogs): boolean {
      return this.visibleDialogs.has(name);
    },
  },
});
