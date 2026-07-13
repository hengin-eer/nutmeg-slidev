<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  summary: string
  audience?: string[]
  image?: string
  imageAlt?: string
}>(), { audience: () => [], imageAlt: 'プロジェクトのイメージ' })
</script>

<template>
  <section class="nutmeg-project-overview">
    <div class="nutmeg-project-overview__copy">
      <p class="nutmeg-section-label">PROJECT OVERVIEW</p>
      <h2>{{ name }}</h2>
      <p class="nutmeg-project-overview__summary">{{ summary }}</p>
      <ul v-if="audience.length" class="nutmeg-project-overview__audience">
        <li v-for="item in audience" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div v-if="image" class="nutmeg-project-overview__visual nutmeg-glass-surface">
      <img :src="image" :alt="imageAlt" />
    </div>
    <div v-else class="nutmeg-project-overview__visual nutmeg-project-overview__visual--placeholder nutmeg-glass-surface" aria-label="画像を置く場所">
      <span>PROJECT VISUAL</span>
    </div>
  </section>
</template>

<style scoped>
.nutmeg-project-overview { align-items: center; display: grid; gap: clamp(1.4rem, 3vw, 2.4rem); grid-template-columns: minmax(0, 1.05fr) minmax(18rem, .95fr); min-height: 0; }
.nutmeg-project-overview__copy { align-self: center; }
.nutmeg-project-overview h2 { color: var(--nutmeg-ink); font-size: clamp(2.2rem, 4.4vw, 3.45rem); letter-spacing: -.065em; line-height: 1.12; margin: .65rem 0 .9rem; max-width: 18ch; }
.nutmeg-project-overview__summary { color: var(--nutmeg-body); font-size: clamp(1rem, 1.55vw, 1.18rem); line-height: 1.7; margin: 0; max-width: 36rem; }
.nutmeg-project-overview__audience { color: var(--nutmeg-body); display: flex; flex-wrap: wrap; gap: .45rem 1rem; list-style: none; margin: 1.25rem 0 0; padding: 0; }
.nutmeg-project-overview__audience li { font-size: .82rem; font-weight: 700; }
.nutmeg-project-overview__audience li::before { color: var(--nutmeg-orange); content: '↗'; margin-right: .35rem; }
.nutmeg-project-overview__visual { align-items: center; aspect-ratio: 16 / 10; background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-radius: 1rem; display: flex; min-height: 12rem; overflow: hidden; }
.nutmeg-project-overview__visual img { display: block; height: auto; object-fit: cover; width: 100%; }
.nutmeg-project-overview__visual--placeholder { background: var(--nutmeg-card-highlight-background); color: var(--nutmeg-orange); font-size: .78rem; font-weight: 700; justify-content: center; letter-spacing: .12em; }
@media (max-width: 45rem) { .nutmeg-project-overview { grid-template-columns: 1fr; } .nutmeg-project-overview__visual { min-height: 9rem; } }
</style>
