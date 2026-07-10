<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

defineProps<{
  category: string
  title: string
  updated?: string
}>()

const { $slidev } = useSlideContext()
const variant = computed(() => {
  const options = $slidev.themeConfigs.value?.nutmeg as { variant?: string } | undefined
  return options?.variant === 'brand-gradient' ? 'brand-gradient' : 'soft'
})
</script>

<template>
  <section class="nutmeg-cover">
    <img
      class="nutmeg-cover__logo"
      :src="variant === 'brand-gradient' ? '../assets/logo_mark_horizontal_black.svg' : '../assets/logo_mark_horizontal_color.svg'"
      alt="NUTMEG"
    />
    <p class="nutmeg-cover__category">{{ category }}</p>
    <h1>{{ title }}</h1>
    <p v-if="updated" class="nutmeg-cover__updated">最終更新　{{ updated }}</p>
  </section>
</template>

<style scoped>
.nutmeg-cover { display: flex; flex-direction: column; height: 100%; justify-content: center; padding: 0 0.2rem; }
.nutmeg-cover__logo { height: auto; width: 11rem; }
.nutmeg-cover__category { color: var(--nutmeg-orange-deep); font-size: 0.95rem; font-weight: 700; letter-spacing: 0.06em; margin: 2.15rem 0 0.8rem; }
h1 { color: var(--nutmeg-ink); font-size: 3.15rem; font-weight: 700; letter-spacing: -0.065em; line-height: 1.18; margin: 0; max-width: 15ch; }
.nutmeg-cover__updated { color: var(--nutmeg-body); font-size: 0.78rem; font-weight: 400; letter-spacing: 0.06em; margin: 3rem 0 0; }
</style>
