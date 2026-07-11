const entries = [
  { category: 'Foundation', title: '配色と余白', description: '標準版の色の役割と、資料全体で守る余白を確認する。', keywords: ['色', 'foundation', '余白', 'yellow', 'orange'], slide: 'slides/#/2' },
  { category: 'Component', title: 'NutmegCard', description: '比較や役割の整理を、同じ密度の情報として並べる。', keywords: ['カード', '比較', '情報', 'card'], slide: 'slides/#/3' },
  { category: 'Component', title: 'NutmegSteps', description: '順序が重要な内容を、番号と短い動詞で伝える。', keywords: ['ステップ', '順序', '手順', 'steps'], slide: 'slides/#/4' },
  { category: 'Component', title: 'NutmegTimeline', description: '時点と到達点を、一つの線で追えるようにする。', keywords: ['タイムライン', '時系列', '予定', 'timeline'], slide: 'slides/#/5' },
  { category: 'Setting', title: 'ロゴとページ番号', description: 'ロゴの表示範囲と、全ページ共通のページ番号を選ぶ。', keywords: ['ロゴ', 'ページ番号', 'every-slide', 'cover-only'], slide: 'slides/#/6' },
  { category: 'Guide', title: '部品の使い分け', description: '比較・順序・時間のどれを伝えたいかで部品を選ぶ。', keywords: ['使い方', 'guide', '比較', '順序', '時間'], slide: 'slides/#/7' },
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
let category = 'すべて'

function hrefFor(relative) {
  return new URL(relative, window.location.href).href
}

function matches(entry, query) {
  const haystack = [entry.category, entry.title, entry.description, ...entry.keywords].join(' ').toLowerCase()
  return (category === 'すべて' || entry.category === category) && haystack.includes(query.toLowerCase())
}

function renderFilters() {
  filters.innerHTML = [
    ...categories.map((item) => `<button class="filter ${item === category ? 'is-active' : ''}" type="button" data-category="${item}">${item}</button>`),
    '<span class="filter-divider"></span>',
    ...variantLinks.map((item) => `<a class="variant-link" href="${hrefFor(item.href)}">${item.label}</a>`),
  ].join('')
  filters.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      category = button.dataset.category
      render()
    })
  })
}

function renderItems() {
  const shown = entries.filter((entry) => matches(entry, search.value.trim()))
  summary.textContent = `${shown.length}件の部品・ガイド`
  items.innerHTML = shown.map((entry) => {
    const href = hrefFor(entry.slide)
    return `<article class="catalog-card">
      <p class="card-category">${entry.category}</p>
      <h2>${entry.title}</h2>
      <p>${entry.description}</p>
      <div class="card-actions">
        <button class="preview-button" type="button" data-title="${entry.title}" data-href="${href}">プレビュー</button>
        <a href="${href}">スライドを開く <span aria-hidden="true">→</span></a>
      </div>
    </article>`
  }).join('') || '<p class="empty-state">一致する部品がありません。別の語句で検索してください。</p>'
  items.querySelectorAll('.preview-button').forEach((button) => {
    button.addEventListener('click', () => openPreview(button.dataset.title, button.dataset.href))
  })
}

function render() {
  renderFilters()
  renderItems()
}

function openPreview(title, href) {
  previewTitle.textContent = title
  previewOpen.href = href
  frame.src = href
  dialog.showModal()
}

function closePreview() {
  frame.src = 'about:blank'
  dialog.close()
}

search.addEventListener('input', renderItems)
document.querySelector('#preview-close').addEventListener('click', closePreview)
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closePreview()
})
render()
