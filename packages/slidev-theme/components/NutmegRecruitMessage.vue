<script setup lang="ts">
withDefaults(defineProps<{
  copy: string
  message: string
  image?: string
  imageAlt?: string
  action?: string
  speaker?: string
}>(), { imageAlt: 'プロジェクトのイメージ' })
</script>

<template>
  <section class="nutmeg-recruit-message">
    <div class="nutmeg-recruit-message__copy"><p class="nutmeg-section-label">FOR NEW MEMBERS</p><h2>{{ copy }}</h2><p>{{ message }}</p><strong v-if="action" class="nutmeg-recruit-message__action">{{ action }} →</strong><small v-if="speaker">{{ speaker }}</small></div>
    <div v-if="image" class="nutmeg-recruit-message__visual nutmeg-glass-surface"><img :src="image" :alt="imageAlt" /></div>
    <div v-else class="nutmeg-recruit-message__visual nutmeg-recruit-message__visual--placeholder nutmeg-glass-surface"><span>YOUR NEXT PROJECT</span></div>
  </section>
</template>

<style scoped>
.nutmeg-recruit-message { align-items: center; display: grid; gap: clamp(1.4rem, 3vw, 2.3rem); grid-template-columns: minmax(0, 1fr) minmax(17rem, .8fr); min-height: 0; }
h2 { color: var(--nutmeg-ink); font-size: clamp(2rem, 4vw, 2.8rem); letter-spacing: -.07em; line-height: 1.15; margin: .65rem 0 .85rem; max-width: 18ch; }
.nutmeg-recruit-message__copy > p:not(.nutmeg-section-label) { color: var(--nutmeg-body); line-height: 1.75; margin: 0; max-width: 34rem; }
.nutmeg-recruit-message__action { color: var(--nutmeg-orange-deep); display: block; font-size: .9rem; margin-top: 1.3rem; }
small { color: var(--nutmeg-body); display: block; font-size: .72rem; margin-top: 1.5rem; }
.nutmeg-recruit-message__visual { background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-radius: 1rem; min-height: 15rem; overflow: hidden; }
img { display: block; height: 100%; object-fit: cover; width: 100%; }
.nutmeg-recruit-message__visual--placeholder { align-items: center; background: var(--nutmeg-card-highlight-background); color: var(--nutmeg-orange); display: flex; font-size: .78rem; font-weight: 700; justify-content: center; letter-spacing: .12em; }
@media (max-width: 45rem) { .nutmeg-recruit-message { grid-template-columns: 1fr; } .nutmeg-recruit-message__visual { min-height: 9rem; } h2 { font-size: 2rem; } }
</style>
