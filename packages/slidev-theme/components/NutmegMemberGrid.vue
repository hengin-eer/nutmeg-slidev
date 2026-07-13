<script setup lang="ts">
import { computed, ref } from 'vue'

export type NutmegMember = {
  id?: string
  name: string
  avatar?: string
  affiliation: string
  roles: string[]
}

const props = withDefaults(defineProps<{
  members: NutmegMember[]
  fit?: 'strict' | 'fluid'
}>(), { fit: 'strict' })

const failedAvatars = ref(new Set<string>())
const limit = computed(() => 12)
const hasTooMany = computed(() => props.members.length > limit.value)
const hasNone = computed(() => props.members.length === 0)
const columns = computed(() => {
  const count = props.members.length
  return count <= 1 ? 1 : count <= 4 ? 2 : 3
})
const rows = computed(() => Math.ceil(props.members.length / columns.value))

function memberKey(member: NutmegMember, index: number) {
  return member.id || `${member.name}-${index}`
}

function initials(name: string) {
  return Array.from(name.trim()).slice(0, 2).join('') || '？'
}

function hasFailed(member: NutmegMember, index: number) {
  return failedAvatars.value.has(memberKey(member, index))
}

function markFailed(member: NutmegMember, index: number) {
  const next = new Set(failedAvatars.value)
  next.add(memberKey(member, index))
  failedAvatars.value = next
}
</script>

<template>
  <div v-if="hasNone || hasTooMany" class="nutmeg-member-grid__message nutmeg-empty-state">
    <span v-if="hasNone">メンバー情報を1名以上指定してください。</span>
    <span v-else>メンバーは{{ limit }}名までです。複数のスライドへ分けてください。</span>
  </div>
  <div
    v-else
    class="nutmeg-member-grid"
    :class="[`nutmeg-member-grid--${fit}`, `nutmeg-member-grid--columns-${columns}`, `nutmeg-member-grid--rows-${rows}`]"
    :style="{ '--member-rows': rows }"
  >
    <article v-for="(member, index) in members" :key="memberKey(member, index)" class="nutmeg-member nutmeg-glass-surface">
      <img
        v-if="member.avatar && !hasFailed(member, index)"
        class="nutmeg-member__avatar"
        :src="member.avatar"
        :alt="`${member.name}のアイコン`"
        @error="markFailed(member, index)"
      />
      <span v-else class="nutmeg-member__avatar nutmeg-member__avatar--initials" aria-hidden="true">
        {{ initials(member.name) }}
      </span>
      <div class="nutmeg-member__identity">
        <h3>{{ member.name }}</h3>
        <p>{{ member.affiliation }}</p>
        <ul v-if="member.roles.length" aria-label="NUTMEG内の所属">
          <li v-for="role in member.roles" :key="role">{{ role }}</li>
        </ul>
      </div>
    </article>
  </div>
</template>

<style scoped>
.nutmeg-member-grid { align-items: stretch; display: grid; gap: .7rem .85rem; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(var(--member-columns), minmax(0, 1fr)); min-height: 0; }
.nutmeg-member-grid--columns-1 { --member-columns: 1; }
.nutmeg-member-grid--columns-2 { --member-columns: 2; }
.nutmeg-member-grid--columns-3 { --member-columns: 3; }
.nutmeg-member-grid--columns-4 { --member-columns: 4; }
.nutmeg-member { align-items: center; background: var(--nutmeg-card-background); border: 1px solid var(--nutmeg-card-border); border-radius: .75rem; display: flex; gap: .65rem; min-height: 0; min-width: 0; padding: .6rem .7rem; }
.nutmeg-member__avatar { background: var(--nutmeg-card-highlight-background); border: 1px solid var(--nutmeg-card-border); border-radius: 50%; flex: 0 0 auto; height: 3rem; object-fit: cover; width: 3rem; }
.nutmeg-member__avatar--initials { align-items: center; color: var(--nutmeg-ink); display: inline-flex; font-size: .82rem; font-weight: 700; justify-content: center; }
.nutmeg-member__identity { min-width: 0; }
h3 { color: var(--nutmeg-ink); font-size: .98rem; line-height: 1.35; margin: 0; overflow-wrap: anywhere; }
p { color: var(--nutmeg-body); font-size: .75rem; line-height: 1.4; margin: .18rem 0 0; }
ul { display: flex; flex-wrap: wrap; gap: .25rem; list-style: none; margin: .35rem 0 0; padding: 0; }
li { background: var(--nutmeg-card-action-background); border-radius: 999px; color: var(--nutmeg-orange-deep); font-size: .63rem; line-height: 1.3; padding: .16rem .38rem; }
.nutmeg-member-grid--fluid .nutmeg-member { gap: .45rem; padding: .45rem .55rem; }
.nutmeg-member-grid--fluid .nutmeg-member__avatar { height: 2.35rem; width: 2.35rem; }
.nutmeg-member-grid--fluid h3 { font-size: .78rem; }
.nutmeg-member-grid--fluid p { font-size: .63rem; }
.nutmeg-member-grid--fluid ul { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.nutmeg-member-grid--fluid li { background: transparent; border-radius: 0; color: var(--nutmeg-orange-deep); display: inline; font-size: .58rem; padding: 0; }
.nutmeg-member-grid--fluid li:not(:last-child)::after { content: ' · '; }
.nutmeg-member-grid__message { margin-top: 1rem; }
@media (max-width: 40rem) { .nutmeg-member-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .nutmeg-member-grid--columns-1 { grid-template-columns: 1fr; } }
</style>
