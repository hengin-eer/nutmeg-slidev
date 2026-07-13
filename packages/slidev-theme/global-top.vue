<script setup lang="ts">
import { computed, onBeforeUnmount, watchEffect } from 'vue'
import { useSlideContext } from '@slidev/client'
import blackLogoUrl from './assets/logo_mark_horizontal_black.svg?url'

type NutmegOptions = {
  variant?: 'soft' | 'contrast' | 'brand-gradient'
  /** `footer` is kept as a compatibility alias for `every-slide`. */
  logo?: 'every-slide' | 'footer' | 'cover-only' | 'none'
}

const { $slidev } = useSlideContext()
const options = computed<NutmegOptions>(() => ($slidev.configs.themeConfig?.nutmeg as NutmegOptions | undefined) ?? {})
const variant = computed(() => options.value.variant ?? 'soft')
const logo = computed(() => options.value.logo ?? 'every-slide')
const showHeaderLogo = computed(() => (
  (logo.value === 'every-slide' || logo.value === 'footer')
  && $slidev.nav.currentPage > 1
))

watchEffect(() => {
  document.documentElement.dataset.nutmegVariant = variant.value
})

onBeforeUnmount(() => {
  delete document.documentElement.dataset.nutmegVariant
})
</script>

<template>
  <header v-if="showHeaderLogo" class="nutmeg-header-logo" aria-label="NUTMEG">
    <img :src="blackLogoUrl" alt="NUTMEG" />
  </header>
  <footer class="nutmeg-page-number" aria-label="スライド番号">
    <SlideCurrentNo /> / <SlidesTotal />
  </footer>
</template>

<style scoped>
.nutmeg-header-logo {
  line-height: 0;
  position: absolute;
  right: 2.2rem;
  top: 1.45rem;
}

.nutmeg-header-logo img { display: block; height: auto; width: 5.3rem; }

.nutmeg-page-number {
  bottom: 1.45rem;
  color: var(--nutmeg-body);
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1;
  position: absolute;
  right: 2.2rem;
}
</style>
