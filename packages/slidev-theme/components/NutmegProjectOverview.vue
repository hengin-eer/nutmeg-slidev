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
    <div v-if="image" class="nutmeg-project-overview__visual">
      <img :src="image" :alt="imageAlt" />
    </div>
    <div v-else class="nutmeg-project-overview__visual nutmeg-project-overview__visual--placeholder" aria-label="画像を置く場所">
      <span>PROJECT VISUAL</span>
    </div>
  </section>
</template>

<style scoped>
.nutmeg-project-overview { align-items: stretch; display: grid; gap: 2.2rem; grid-template-columns: minmax(0, 1fr) minmax(18rem, .9fr); height: 100%; }
.nutmeg-project-overview__copy { align-self: center; }
h2 { color: var(--nutmeg-ink); font-size: 2.8rem; letter-spacing: -.06em; line-height: 1.18; margin: .8rem 0 1rem; max-width: 14ch; }
.nutmeg-project-overview__summary { color: var(--nutmeg-body); font-size: 1.1rem; line-height: 1.75; margin: 0; max-width: 34rem; }
.nutmeg-project-overview__audience { border-left: 3px solid var(--nutmeg-orange); color: var(--nutmeg-body); display: grid; gap: .35rem; list-style: none; margin: 1.5rem 0 0; padding: .1rem 0 .1rem 1rem; }
.nutmeg-project-overview__audience li::before { color: var(--nutmeg-orange); content: '—'; margin-right: .45rem; }
.nutmeg-project-overview__visual { align-items: center; background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-radius: 1rem; display: flex; min-height: 17rem; overflow: hidden; }
.nutmeg-project-overview__visual img { display: block; height: 100%; object-fit: cover; width: 100%; }
.nutmeg-project-overview__visual--placeholder { background: var(--nutmeg-card-highlight-background); color: var(--nutmeg-orange); font-size: .78rem; font-weight: 700; justify-content: center; letter-spacing: .12em; }
@media (max-width: 45rem) { .nutmeg-project-overview { grid-template-columns: 1fr; } .nutmeg-project-overview__visual { min-height: 9rem; } }
</style>
