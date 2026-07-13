<script setup lang="ts">
defineProps<{
  statement: string
  target: string
  challenge: string
  future: string
}>()
</script>

<template>
  <section class="nutmeg-project-mission">
    <p class="nutmeg-section-label">PROJECT MISSION</p>
    <h2>{{ statement }}</h2>
    <div class="nutmeg-project-mission__columns">
      <article><p>対象者</p><strong>{{ target }}</strong></article>
      <article><p>現在の課題</p><strong>{{ challenge }}</strong></article>
      <article><p>目指す状態</p><strong>{{ future }}</strong></article>
    </div>
  </section>
</template>

<style scoped>
.nutmeg-project-mission { display: grid; gap: clamp(.9rem, 2vw, 1.5rem); min-height: 0; }
.nutmeg-project-mission h2 { color: var(--nutmeg-ink); font-size: clamp(1.7rem, 3.25vw, 2.35rem); letter-spacing: -.06em; line-height: 1.2; margin: .45rem 0 0; max-width: 48ch; }
.nutmeg-project-mission__columns { display: grid; gap: clamp(1.2rem, 3vw, 2rem); grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: .25rem; }
article { padding: .85rem 0 0; position: relative; }
article::before { background: var(--nutmeg-yellow-light); content: ''; display: block; height: 3px; margin-bottom: .75rem; width: 2.25rem; }
article:nth-child(2)::before { background: var(--nutmeg-orange); }
article:nth-child(3)::before { background: var(--nutmeg-orange-deep); }
article p { color: var(--nutmeg-body); font-size: .76rem; font-weight: 700; margin: 0 0 .45rem; }
strong { color: var(--nutmeg-ink); display: block; font-size: .98rem; line-height: 1.6; }
@media (max-width: 45rem) { h2 { font-size: 1.8rem; } .nutmeg-project-mission__columns { grid-template-columns: 1fr; } }
</style>
