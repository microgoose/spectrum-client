<script setup lang="ts"></script>

<template>
  <h2 :class="$style.title">
    <slot />
    <slot name="right" />
  </h2>
</template>

<style module lang="css">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font: var(--font-h2-bold);
}
</style>
