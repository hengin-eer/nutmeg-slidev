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
.nutmeg-project-mission { display: flex; flex-direction: column; height: 100%; justify-content: center; }
h2 { color: var(--nutmeg-ink); font-size: 2.45rem; letter-spacing: -.06em; line-height: 1.25; margin: .8rem 0 2.4rem; max-width: 25ch; }
.nutmeg-project-mission__columns { border-top: 1px solid var(--nutmeg-card-border); display: grid; gap: 1.4rem; grid-template-columns: repeat(3, minmax(0, 1fr)); padding-top: 1.3rem; }
article { border-left: 3px solid var(--nutmeg-yellow-light); padding-left: .95rem; }
article:nth-child(2) { border-color: var(--nutmeg-orange); }
article:nth-child(3) { border-color: var(--nutmeg-orange-deep); }
article p { color: var(--nutmeg-body); font-size: .76rem; font-weight: 700; margin: 0 0 .45rem; }
strong { color: var(--nutmeg-ink); display: block; font-size: 1rem; line-height: 1.65; }
@media (max-width: 45rem) { h2 { font-size: 1.8rem; } .nutmeg-project-mission__columns { grid-template-columns: 1fr; } }
</style>
