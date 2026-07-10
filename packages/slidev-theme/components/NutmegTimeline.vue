<script setup lang="ts">
type Item = { date: string; title: string; detail?: string; state: 'now' | 'planned' | 'target' }
defineProps<{ items: Item[] }>()
</script>

<template>
  <ol class="nutmeg-timeline" :style="{ '--item-count': items.length }">
    <li v-for="item in items" :key="item.date" :class="`nutmeg-timeline__item--${item.state}`">
      <i aria-hidden="true" />
      <p>{{ item.date }}</p>
      <h2>{{ item.title }}</h2>
      <small v-if="item.detail">{{ item.detail }}</small>
    </li>
  </ol>
</template>

<style scoped>
.nutmeg-timeline { display: grid; grid-template-columns: repeat(var(--item-count), minmax(0, 1fr)); list-style: none; margin: 3.1rem 0 0; padding: 0; position: relative; }
.nutmeg-timeline::before { background: var(--nutmeg-gray-200); content: ""; height: 1px; left: 0; position: absolute; right: 0; top: 0.42rem; }
li { min-height: 10rem; padding: 1.6rem 1rem 0; position: relative; }
li:first-child { padding-left: 0; }
i { background: var(--nutmeg-white); border: 2px solid var(--nutmeg-gray-600); border-radius: 50%; height: 0.75rem; left: 1rem; position: absolute; top: 0; width: 0.75rem; }
li:first-child i { left: 0; }
p { color: var(--nutmeg-gray-600); font-size: 0.74rem; font-style: normal; font-weight: 700; letter-spacing: 0.03em; line-height: 1.45; margin: 0; }
h2 { color: var(--nutmeg-ink); font-size: 1rem; font-weight: 700; letter-spacing: -0.03em; line-height: 1.45; margin: 0.7rem 0 0; }
small { color: var(--nutmeg-body); font-size: 0.82rem; line-height: 1.6; margin-top: 0.4rem; }
.nutmeg-timeline__item--now i { border-color: var(--nutmeg-orange); }
.nutmeg-timeline__item--now p { color: var(--nutmeg-orange); }
.nutmeg-timeline__item--target i { border-color: var(--nutmeg-orange-deep); }
.nutmeg-timeline__item--target p { color: var(--nutmeg-orange-deep); }
</style>
