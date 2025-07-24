<script setup lang="ts"></script>

<template>
  <h2 :class="$style.title">
    <slot />
  </h2>
</template>

<style module lang="css">
.title {
  font: var(--font-h2-bold);
}
</style>
