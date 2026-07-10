<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  title: string
  tone?: 'yellow' | 'orange' | 'deep-orange'
}>(), { tone: 'yellow' })
</script>

<template>
  <aside class="nutmeg-callout" :class="`nutmeg-callout--${tone}`">
    <p>{{ label }}</p>
    <h2>{{ title }}</h2>
    <div v-if="$slots.default"><slot /></div>
  </aside>
</template>

<style scoped>
.nutmeg-callout { border-left: 0.45rem solid var(--nutmeg-yellow-light); margin-top: 2.5rem; padding: 1.25rem 1.5rem; }
.nutmeg-callout--orange { border-color: var(--nutmeg-orange); }
.nutmeg-callout--deep-orange { border-color: var(--nutmeg-orange-deep); }
p { color: var(--nutmeg-gray-600); font-size: 0.76rem; font-weight: 700; letter-spacing: 0.07em; margin: 0 0 0.55rem; }
h2 { color: var(--nutmeg-ink); font-size: 1.45rem; font-weight: 700; letter-spacing: -0.035em; line-height: 1.4; margin: 0; }
div { color: var(--nutmeg-body); font-size: 0.94rem; line-height: 1.7; margin-top: 0.65rem; }
</style>
