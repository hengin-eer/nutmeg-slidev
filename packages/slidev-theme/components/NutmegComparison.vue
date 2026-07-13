<script setup lang="ts">
type Subject = { id: string; name: string }
type Row = { label: string; values: Record<string, string> }
defineProps<{ subjects: Subject[]; rows: Row[]; highlightId?: string }>()
</script>

<template>
  <div v-if="subjects.length < 2 || !rows.length" class="nutmeg-empty-state">比較対象を2件以上、比較項目を1件以上指定してください。</div>
  <div v-else class="nutmeg-comparison" :style="{ '--subject-count': subjects.length }">
    <div class="nutmeg-comparison__head"><span></span><strong v-for="subject in subjects" :key="subject.id" :class="{ 'is-highlight': subject.id === highlightId }">{{ subject.name }}</strong></div>
    <div v-for="row in rows" :key="row.label" class="nutmeg-comparison__row"><strong>{{ row.label }}</strong><span v-for="subject in subjects" :key="subject.id" :class="{ 'is-highlight': subject.id === highlightId }">{{ row.values[subject.id] || '—' }}</span></div>
  </div>
</template>

<style scoped>
.nutmeg-comparison { border-top: 1px solid var(--nutmeg-card-border); display: grid; font-size: .82rem; }
.nutmeg-comparison__head, .nutmeg-comparison__row { display: grid; grid-template-columns: minmax(8rem, 1.2fr) repeat(var(--subject-count), minmax(0, 1fr)); }
.nutmeg-comparison__head > *, .nutmeg-comparison__row > * { border-bottom: 1px solid var(--nutmeg-card-border); border-right: 1px solid var(--nutmeg-card-border); padding: .75rem .8rem; }
.nutmeg-comparison__head > *:last-child, .nutmeg-comparison__row > *:last-child { border-right: 0; }
.nutmeg-comparison__head strong { color: var(--nutmeg-ink); font-size: .9rem; }
.nutmeg-comparison__row > strong { color: var(--nutmeg-body); }
.is-highlight { background: var(--nutmeg-card-highlight-background); color: var(--nutmeg-ink); font-weight: 700; }
</style>
