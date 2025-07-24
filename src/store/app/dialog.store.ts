import { type Component, ref } from 'vue';
import { defineStore } from 'pinia';
import { DEFAULT_TITLE, type DialogRoute } from '@/config/dialog.ts';

export const useDialogStore = defineStore('dialog', () => {
  const dialogName = ref<string | null>(null);
  const title = ref(DEFAULT_TITLE);
  const isOpen = ref(false);

  let component: Component | null = null;
  let resolver: ((value: boolean) => void) | null = null;

  const open = async (item: DialogRoute): Promise<boolean> => {
    if (isOpen.value && resolver) {
      close(false);
    }

    isOpen.value = true;
    dialogName.value = item.name;
    title.value = item.titleKey;
    component = item.component;

    return new Promise((resolve) => {
      resolver = resolve;
    });
  };

  const close = (result?: boolean) => {
    isOpen.value = false;
    dialogName.value = null;
    title.value = DEFAULT_TITLE;
    component = null;

    if (resolver) {
      resolver(!!result);
      resolver = null;
    }
  };

  const getComponent = () => component;

  return { isOpen, title, getComponent, open, close };
});
