<script setup lang="ts">
import { computed } from 'vue'

export type NutmegVoice = {
  quote: string
  source: string
  role?: string
  avatar?: string
}

const props = withDefaults(defineProps<{
  items?: NutmegVoice[]
  quote?: string
  source?: string
  role?: string
  avatar?: string
}>(), { items: () => [] })

const voices = computed<NutmegVoice[]>(() => {
  if (props.items.length) return props.items
  if (props.quote && props.source) {
    return [{ quote: props.quote, source: props.source, role: props.role, avatar: props.avatar }]
  }
  return []
})
const hasTooMany = computed(() => voices.value.length > 4)
</script>

<template>
  <div v-if="!voices.length || hasTooMany" class="nutmeg-empty-state">
    <span v-if="!voices.length">ユーザーの声を1件以上指定してください。</span>
    <span v-else>ユーザーの声は4件までです。</span>
  </div>
  <div v-else class="nutmeg-quote-grid" :class="`nutmeg-quote-grid--count-${voices.length}`">
    <figure v-for="voice in voices" :key="`${voice.source}-${voice.quote}`" class="nutmeg-quote nutmeg-glass-surface">
      <span class="nutmeg-quote__mark" aria-hidden="true">“</span>
      <blockquote>{{ voice.quote }}</blockquote>
      <figcaption>
        <img v-if="voice.avatar" :src="voice.avatar" :alt="`${voice.source}のアイコン`" />
        <span><strong>{{ voice.source }}</strong><small v-if="voice.role">{{ voice.role }}</small></span>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.nutmeg-quote-grid { display: grid; gap: 1rem 1.2rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.nutmeg-quote-grid--count-1 { grid-template-columns: minmax(0, 1fr); }
.nutmeg-quote { background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-radius: .8rem; margin: 0; min-width: 0; padding: .95rem 1.1rem 1rem; }
.nutmeg-quote__mark { color: var(--nutmeg-orange); display: block; font-family: Georgia, serif; font-size: 2.25rem; font-weight: 700; height: 1.5rem; line-height: 1; }
blockquote { color: var(--nutmeg-ink); font-size: 1rem; font-weight: 700; letter-spacing: -.025em; line-height: 1.6; margin: .25rem 0 0; }
figcaption { align-items: center; color: var(--nutmeg-body); display: flex; font-size: .76rem; gap: .6rem; margin-top: .8rem; }
img { border-radius: 50%; height: 1.8rem; object-fit: cover; width: 1.8rem; }
figcaption span { display: grid; gap: .1rem; min-width: 0; }
figcaption strong { color: var(--nutmeg-ink); font-size: .76rem; overflow-wrap: anywhere; }
small { font-size: .67rem; }
@media (max-width: 45rem) { .nutmeg-quote-grid { grid-template-columns: 1fr; } }
</style>
