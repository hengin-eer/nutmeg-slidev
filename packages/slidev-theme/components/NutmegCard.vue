<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  title: string
  tone?: 'plain' | 'highlight' | 'action'
  compact?: boolean
}>(), {
  tone: 'plain',
  compact: false,
})
</script>

<template>
  <article class="nutmeg-card" :class="[`nutmeg-card--${tone}`, { 'nutmeg-card--compact': compact }]">
    <p>{{ label }}</p>
    <h2>{{ title }}</h2>
    <div v-if="$slots.default" class="nutmeg-card__body"><slot /></div>
  </article>
</template>

<style scoped>
.nutmeg-card { background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-radius: 10px; display: flex; flex-direction: column; min-height: 11rem; padding: 1.35rem 1.45rem; }
.nutmeg-card--highlight { background: var(--nutmeg-card-highlight-background); border-color: var(--nutmeg-yellow-light); }
.nutmeg-card--action { background: var(--nutmeg-card-action-background); border-color: var(--nutmeg-orange-deep); }
.nutmeg-card--compact { min-height: 7.2rem; padding: 1rem 1.2rem; }
p { color: var(--nutmeg-orange); font-size: 0.76rem; font-weight: 700; letter-spacing: 0.07em; margin: 0 0 0.75rem; }
.nutmeg-card--action p { color: var(--nutmeg-orange-deep); }
h2 { color: var(--nutmeg-ink); font-size: 1.22rem; font-weight: 700; letter-spacing: -0.03em; line-height: 1.42; margin: 0; }
.nutmeg-card--compact h2 { font-size: 1.05rem; }
.nutmeg-card__body { color: var(--nutmeg-body); font-size: 0.92rem; line-height: 1.7; margin-top: 0.8rem; }
.nutmeg-card__body :deep(ul) { list-style: none; margin: 0; padding: 0; }
.nutmeg-card__body :deep(li) { margin: 0.25rem 0; }
.nutmeg-card__body :deep(li)::before { color: var(--nutmeg-orange); content: "—"; margin-right: 0.45rem; }
</style>
