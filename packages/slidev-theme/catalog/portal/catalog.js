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
  { category: 'Component', title: 'NutmegMemberGrid / fluid', description: '人数が多い場合に、列数と文字サイズを調整して表示する。', keywords: ['メンバー', 'member', 'grid', 'fluid', '18人'], deck: 'slides/', slide: 9, code: String.raw`<NutmegMemberGrid
  fit="fluid"
  :members="members"
/>` },
  { category: 'Project', title: 'NutmegProjectOverview', description: 'プロジェクト名、対象、アプリの一文説明だけを提示する。', keywords: ['project', 'overview', '概要', 'アプリ'], deck: 'slides/', slide: 10, code: String.raw`<NutmegProjectOverview
  name="Campus Bridge"
  summary="学園祭の参加団体と実行委員会をつなぐ運営アプリ"
  :audience="['参加団体', '実行委員会']"
  image="./project-screen.svg"
  image-alt="プロジェクト画面"
/>` },
  { category: 'Project', title: 'NutmegProjectMission', description: '対象者、現在の課題、目指す状態からミッションを組み立てる。', keywords: ['project', 'mission', 'ミッション', '課題'], deck: 'slides/', slide: 11, code: String.raw`<NutmegProjectMission
  statement="準備に必要な情報と次の行動が、迷わず見つかる状態をつくる"
  target="参加団体と実行委員会"
  challenge="情報が複数の場所に分散している"
  future="一つの場所で準備を進められる"
/>` },
  { category: 'Project', title: 'NutmegProjectSupport', description: 'アプリが利用者のどの業務を支えるかを分解して示す。', keywords: ['project', 'support', '支援', '機能'], deck: 'slides/', slide: 12, code: String.raw`<NutmegProjectSupport :items="[
  { title: '連絡', detail: '必要な情報を共有する' },
  { title: '名簿', detail: '提出状況を確認する' },
  { title: '物品', detail: '受け渡しを管理する' },
  { title: '会場', detail: '準備状況を集める' }
]" />` },
  { category: 'Project', title: 'NutmegWorkGrid', description: 'プロジェクト内で実際に行う仕事内容を、行動単位で並べる。', keywords: ['project', 'work', '仕事内容', '役割'], deck: 'slides/', slide: 13, code: String.raw`<NutmegWorkGrid :items="[
  { title: '要件を整理する', detail: '利用者の業務を画面へ落とし込む' },
  { title: '画面をつくる', detail: '迷わない情報構造を設計する' },
  { title: '仕組みを支える', detail: 'データと権限を実装する' }
]" />` },
  { category: 'Project', title: 'NutmegFeatureShowcase', description: 'アプリ画面と説明を並べ、実際の利用場面をアピールする。', keywords: ['project', 'screen', '画面', 'showcase'], deck: 'slides/', slide: 14, code: String.raw`<NutmegFeatureShowcase
  title="準備状況を一つの画面で確認する"
  description="見るべき情報と次の行動をまとめる。"
  image="./project-screen.svg"
  image-alt="アプリ画面"
  :points="['提出状況', '担当作業', '次の締切']"
/>` },
  { category: 'Project', title: 'NutmegSchedule', description: '年間、週間などのスパンを切り替えて活動の流れを示す。', keywords: ['project', 'schedule', '年間', '週間', '予定'], deck: 'slides/', slide: 15, code: String.raw`<NutmegSchedule scale="year" :items="[
  { period: '4–5月', title: '企画と募集' },
  { period: '6–7月', title: '準備' },
  { period: '8月', title: '試行' },
  { period: '9–10月', title: '本番' }
]" />` },
  { category: 'Project', title: 'NutmegSchedule / week', description: '一週間の動きと、参加後の次の一歩を見える化する。', keywords: ['project', 'schedule', '週間', 'week', '予定'], deck: 'slides/', slide: 16, code: String.raw`<NutmegSchedule scale="week" :items="[
  { period: '月', title: '状況を確認' },
  { period: '水', title: '画面を試す' },
  { period: '金', title: '共有する' },
  { period: '日', title: '次を決める' }
]" />` },
  { category: 'Project', title: 'NutmegComparison', description: '他プロジェクトとの違いを、同じ比較軸で整理する。', keywords: ['project', 'comparison', '比較', '違い'], deck: 'slides/', slide: 17, code: String.raw`<NutmegComparison
  highlight-id="campus"
  :subjects="[
    { id: 'campus', name: 'Campus Bridge' },
    { id: 'infra', name: 'Infra Team' }
  ]"
  :rows="rows"
/>` },
  { category: 'Project', title: 'NutmegProjectFacts', description: '規模や特徴を短い事実として見せる。', keywords: ['project', 'facts', '数字', '規模'], deck: 'slides/', slide: 18, code: String.raw`<NutmegProjectFacts :items="[
  { value: '4', label: '支援領域' },
  { value: '2', label: '主な利用者' }
]" />` },
  { category: 'Project', title: 'NutmegQuote', description: '利用者やメンバーの声で、紹介に実感を加える。', keywords: ['project', 'quote', '声', 'インタビュー'], deck: 'slides/', slide: 19, code: String.raw`<NutmegQuote
  quote="次に何をすればいいかが分かる。"
  source="プロジェクトの利用者"
  role="SAMPLE"
/>` },
  { category: 'Project', title: 'NutmegOnboarding', description: '新入生が参加してからの最初の一歩を示す。', keywords: ['project', 'onboarding', '新入生', '参加'], deck: 'slides/', slide: 20, code: String.raw`<NutmegOnboarding :steps="[
  { timing: '1週目', title: '見てみる', detail: '画面を知る' },
  { timing: '2週目', title: '聞いてみる', detail: '課題を整理する' },
  { timing: '1か月後', title: '届けてみる', detail: '結果を振り返る' }
]" />` },
  { category: 'Project', title: 'NutmegRecruitMessage', description: '新入生へ、参加後に得られる経験まで含めて伝える。', keywords: ['project', 'recruit', '勧誘', '新入生', 'message'], deck: 'slides/', slide: 21, code: String.raw`<NutmegRecruitMessage
  copy="つくるだけじゃない。使われるところまで、一緒に見る。"
  message="利用者の声を聞き、考え、画面にする。"
  action="まずは見に来てください"
  image="./project-team.svg"
  image-alt="チームイメージ"
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
render()
