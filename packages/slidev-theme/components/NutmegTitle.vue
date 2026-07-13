<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead?: string
}>()
</script>

<template>
  <header class="nutmeg-title">
    <p>{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <div v-if="lead" class="nutmeg-title__lead">{{ lead }}</div>
  </header>
</template>

<style scoped>
.nutmeg-title { margin-bottom: clamp(1.2rem, 2.2vw, 1.75rem); max-inline-size: 100%; }
p { color: var(--nutmeg-gray-600); font-size: 0.76rem; font-weight: 700; letter-spacing: 0.09em; margin: 0 0 0.7rem; }
h1 { color: var(--nutmeg-ink); font-size: clamp(2rem, 3.6vw, 2.65rem); font-weight: 700; letter-spacing: -0.055em; line-height: 1.2; margin: 0; max-inline-size: none; padding-right: 0; text-wrap: pretty; width: calc(100% - var(--nutmeg-header-safe-area)); }
.nutmeg-title__lead { color: var(--nutmeg-body); font-size: 0.98rem; line-height: 1.65; margin-top: 0.75rem; max-width: calc(100% - var(--nutmeg-header-safe-area)); }
</style>
