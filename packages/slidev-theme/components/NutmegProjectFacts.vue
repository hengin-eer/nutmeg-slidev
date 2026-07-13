<script setup lang="ts">
type Fact = { value: string; label: string; detail?: string }
defineProps<{ items: Fact[] }>()
</script>

<template>
  <div v-if="!items.length" class="nutmeg-empty-state">数字や特徴を1件以上指定してください。</div>
  <div v-else class="nutmeg-project-facts"><article v-for="item in items" :key="item.label"><strong>{{ item.value }}</strong><h2>{{ item.label }}</h2><p v-if="item.detail">{{ item.detail }}</p></article></div>
</template>

<style scoped>
.nutmeg-project-facts { display: grid; gap: clamp(1.2rem, 3vw, 2.2rem); grid-template-columns: repeat(4, minmax(0, 1fr)); }
article { min-width: 0; padding: .25rem 0 0 1rem; position: relative; }
article::before { background: var(--nutmeg-orange); border-radius: 50%; content: ''; height: .45rem; left: 0; position: absolute; top: .8rem; width: .45rem; }
article:nth-child(2)::before { background: var(--nutmeg-yellow-light); }
article:nth-child(3)::before { background: var(--nutmeg-orange-deep); }
strong { color: var(--nutmeg-orange-deep); display: block; font-size: clamp(2.2rem, 4vw, 3.35rem); letter-spacing: -.06em; line-height: 1; }
h2 { color: var(--nutmeg-ink); font-size: .95rem; margin: .6rem 0 0; }
p { color: var(--nutmeg-body); font-size: .72rem; line-height: 1.5; margin: .35rem 0 0; }
@media (max-width: 45rem) { .nutmeg-project-facts { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
</style>
