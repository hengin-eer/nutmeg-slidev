<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const variant = computed(() => (($slidev.configs.themeConfig?.nutmeg as { variant?: string } | undefined)?.variant === 'brand-gradient' ? 'brand-gradient' : 'soft'))
</script>

<template><div class="slidev-layout nutmeg-layout nutmeg-project-layout nutmeg-project-layout--overview" :class="`nutmeg-layout--${variant}`"><slot /></div></template>

<style scoped>
.nutmeg-project-layout { display: flex; flex-direction: column; justify-content: center; }
.nutmeg-project-layout--overview { overflow: hidden; }
</style>
