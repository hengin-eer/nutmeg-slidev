const entries = [
  { category: 'Foundation', title: '配色と余白', description: '標準版の色の役割と、資料全体で守る余白を確認する。', keywords: ['色', 'foundation', '余白', 'yellow', 'orange'], deck: 'slides/', slide: 2, code: String.raw`<NutmegTitle
  eyebrow="FOUNDATION"
  title="標準版は、柔らかな色と余白で内容を支える"
  lead="白・黒を基調に、3色は役割を持たせて使う。"
/>` },
  { category: 'Component', title: 'NutmegCard', description: '比較や役割の整理を、同じ密度の情報として並べる。', keywords: ['カード', '比較', '情報', 'card'], deck: 'slides/', slide: 3, code: String.raw`<div class="nutmeg-grid nutmeg-grid--3">
  <NutmegCard label="PLAIN" title="通常の情報">
    比較する情報を、同じ密度で置く。
  </NutmegCard>
</div>` },
  { category: 'Component', title: 'NutmegSteps', description: '順序が重要な内容を、番号と短い動詞で伝える。', keywords: ['ステップ', '順序', '手順', 'steps'], deck: 'slides/', slide: 4, code: String.raw`<NutmegSteps
  :items="[
    { title: '知る', detail: '状況を聞く' },
    { title: '整理する', detail: '論点を分ける' },
    { title: '決める', detail: '次の行動を置く' }
  ]"
  :emphasis="1"
/>` },
  { category: 'Component', title: 'NutmegTimeline', description: '時点と到達点を、一つの線で追えるようにする。', keywords: ['タイムライン', '時系列', '予定', 'timeline'], deck: 'slides/', slide: 5, code: String.raw`<NutmegTimeline :items="[
  { date: 'NOW', title: '始める', state: 'now' },
  { date: 'NEXT', title: '試す', state: 'planned' },
  { date: 'TARGET', title: '定着させる', state: 'target' }
]" />` },
  { category: 'Setting', title: 'ロゴとページ番号', description: 'ロゴの表示範囲と、全ページ共通のページ番号を選ぶ。', keywords: ['ロゴ', 'ページ番号', 'every-slide', 'cover-only'], deck: 'slides/', slide: 6, code: String.raw`---
themeConfig:
  nutmeg:
    logo: every-slide # cover-only | none
---` },
  { category: 'Guide', title: '部品の使い分け', description: '比較・順序・時間のどれを伝えたいかで部品を選ぶ。', keywords: ['使い方', 'guide', '比較', '順序', '時間'], deck: 'slides/', slide: 7, code: String.raw`比較なら NutmegCard、
順序なら NutmegSteps、
時間なら NutmegTimeline を使います。` },
  { category: 'Component', title: 'NutmegMemberGrid / strict', description: '12人までのメンバーを、名前と役割が読める密度で紹介する。', keywords: ['メンバー', 'member', 'grid', 'JSON', 'strict'], deck: 'slides/', slide: 8, code: String.raw`<NutmegMemberGrid :members="[
  {
    name: '技大情太郎',
    affiliation: '情経B4',
    roles: ['PM', 'Front']
  }
]" />` },
  { category: 'Component', title: 'NutmegMemberGrid / fluid', description: '人数に合わせて列数と文字サイズを調整し、3列×4行の密度を保つ。', keywords: ['メンバー', 'member', 'grid', 'fluid', '12人'], deck: 'slides/', slide: 9, code: String.raw`<NutmegMemberGrid
  fit="fluid"
  :members="members"
/>` },
  { category: 'Project', title: 'NutmegProjectOverview', description: 'プロジェクト名、対象、アプリの一文説明だけを提示する。', keywords: ['project', 'overview', '概要', 'アプリ'], deck: 'slides/', slide: 10, code: String.raw`<NutmegProjectOverview
  name="[プロジェクト名]"
  summary="[誰の、どの業務を、どう支えるかを一文で記載]"
  :audience="['[主な利用者]', '[連携する相手]']"
  image="./project-screen.svg"
  image-alt="[画面の説明]"
/>` },
  { category: 'Project', title: 'NutmegProjectMission', description: '対象者、現在の課題、目指す状態からミッションを組み立てる。', keywords: ['project', 'mission', 'ミッション', '課題'], deck: 'slides/', slide: 11, code: String.raw`<NutmegProjectMission
  statement="[プロジェクトが実現したい状態]"
  target="[支援する相手]"
  challenge="[現在起きている課題]"
  future="[導入後に実現したい状態]"
/>` },
  { category: 'Project', title: 'NutmegProjectSupport', description: 'アプリが利用者のどの業務を支えるかを分解して示す。', keywords: ['project', 'support', '支援', '機能'], deck: 'slides/', slide: 12, code: String.raw`<NutmegProjectSupport :items="[
  { title: '[支援内容 01]', detail: '[具体的に支える業務]' },
  { title: '[支援内容 02]', detail: '[具体的に支える業務]' },
  { title: '[支援内容 03]', detail: '[具体的に支える業務]' },
  { title: '[支援内容 04]', detail: '[具体的に支える業務]' }
]" />` },
  { category: 'Project', title: 'NutmegWorkGrid', description: 'プロジェクト内で実際に行う仕事内容を、行動単位で並べる。', keywords: ['project', 'work', '仕事内容', '役割'], deck: 'slides/', slide: 13, code: String.raw`<NutmegWorkGrid :items="[
  { title: '[仕事内容 01]', detail: '[誰と、何を整理する仕事か]', tags: ['[担当領域]'] },
  { title: '[仕事内容 02]', detail: '[どんな成果物をつくる仕事か]', tags: ['[担当領域]'] },
  { title: '[仕事内容 03]', detail: '[どう改善や運用を支える仕事か]', tags: ['[担当領域]'] },
  { title: '[仕事内容 04]', detail: '[チームでどんな役割を担うか]', tags: ['[担当領域]'] }
]" />` },
  { category: 'Project', title: 'NutmegFeatureShowcase', description: 'アプリ画面と説明を並べ、実際の利用場面をアピールする。', keywords: ['project', 'screen', '画面', 'showcase'], deck: 'slides/', slide: 14, code: String.raw`<NutmegFeatureShowcase
  title="[画面で実現できること]"
  description="[利用者がこの画面を使う場面と得られる価値]"
  image="./project-screen.svg"
  image-alt="[画面の説明]"
  :points="['[確認できる情報]', '[実行できる操作]', '[迷わなくなる点]']"
/>` },
  { category: 'Project', title: 'NutmegSchedule', description: '年間、週間などのスパンを切り替えて活動の流れを示す。', keywords: ['project', 'schedule', '年間', '週間', '予定'], deck: 'slides/', slide: 15, code: String.raw`<NutmegSchedule scale="year" :items="[
  { period: '[期間 01]', title: '[フェーズ名]', detail: '[この期間の目的]' },
  { period: '[期間 02]', title: '[フェーズ名]', detail: '[この期間の目的]' },
  { period: '[期間 03]', title: '[フェーズ名]', detail: '[この期間の目的]' },
  { period: '[期間 04]', title: '[フェーズ名]', detail: '[この期間の目的]' },
  { period: '[期間 05]', title: '[フェーズ名]', detail: '[この期間の目的]' }
]" />` },
  { category: 'Project', title: 'NutmegSchedule / week', description: '一週間の動きと、参加後の次の一歩を見える化する。', keywords: ['project', 'schedule', '週間', 'week', '予定'], deck: 'slides/', slide: 16, code: String.raw`<NutmegSchedule scale="week" :items="[
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' }
]" />` },
  { category: 'Project', title: 'NutmegComparison', description: '他プロジェクトとの違いを、同じ比較軸で整理する。', keywords: ['project', 'comparison', '比較', '違い'], deck: 'slides/', slide: 17, code: String.raw`<NutmegComparison
  highlight-id="project"
  :subjects="[
    { id: 'project', name: '[このプロジェクト]' },
    { id: 'target-a', name: '[比較対象 A]' },
    { id: 'target-b', name: '[比較対象 B]' }
  ]"
  :rows="rows"
/>` },
  { category: 'Project', title: 'NutmegProjectFacts', description: '規模や特徴を短い事実として見せる。', keywords: ['project', 'facts', '数字', '規模'], deck: 'slides/', slide: 18, code: String.raw`<NutmegProjectFacts :items="[
  { value: 'XX', label: '[数値の意味]', detail: '[集計条件や期間]' },
  { value: 'XX', label: '[数値の意味]', detail: '[集計条件や期間]' },
  { value: 'XX', label: '[数値の意味]', detail: '[集計条件や期間]' },
  { value: 'XX', label: '[数値の意味]', detail: '[集計条件や期間]' }
]" />` },
  { category: 'Project', title: 'NutmegQuote', description: '利用者やメンバーの声で、紹介に実感を加える。', keywords: ['project', 'quote', '声', 'インタビュー'], deck: 'slides/', slide: 19, code: String.raw`<NutmegQuote
  :items="[
    { quote: 'どこを見ればよいかが整理されていて、次にやることを決めやすくなりました。', source: '[利用者 A]', role: '[所属・立場]' },
    { quote: '確認のために何度も連絡する回数が減り、自分の作業に集中できました。', source: '[利用者 B]', role: '[所属・立場]' },
    { quote: '必要な情報が同じ場所にまとまっているので、途中から参加しても状況を追えました。', source: '[利用者 C]', role: '[所属・立場]' },
    { quote: '使って気づいたことを伝えると、次の改善に反映されるのがうれしいです。', source: '[利用者 D]', role: '[所属・立場]' }
  ]"
/>` },
  { category: 'Project', title: 'NutmegOnboarding', description: '新入生が参加してからの最初の一歩を示す。', keywords: ['project', 'onboarding', '新入生', '参加'], deck: 'slides/', slide: 20, code: String.raw`<NutmegOnboarding :steps="[
  { timing: '[タイミング]', title: '[最初の一歩]', detail: '[触れる情報や画面]' },
  { timing: '[タイミング]', title: '[次の一歩]', detail: '[チームで試すこと]' },
  { timing: '[タイミング]', title: '[届ける一歩]', detail: '[振り返る結果]' }
]" />` },
  { category: 'Project', title: 'NutmegRecruitMessage', description: '新入生へ、参加後に得られる経験まで含めて伝える。', keywords: ['project', 'recruit', '勧誘', '新入生', 'message'], deck: 'slides/', slide: 21, code: String.raw`<NutmegRecruitMessage
  copy="[新入生へ届けたい一番のコピー]"
  message="[参加すると経験できることと、歓迎する姿勢]"
  action="[見学・相談など、次の行動]"
  image="./project-team.svg"
  image-alt="[チームや活動の説明]"
/>` },
]

const variantLinks = [
  { label: '標準版', href: 'slides/' },
  { label: 'Contrast', href: 'slides/contrast/' },
  { label: 'Brand gradient', href: 'slides/brand-gradient/' },
]
const categories = ['すべて', ...new Set(entries.map((entry) => entry.category))]
const search = document.querySelector('#catalog-search')
const filters = document.querySelector('#catalog-filters')
const items = document.querySelector('#catalog-items')
const summary = document.querySelector('#result-summary')
const dialog = document.querySelector('#preview-dialog')
const frame = document.querySelector('#preview-frame')
const previewTitle = document.querySelector('#preview-title')
const previewOpen = document.querySelector('#preview-open')
const previewCode = document.querySelector('#preview-code-content')
const previewCopy = document.querySelector('#preview-copy')
const copyStatus = document.querySelector('#copy-status')
const packageTabs = [...document.querySelectorAll('[data-package-tab]')]
let category = 'すべて'
let activeEntry = null

function hrefFor(relative) {
  return new URL(relative, window.location.href).href
}

function previewHref(entry) {
  return hrefFor(`${entry.deck}?embedded=true#/${entry.slide}`)
}

function openHref(entry) {
  return hrefFor(`${entry.deck}#/${entry.slide}`)
}

function matches(entry, query) {
  const haystack = [entry.category, entry.title, entry.description, ...entry.keywords].join(' ').toLowerCase()
  return (category === 'すべて' || entry.category === category) && haystack.includes(query.toLowerCase())
}

function renderFilters() {
  filters.replaceChildren()
  categories.forEach((item) => {
    const button = document.createElement('button')
    button.className = `filter ${item === category ? 'is-active' : ''}`
    button.type = 'button'
    button.textContent = item
    button.addEventListener('click', () => { category = item; render() })
    filters.append(button)
  })
  const divider = document.createElement('span')
  divider.className = 'filter-divider'
  filters.append(divider)
  variantLinks.forEach((item) => {
    const link = document.createElement('a')
    link.className = 'variant-link'
    link.href = hrefFor(item.href)
    link.textContent = item.label
    filters.append(link)
  })
}

function renderItems() {
  const shown = entries.filter((entry) => matches(entry, search.value.trim()))
  summary.textContent = `${shown.length}件の部品・ガイド`
  items.replaceChildren()
  if (!shown.length) {
    const empty = document.createElement('p')
    empty.className = 'empty-state'
    empty.textContent = '一致する部品がありません。別の語句で検索してください。'
    items.append(empty)
    return
  }
  shown.forEach((entry) => {
    const card = document.createElement('article')
    card.className = 'catalog-card'
    const categoryLabel = document.createElement('p')
    categoryLabel.className = 'card-category'
    categoryLabel.textContent = entry.category
    const title = document.createElement('h2')
    title.textContent = entry.title
    const description = document.createElement('p')
    description.textContent = entry.description
    const actions = document.createElement('div')
    actions.className = 'card-actions'
    const previewButton = document.createElement('button')
    previewButton.className = 'preview-button'
    previewButton.type = 'button'
    previewButton.textContent = 'プレビューとコード'
    previewButton.addEventListener('click', () => openPreview(entry))
    const link = document.createElement('a')
    link.href = openHref(entry)
    link.textContent = 'スライドを開く →'
    actions.append(previewButton, link)
    card.append(categoryLabel, title, description, actions)
    items.append(card)
  })
}

function render() {
  renderFilters()
  renderItems()
}

function openPreview(entry) {
  activeEntry = entry
  previewTitle.textContent = entry.title
  previewOpen.href = openHref(entry)
  frame.src = previewHref(entry)
  previewCode.textContent = entry.code
  dialog.showModal()
}

function closePreview() {
  activeEntry = null
  frame.src = 'about:blank'
  dialog.close()
}

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text)
    copyStatus.textContent = `${label}をコピーしました。`
  } catch {
    copyStatus.textContent = 'コピーできませんでした。コードを選択してコピーしてください。'
  }
}

function activatePackageTab(tab) {
  const manager = tab.dataset.packageTab
  packageTabs.forEach((candidate) => {
    const isActive = candidate === tab
    candidate.classList.toggle('is-active', isActive)
    candidate.setAttribute('aria-selected', String(isActive))
  })
  document.querySelectorAll('[data-package-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.packagePanel !== manager
  })
}

packageTabs.forEach((tab) => {
  if (!tab.disabled) tab.addEventListener('click', () => activatePackageTab(tab))
})

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.querySelector(`#${button.dataset.copyTarget}`)
    copyText(target.textContent, 'コマンド')
  })
})
previewCopy.addEventListener('click', () => { if (activeEntry) copyText(activeEntry.code, '利用コード') })
search.addEventListener('input', renderItems)
document.querySelector('#preview-close').addEventListener('click', closePreview)
dialog.addEventListener('click', (event) => { if (event.target === dialog) closePreview() })
dialog.addEventListener('close', () => { frame.src = 'about:blank' })
activatePackageTab(packageTabs.find((tab) => tab.classList.contains('is-active')) ?? packageTabs[0])
render()
