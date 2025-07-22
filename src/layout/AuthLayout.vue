<style module lang="css">
.authLayout {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div :class="$style.authLayout">
    <slot />
  </div>
</template>

<script setup lang="ts" />
