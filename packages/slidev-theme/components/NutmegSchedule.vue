<script setup lang="ts">
type ScheduleItem = { period: string; title: string; detail?: string }
withDefaults(defineProps<{ scale?: 'year' | 'week' | 'custom'; items: ScheduleItem[] }>(), { scale: 'custom' })
</script>

<template>
  <div v-if="!items.length" class="nutmeg-empty-state">予定を1件以上指定してください。</div>
  <ol v-else class="nutmeg-schedule" :class="[`nutmeg-schedule--${scale}`, `nutmeg-schedule--count-${Math.min(items.length, 12)}`]">
    <li v-for="(item, index) in items" :key="`${item.period}-${item.title}`">
      <span class="nutmeg-schedule__index">{{ String(index + 1).padStart(2, '0') }}</span>
      <span class="nutmeg-schedule__period">{{ item.period }}</span><h2>{{ item.title }}</h2><p v-if="item.detail">{{ item.detail }}</p>
    </li>
  </ol>
</template>

<style scoped>
.nutmeg-schedule { display: grid; gap: 1.25rem; list-style: none; margin: 0; padding: 1.65rem 0 0; position: relative; }
.nutmeg-schedule::before { background: var(--nutmeg-card-border); content: ''; height: 1px; left: 0; position: absolute; right: 0; top: 2rem; }
.nutmeg-schedule--year { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.nutmeg-schedule--week { grid-template-columns: repeat(7, minmax(0, 1fr)); }
.nutmeg-schedule--custom { grid-template-columns: repeat(var(--schedule-columns), minmax(0, 1fr)); }
.nutmeg-schedule--count-1 { --schedule-columns: 1; }
.nutmeg-schedule--count-2, .nutmeg-schedule--count-3, .nutmeg-schedule--count-4 { --schedule-columns: 2; }
.nutmeg-schedule--count-5, .nutmeg-schedule--count-6, .nutmeg-schedule--count-7, .nutmeg-schedule--count-8, .nutmeg-schedule--count-9, .nutmeg-schedule--count-10, .nutmeg-schedule--count-11, .nutmeg-schedule--count-12 { --schedule-columns: 4; }
li { min-height: 8rem; padding: .8rem .15rem .6rem; position: relative; }
li::before { background: var(--nutmeg-orange); border: .25rem solid var(--nutmeg-white); border-radius: 50%; content: ''; height: .65rem; left: 0; position: absolute; top: .05rem; transform: translateY(-50%); width: .65rem; }
li:nth-child(3n + 2)::before { background: var(--nutmeg-yellow-light); }
li:nth-child(3n)::before { background: var(--nutmeg-orange-deep); }
.nutmeg-schedule__index { color: var(--nutmeg-orange); display: block; font-size: .64rem; font-weight: 700; letter-spacing: .08em; }
.nutmeg-schedule__period { color: var(--nutmeg-body); display: block; font-size: .7rem; font-weight: 700; letter-spacing: .04em; margin-top: .25rem; }
h2 { color: var(--nutmeg-ink); font-size: .9rem; line-height: 1.4; margin: .65rem 0 0; }
p { color: var(--nutmeg-body); font-size: .72rem; line-height: 1.55; margin: .45rem 0 0; }
.nutmeg-schedule--week li { min-height: 8.7rem; }
.nutmeg-schedule--week h2 { font-size: .82rem; }
@media (max-width: 45rem) { .nutmeg-schedule--year, .nutmeg-schedule--week, .nutmeg-schedule--custom { grid-template-columns: repeat(2, minmax(0, 1fr)); } .nutmeg-schedule::before { display: none; } }
</style>
