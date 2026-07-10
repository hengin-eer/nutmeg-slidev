<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
import blackLogoUrl from '../assets/logo_mark_horizontal_black.svg?url'
import colorLogoUrl from '../assets/logo_mark_horizontal_color.svg?url'

type Presenter = {
  name: string
  /** A public-path or HTTPS URL. Omit it to show initials instead. */
  avatar?: string
  /** Optional profile or social URL. */
  url?: string
}

const props = defineProps<{
  category: string
  title: string
  updated?: string
  presenter?: Presenter
}>()

const { $slidev } = useSlideContext()
const failedAvatar = ref(false)
const options = computed(() => $slidev.themeConfigs.value?.nutmeg as { variant?: string; logo?: string } | undefined)
const variant = computed(() => {
  return options.value?.variant === 'brand-gradient' ? 'brand-gradient' : 'soft'
})
const showLogo = computed(() => options.value?.logo !== 'none')
const logoUrl = computed(() => variant.value === 'brand-gradient' ? blackLogoUrl : colorLogoUrl)
const presenterInitials = computed(() => Array.from(props.presenter?.name?.trim() ?? '').slice(0, 2).join(''))

watch(() => props.presenter?.avatar, () => {
  failedAvatar.value = false
})
</script>

<template>
  <section class="nutmeg-cover">
    <img
      v-if="showLogo"
      class="nutmeg-cover__logo"
      :src="logoUrl"
      alt="NUTMEG"
    />
    <p class="nutmeg-cover__category">{{ category }}</p>
    <h1>{{ title }}</h1>
    <div v-if="presenter" class="nutmeg-cover__presenter">
      <img
        v-if="presenter.avatar && !failedAvatar"
        class="nutmeg-cover__avatar"
        :src="presenter.avatar"
        :alt="`${presenter.name}のアバター`"
        @error="failedAvatar = true"
      />
      <span v-else class="nutmeg-cover__avatar nutmeg-cover__avatar--initials" aria-hidden="true">{{ presenterInitials }}</span>
      <a v-if="presenter.url" :href="presenter.url" target="_blank" rel="noreferrer">{{ presenter.name }}</a>
      <span v-else>{{ presenter.name }}</span>
    </div>
    <p v-if="updated" class="nutmeg-cover__updated">最終更新　{{ updated }}</p>
  </section>
</template>

<style scoped>
.nutmeg-cover { display: flex; flex-direction: column; height: 100%; justify-content: center; padding: 0 0.2rem; }
.nutmeg-cover__logo { height: auto; width: 11rem; }
.nutmeg-cover__category { color: var(--nutmeg-orange-deep); font-size: 0.95rem; font-weight: 700; letter-spacing: 0.06em; margin: 2.15rem 0 0.8rem; }
h1 { color: var(--nutmeg-ink); font-size: 3.15rem; font-weight: 700; letter-spacing: -0.065em; line-height: 1.18; margin: 0; max-inline-size: 23ch; text-wrap: balance; }
.nutmeg-cover__presenter { align-items: center; color: var(--nutmeg-body); display: flex; font-size: 0.94rem; font-weight: 700; gap: 0.65rem; margin-top: 1.55rem; }
.nutmeg-cover__avatar { border: 1px solid var(--nutmeg-card-border); border-radius: 50%; height: 2.3rem; object-fit: cover; width: 2.3rem; }
.nutmeg-cover__avatar--initials { align-items: center; background: var(--nutmeg-card-highlight-background); color: var(--nutmeg-ink); display: inline-flex; font-size: 0.72rem; justify-content: center; }
.nutmeg-cover__presenter a { color: inherit; text-decoration-color: var(--nutmeg-orange); text-decoration-thickness: 0.12em; text-underline-offset: 0.2em; }
.nutmeg-cover__updated { color: var(--nutmeg-body); font-size: 0.78rem; font-weight: 400; letter-spacing: 0.06em; margin: 1.15rem 0 0; }
</style>
