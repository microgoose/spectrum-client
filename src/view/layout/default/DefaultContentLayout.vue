<style module lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.header {
  border-bottom: 1px solid var(--p-border);
  flex-shrink: 0;
}

.content {
  flex: 1 1 auto;
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
}

.footer {
  padding: 1rem;
  flex-shrink: 0;
  border-top: 1px solid var(--p-border);
}

.center {
  display: flex;
  align-items: center;
}

.noPadding {
  padding: 0;
}
</style>

<template>
  <div :class="$style.layout">
    <header v-if="$slots.header" :class="[$style.header, centerHeader && $style.center]">
      <slot name="header" />
    </header>

    <main
      :class="[
        $style.content,
        centerContent && $style.center,
        noContentPadding && $style.noPadding
      ]"
    >
      <slot name="content" />
    </main>

    <footer
      v-if="$slots.footer"
      :class="[
        $style.footer,
        centerFooter && $style.center,
        noFooterPadding && $style.noPadding
      ]"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  centerHeader?: boolean;
  centerContent?: boolean;
  centerFooter?: boolean;
  noContentPadding?: boolean;
  noFooterPadding?: boolean;
}>();
</script>
