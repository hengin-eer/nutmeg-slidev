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
.nutmeg-project-support--3 { --support-columns: 3; }
.nutmeg-project-support--4 { --support-columns: 4; }
article { border-top: 1px solid var(--nutmeg-card-border); min-height: 0; padding: .85rem .1rem 0; }
.nutmeg-project-support__index { color: var(--nutmeg-orange); font-size: .72rem; font-weight: 700; letter-spacing: .08em; }
.nutmeg-project-support__icon { color: var(--nutmeg-orange-deep); font-size: 1rem; margin-left: .45rem; }
h2 { color: var(--nutmeg-ink); font-size: 1.1rem; margin: .65rem 0 .45rem; }
p { color: var(--nutmeg-body); font-size: .82rem; line-height: 1.6; margin: 0; }
@media (max-width: 45rem) { .nutmeg-project-support--3, .nutmeg-project-support--4 { --support-columns: 2; } }
</style>
