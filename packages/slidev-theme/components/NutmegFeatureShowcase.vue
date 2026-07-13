<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description: string
  image: string
  imageAlt: string
  points?: string[]
  imagePosition?: 'left' | 'right'
}>(), { points: () => [], imagePosition: 'right' })
</script>

<template>
  <section class="nutmeg-feature-showcase" :class="`nutmeg-feature-showcase--${imagePosition}`">
    <div class="nutmeg-feature-showcase__visual"><img :src="image" :alt="imageAlt" /></div>
    <div class="nutmeg-feature-showcase__copy">
      <p class="nutmeg-section-label">IN THE APP</p>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <ul v-if="points.length"><li v-for="point in points" :key="point">{{ point }}</li></ul>
    </div>
  </section>
</template>

<style scoped>
.nutmeg-feature-showcase { align-items: center; display: grid; gap: 2.2rem; grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); height: 100%; }
.nutmeg-feature-showcase--left { grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr); }
.nutmeg-feature-showcase--left .nutmeg-feature-showcase__visual { grid-column: 1; grid-row: 1; }
.nutmeg-feature-showcase--left .nutmeg-feature-showcase__copy { grid-column: 2; grid-row: 1; }
.nutmeg-feature-showcase__visual { background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-radius: .8rem; overflow: hidden; }
img { display: block; height: 22rem; object-fit: cover; width: 100%; }
h2 { color: var(--nutmeg-ink); font-size: 2rem; letter-spacing: -.05em; line-height: 1.25; margin: .8rem 0 .7rem; }
.nutmeg-feature-showcase__copy > p:not(.nutmeg-section-label) { color: var(--nutmeg-body); line-height: 1.7; margin: 0; }
ul { border-left: 3px solid var(--nutmeg-orange); display: grid; gap: .4rem; list-style: none; margin: 1.2rem 0 0; padding-left: 1rem; }
li { color: var(--nutmeg-ink); font-size: .85rem; line-height: 1.5; }
@media (max-width: 45rem) { .nutmeg-feature-showcase, .nutmeg-feature-showcase--left { grid-template-columns: 1fr; } .nutmeg-feature-showcase--left .nutmeg-feature-showcase__visual, .nutmeg-feature-showcase--left .nutmeg-feature-showcase__copy { grid-column: auto; grid-row: auto; } img { height: 11rem; } }
</style>
