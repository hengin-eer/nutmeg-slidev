---
theme: ../
title: NUTMEG Slide Design System
aspectRatio: 16/9
themeConfig:
  nutmeg:
    variant: soft
    logo: every-slide
---

<NutmegCover category="NUTMEG Slide Design System" title="伝える内容を、迷わず整える" updated="v0.3.0" :presenter="{ name: 'NUTMEG Design Team', url: 'https://github.com/hiro-to/nutmeg-slidev' }" /> <!-- x-release-please-version -->

---

<NutmegTitle eyebrow="FOUNDATION" title="標準版は、柔らかい色と余白で内容を支える" lead="白・黒を基調に、3色は役割を持たせて使う。" />

<div class="nutmeg-grid nutmeg-grid--3">
  <NutmegCard label="YELLOW　#FFCB00" title="面・マーカー">黒文字を載せる面、注目を集める小さなマーカーに使う。</NutmegCard>
  <NutmegCard label="ORANGE　#F0932E" title="通常の強調">区切り、進行中、標準的な強調に使う。</NutmegCard>
  <NutmegCard label="DEEP ORANGE　#FF592B" title="行動・締切">次の行動、期限、最重要項目に限定する。</NutmegCard>
</div>

---

<NutmegTitle eyebrow="COMPONENT　/　CARD" title="カードは、比較または役割の整理にだけ使う" />

<div class="nutmeg-grid nutmeg-grid--3">
  <NutmegCard label="PLAIN" title="通常の情報">比較する情報を、同じ密度で置く。</NutmegCard>
  <NutmegCard label="HIGHLIGHT" title="注目する結論" tone="highlight">黄の面には黒文字を載せる。</NutmegCard>
  <NutmegCard label="ACTION" title="次の行動" tone="action">締切や依頼を目立たせる。</NutmegCard>
</div>

---

<NutmegTitle eyebrow="COMPONENT　/　STEPS" title="順序が大切な話は、番号と短い動詞で示す" />

<NutmegSteps :items="[
  { title: '知る', detail: '状況を聞く' },
  { title: '整理する', detail: '論点を分ける' },
  { title: '決める', detail: '次の行動を置く' },
  { title: '振り返る', detail: '学びを残す' }
]" :emphasis="2" />

---

<NutmegTitle eyebrow="COMPONENT　/　TIMELINE" title="時点と到達点を、一つの線で追えるようにする" />

<NutmegTimeline :items="[
  { date: 'NOW', title: '始める', detail: '現状を確かめる', state: 'now' },
  { date: 'NEXT', title: '試す', detail: '小さく実践する', state: 'planned' },
  { date: 'TARGET', title: '定着させる', detail: '継続方法を決める', state: 'target' }
]" />

---
<NutmegTitle eyebrow="LOGO" title="ロゴ表示は、資料の目的に合わせて選べる" />

<div class="nutmeg-grid nutmeg-grid--3">
  <NutmegCard label="every-slide" title="本文の識別">非表紙の右上に黒ロゴを置く標準設定。</NutmegCard>
  <NutmegCard label="cover-only" title="表紙だけに置く">本文へロゴを置かず、内容へ集中させる。</NutmegCard>
  <NutmegCard label="none" title="ロゴを出さない">共同資料など、別の識別ルールがある場合に選ぶ。</NutmegCard>
</div>

---

<NutmegTitle eyebrow="USAGE" title="内容に合う部品を一つ選び、混ぜすぎない" />

<div class="nutmeg-grid nutmeg-grid--2">
  <NutmegCard label="推奨" title="比較・順序・時間のどれかを選ぶ">比較ならカード、順序ならステップ、時間ならタイムラインを使う。</NutmegCard>
  <NutmegCard label="避ける" title="色と箱を、理由なく増やす" tone="action">一枚に複数の主張、意味のない色分け、長文カードを置かない。</NutmegCard>
</div>
