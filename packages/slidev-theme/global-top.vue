<script setup lang="ts">
import { computed, onBeforeUnmount, watchEffect } from 'vue'
import { useSlideContext } from '@slidev/client'

type NutmegOptions = {
  variant?: 'soft' | 'contrast' | 'brand-gradient'
  logo?: 'footer' | 'cover-only' | 'none'
}

const { $slidev } = useSlideContext()
const options = computed<NutmegOptions>(() => ($slidev.themeConfigs.value?.nutmeg as NutmegOptions | undefined) ?? {})
const variant = computed(() => options.value.variant ?? 'soft')
const logo = computed(() => options.value.logo ?? 'footer')

watchEffect(() => {
  document.documentElement.dataset.nutmegVariant = variant.value
})

onBeforeUnmount(() => {
  delete document.documentElement.dataset.nutmegVariant
})
</script>

<template>
  <footer v-if="logo === 'footer'" class="nutmeg-footer" aria-label="NUTMEG">
    <img src="./assets/logo_mark_horizontal_black.svg" alt="NUTMEG" />
  </footer>
</template>

<style scoped>
.nutmeg-footer {
  bottom: 1.45rem;
  line-height: 0;
  position: absolute;
  right: 2.2rem;
}

img { display: block; height: auto; width: 5.3rem; }
</style>
