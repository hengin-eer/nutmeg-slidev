<script setup lang="ts">
type Item = { title: string; detail?: string }

withDefaults(defineProps<{
  items: Item[]
  emphasis?: number
}>(), {
  emphasis: -1,
})
</script>

<template>
  <ol class="nutmeg-steps" :style="{ '--item-count': items.length }">
    <li v-for="(item, index) in items" :key="item.title" :class="{ 'nutmeg-steps__item--emphasis': index === emphasis }">
      <span>{{ String(index + 1).padStart(2, '0') }}</span>
      <strong>{{ item.title }}</strong>
      <small v-if="item.detail">{{ item.detail }}</small>
    </li>
  </ol>
</template>

<style scoped>
.nutmeg-steps { display: grid; grid-template-columns: repeat(var(--item-count), minmax(0, 1fr)); list-style: none; margin: 3rem 0 0; padding: 0; }
li { border-left: 1px solid var(--nutmeg-gray-200); display: flex; flex-direction: column; min-height: 8rem; padding: 0 1.2rem; }
li:first-child { border-left: 0; padding-left: 0; }
span { color: var(--nutmeg-gray-600); font-size: 0.76rem; font-weight: 700; letter-spacing: 0.08em; }
strong { color: var(--nutmeg-ink); font-size: 1.16rem; font-weight: 700; letter-spacing: -0.03em; line-height: 1.45; margin-top: 0.72rem; }
small { color: var(--nutmeg-body); font-size: 0.8rem; line-height: 1.65; margin-top: 0.45rem; }
.nutmeg-steps__item--emphasis span, .nutmeg-steps__item--emphasis strong { color: var(--nutmeg-orange-deep); }
</style>
