<script setup lang="ts">
type Step = { title: string; detail: string; timing?: string }
defineProps<{ steps: Step[] }>()
</script>

<template>
  <div v-if="!steps.length" class="nutmeg-empty-state">参加後のステップを1件以上指定してください。</div>
  <ol v-else class="nutmeg-onboarding" :style="{ '--step-count': steps.length }"><li v-for="(step, index) in steps" :key="step.title"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><small v-if="step.timing">{{ step.timing }}</small><h2>{{ step.title }}</h2><p>{{ step.detail }}</p></div></li></ol>
</template>

<style scoped>
.nutmeg-onboarding { display: grid; gap: 0; grid-template-columns: repeat(var(--step-count), minmax(0, 1fr)); list-style: none; margin: 0; padding: 0; }
li { border-left: 1px solid var(--nutmeg-card-border); min-height: 9rem; padding: 0 1rem; }
li:first-child { border-left: 0; padding-left: 0; }
span { color: var(--nutmeg-orange-deep); font-size: .78rem; font-weight: 700; letter-spacing: .08em; }
small { color: var(--nutmeg-body); font-size: .68rem; }
h2 { color: var(--nutmeg-ink); font-size: 1rem; margin: .65rem 0 .4rem; }
p { color: var(--nutmeg-body); font-size: .8rem; line-height: 1.6; margin: 0; }
</style>
