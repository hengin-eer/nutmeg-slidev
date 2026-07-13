<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const variant = computed(() => {
  const value = ($slidev.themeConfigs.value?.nutmeg as { variant?: string } | undefined)?.variant
  return value === 'contrast' || value === 'brand-gradient' ? value : 'soft'
})
</script>

<template>
  <div class="slidev-layout nutmeg-layout" :class="`nutmeg-layout--${variant}`"><slot /></div>
</template>
