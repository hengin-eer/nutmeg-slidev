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
.nutmeg-title { margin-bottom: 2.15rem; }
p { color: var(--nutmeg-gray-600); font-size: 0.76rem; font-weight: 700; letter-spacing: 0.09em; margin: 0 0 0.7rem; }
h1 { color: var(--nutmeg-ink); font-size: 2.35rem; font-weight: 700; letter-spacing: -0.055em; line-height: 1.25; margin: 0; max-inline-size: 38ch; padding-right: 6.5rem; text-wrap: balance; }
.nutmeg-title__lead { color: var(--nutmeg-body); font-size: 0.98rem; line-height: 1.7; margin-top: 0.9rem; max-width: 58rem; }
</style>
