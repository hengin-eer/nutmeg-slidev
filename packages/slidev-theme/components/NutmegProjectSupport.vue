<script setup lang="ts">
type SupportItem = { title: string; detail: string; icon?: string }
defineProps<{ items: SupportItem[] }>()
</script>

<template>
  <div v-if="!items.length" class="nutmeg-empty-state">支援内容を1件以上指定してください。</div>
  <div v-else class="nutmeg-project-support" :class="`nutmeg-project-support--${Math.min(items.length, 4)}`">
    <article v-for="(item, index) in items" :key="item.title">
      <span class="nutmeg-project-support__index">{{ String(index + 1).padStart(2, '0') }}</span>
      <span v-if="item.icon" class="nutmeg-project-support__icon" aria-hidden="true">{{ item.icon }}</span>
      <h2>{{ item.title }}</h2>
      <p>{{ item.detail }}</p>
    </article>
  </div>
</template>

<style scoped>
.nutmeg-project-support { display: grid; gap: 1rem; grid-template-columns: repeat(var(--support-columns), minmax(0, 1fr)); }
.nutmeg-project-support--1 { --support-columns: 1; }
.nutmeg-project-support--2 { --support-columns: 2; }
.nutmeg-project-support--3, .nutmeg-project-support--4 { --support-columns: 2; }
article { background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-radius: .8rem; min-height: 10.5rem; padding: 1.2rem 1.3rem; }
.nutmeg-project-support__index { color: var(--nutmeg-orange); font-size: .72rem; font-weight: 700; letter-spacing: .08em; }
.nutmeg-project-support__icon { float: right; font-size: 1.4rem; }
h2 { color: var(--nutmeg-ink); font-size: 1.25rem; margin: 1rem 0 .55rem; }
p { color: var(--nutmeg-body); font-size: .88rem; line-height: 1.65; margin: 0; }
</style>
