<script setup lang="ts">
type Step = { title: string; detail: string; timing?: string }
defineProps<{ steps: Step[] }>()
</script>

<template>
  <div v-if="!steps.length" class="nutmeg-empty-state">参加後のステップを1件以上指定してください。</div>
  <ol v-else class="nutmeg-onboarding" :style="{ '--step-count': steps.length }"><li v-for="(step, index) in steps" :key="step.title"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><small v-if="step.timing">{{ step.timing }}</small><h2>{{ step.title }}</h2><p>{{ step.detail }}</p></div></li></ol>
</template>

<style scoped>
.nutmeg-onboarding { display: grid; gap: 0; grid-template-columns: repeat(var(--step-count), minmax(0, 1fr)); list-style: none; margin: 0; padding: 1.7rem 0 0; position: relative; }
.nutmeg-onboarding::before { background: var(--nutmeg-card-border); content: ''; height: 1px; left: 0; position: absolute; right: 0; top: .45rem; }
li { min-height: 0; padding: 0 1rem; position: relative; }
li::before { background: var(--nutmeg-orange); border: .25rem solid var(--nutmeg-white); border-radius: 50%; content: ''; height: .65rem; left: 1rem; position: absolute; top: -1.6rem; width: .65rem; }
li:first-child { padding-left: 0; }
li:first-child::before { left: 0; }
span { color: var(--nutmeg-orange-deep); font-size: .78rem; font-weight: 700; letter-spacing: .08em; }
small { color: var(--nutmeg-body); font-size: .68rem; }
h2 { color: var(--nutmeg-ink); font-size: 1rem; margin: .65rem 0 .4rem; }
p { color: var(--nutmeg-body); font-size: .8rem; line-height: 1.6; margin: 0; }
</style>
