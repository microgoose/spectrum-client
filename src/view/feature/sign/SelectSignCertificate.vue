<template>
  <div class="flex flex-column gap-4">
    <Skeleton v-if="loading" class="w-full md:w-30rem" height="3rem" />

    <div v-else class="flex flex-column gap-2">
      <Select
        v-model="selected"
        :options="certOptions"
        optionLabel="label"
        :placeholder="$t('selectSignCertificateDialog.actions.selectCertificate')"
        class="w-full md:w-30rem"
        @change="onCertChange"
      />

      <Message v-if="error" severity="error" size="small" variant="simple">
        {{ error }}
      </Message>
    </div>

    <Button @click="dialog.close()">
      {{ $t('actions.confirm') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Select from 'primevue/select';
import Skeleton from 'primevue/skeleton';
import { t } from '@/config/localization';
import { getAuthUserCertificates } from '@/service/sign/certificate.service';
import { useDialogStore } from '@/store/app/dialog.store';
import { type CertificateOption, useCertStore } from '@/store/sign/cert-store';

const dialog = useDialogStore();
const certStore = useCertStore();

const selected = ref<CertificateOption | null>(certStore.selectedCert);
const certOptions = ref<CertificateOption[]>([]);
const loading = ref(true);
const error = ref('');

const getCertificates = async () => {
  try {
    certOptions.value = await getAuthUserCertificates();
  } catch (err: Error | unknown) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = t('selectSignCertificateDialog.error.unknownError');
    }
  } finally {
    loading.value = false;
  }
};

const onCertChange = () => {
  certStore.setSelectedCert(selected.value);
};

onMounted(() => {
  getCertificates();
});
</script>
