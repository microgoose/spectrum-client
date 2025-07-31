<template>
  <div class="flex flex-column gap-4">
    <div>
      <Textarea
        v-model="comment"
        autoResize
        rows="10"
        :placeholder="$t('sendDocumentForm.actions.enterDocumentText')"
        :maxlength="500"
        class="w-full"
      />
      <small class="text-400 subtext">
        {{ comment.length }}/{{ $t('sendDocumentForm.text.500symbols') }}
      </small>
    </div>

    <div class="flex flex-column gap-2">
      <!-- Список файлов -->
      <div v-if="files.length">
        <table class="w-full border-collapse">
          <tbody>
            <tr v-for="(f, index) in files" :key="index">
              <td class="w-full">{{ f.name }}</td>
              <td>
                <Button
                  icon="pi pi-times"
                  text
                  rounded
                  severity="danger"
                  @click="removeFile(index)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <FileUpload
        mode="basic"
        name="files"
        customUpload
        :chooseLabel="$t('sendDocumentForm.actions.attachFiles')"
        multiple
        :auto="true"
        @select="onFileSelect"
        class="file-button w-max"
      />
    </div>

    <div class="flex items-center gap-2">
      <Button :label="$t('actions.send')" @click="handleSubmit" />
      <SignCheckbox v-model="isSigningEnabled" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import FileUpload, { type FileUploadSelectEvent } from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import SignCheckbox from '@/view/feature/sign/SignCheckbox.vue';

const emit = defineEmits<{ submit: [string, File[], boolean] }>();

const comment = ref('');
const files = ref<File[]>([]);
const isSigningEnabled = ref(false);

function handleSubmit() {
  emit('submit', comment.value, files.value, isSigningEnabled.value);
}

function onFileSelect(event: FileUploadSelectEvent) {
  if (event.files?.length) {
    files.value = [...files.value, ...event.files];
  }
}

function removeFile(index: number) {
  files.value.splice(index, 1);
}
</script>
