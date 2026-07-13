<script setup lang="ts">
type WorkItem = { title: string; detail: string; tags?: string[] }
defineProps<{ items: WorkItem[] }>()
</script>

<template>
  <div v-if="!items.length" class="nutmeg-empty-state">仕事内容を1件以上指定してください。</div>
  <div v-else class="nutmeg-work-grid">
    <article v-for="item in items" :key="item.title">
      <h2>{{ item.title }}</h2>
      <p>{{ item.detail }}</p>
      <ul v-if="item.tags?.length"><li v-for="tag in item.tags" :key="tag">{{ tag }}</li></ul>
    </article>
  </div>
</template>

<style scoped>
.nutmeg-work-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, minmax(0, 1fr)); }
article { border-top: 3px solid var(--nutmeg-orange); min-height: 8.5rem; padding: 1rem .3rem 0; }
article:nth-child(3n + 2) { border-color: var(--nutmeg-yellow-light); }
article:nth-child(3n) { border-color: var(--nutmeg-orange-deep); }
h2 { color: var(--nutmeg-ink); font-size: 1.1rem; margin: 0 0 .55rem; }
p { color: var(--nutmeg-body); font-size: .86rem; line-height: 1.65; margin: 0; }
ul { display: flex; flex-wrap: wrap; gap: .3rem; list-style: none; margin: .75rem 0 0; padding: 0; }
li { color: var(--nutmeg-orange); font-size: .67rem; font-weight: 700; }
li::before { content: '#'; }
@media (max-width: 45rem) { .nutmeg-work-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
</style>
