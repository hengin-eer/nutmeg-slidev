<script setup lang="ts">
defineProps<{ quote: string; source: string; role?: string; avatar?: string }>()
</script>

<template>
  <figure class="nutmeg-quote"><blockquote>“{{ quote }}”</blockquote><figcaption><img v-if="avatar" :src="avatar" :alt="`${source}のアイコン`" /><span><strong>{{ source }}</strong><small v-if="role">{{ role }}</small></span></figcaption></figure>
</template>

<style scoped>
.nutmeg-quote { border-left: .45rem solid var(--nutmeg-yellow-light); margin: 0; padding: 1rem 1.5rem; }
blockquote { color: var(--nutmeg-ink); font-size: 1.55rem; font-weight: 700; letter-spacing: -.04em; line-height: 1.55; margin: 0; }
figcaption { align-items: center; color: var(--nutmeg-body); display: flex; font-size: .82rem; gap: .65rem; margin-top: 1.2rem; }
img { border-radius: 50%; height: 2rem; object-fit: cover; width: 2rem; }
figcaption span { display: grid; gap: .1rem; }
small { font-size: .72rem; }
</style>
