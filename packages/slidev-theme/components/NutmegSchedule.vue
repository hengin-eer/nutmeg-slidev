<script setup lang="ts">
type ScheduleItem = { period: string; title: string; detail?: string }
withDefaults(defineProps<{ scale?: 'year' | 'week' | 'custom'; items: ScheduleItem[] }>(), { scale: 'custom' })
</script>

<template>
  <div v-if="!items.length" class="nutmeg-empty-state">予定を1件以上指定してください。</div>
  <ol v-else class="nutmeg-schedule" :class="[`nutmeg-schedule--${scale}`, `nutmeg-schedule--count-${Math.min(items.length, 12)}`]">
    <li v-for="item in items" :key="`${item.period}-${item.title}`">
      <span>{{ item.period }}</span><h2>{{ item.title }}</h2><p v-if="item.detail">{{ item.detail }}</p>
    </li>
  </ol>
</template>

<style scoped>
.nutmeg-schedule { display: grid; gap: .7rem; grid-template-columns: repeat(var(--schedule-columns), minmax(0, 1fr)); list-style: none; margin: 0; padding: 0; }
.nutmeg-schedule--count-1 { --schedule-columns: 1; }
.nutmeg-schedule--count-2, .nutmeg-schedule--count-3, .nutmeg-schedule--count-4 { --schedule-columns: 2; }
.nutmeg-schedule--count-5, .nutmeg-schedule--count-6, .nutmeg-schedule--count-7, .nutmeg-schedule--count-8, .nutmeg-schedule--count-9, .nutmeg-schedule--count-10, .nutmeg-schedule--count-11, .nutmeg-schedule--count-12 { --schedule-columns: 4; }
li { background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-top: 3px solid var(--nutmeg-orange); min-height: 6.4rem; padding: .75rem .85rem; }
li:nth-child(3n + 2) { border-top-color: var(--nutmeg-yellow-light); }
li:nth-child(3n) { border-top-color: var(--nutmeg-orange-deep); }
span { color: var(--nutmeg-body); font-size: .68rem; font-weight: 700; letter-spacing: .04em; }
h2 { color: var(--nutmeg-ink); font-size: .9rem; line-height: 1.4; margin: .55rem 0 0; }
p { color: var(--nutmeg-body); font-size: .72rem; line-height: 1.45; margin: .35rem 0 0; }
.nutmeg-schedule--week li { min-height: 8rem; }
@media (max-width: 45rem) { .nutmeg-schedule { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
</style>
