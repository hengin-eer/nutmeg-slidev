<script setup lang="ts">
type WorkItem = { title: string; detail: string; tags?: string[] }
defineProps<{ items: WorkItem[] }>()
</script>

<template>
  <div v-if="!items.length" class="nutmeg-empty-state">仕事内容を1件以上指定してください。</div>
  <div v-else class="nutmeg-work-grid">
    <article v-for="(item, index) in items" :key="item.title">
      <span class="nutmeg-work-grid__index">{{ String(index + 1).padStart(2, '0') }}</span>
      <h2>{{ item.title }}</h2>
      <p>{{ item.detail }}</p>
      <ul v-if="item.tags?.length"><li v-for="tag in item.tags" :key="tag">{{ tag }}</li></ul>
    </article>
  </div>
</template>

<style scoped>
.nutmeg-work-grid { display: grid; gap: clamp(1.35rem, 3vw, 2.2rem) clamp(1.5rem, 4vw, 3rem); grid-template-columns: repeat(2, minmax(0, 1fr)); }
article { min-height: 0; padding: .1rem 0 0 3.1rem; position: relative; }
.nutmeg-work-grid__index { color: var(--nutmeg-orange); font-size: .82rem; font-weight: 700; left: 0; letter-spacing: .08em; position: absolute; top: .1rem; }
article:nth-child(4n + 2) .nutmeg-work-grid__index { color: var(--nutmeg-yellow-light); }
article:nth-child(4n + 3) .nutmeg-work-grid__index { color: var(--nutmeg-orange-deep); }
h2 { color: var(--nutmeg-ink); font-size: 1.08rem; margin: 0 0 .5rem; }
p { color: var(--nutmeg-body); font-size: .86rem; line-height: 1.65; margin: 0; }
ul { display: flex; flex-wrap: wrap; gap: .3rem; list-style: none; margin: .75rem 0 0; padding: 0; }
li { color: var(--nutmeg-orange); font-size: .67rem; font-weight: 700; }
li::before { content: '#'; }
@media (max-width: 45rem) { .nutmeg-work-grid { grid-template-columns: 1fr; } }
</style>
