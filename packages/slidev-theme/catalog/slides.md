---
theme: ../
title: NUTMEG Slide Design System
aspectRatio: 16/9
routerMode: hash
themeConfig:
  nutmeg:
    variant: soft
    logo: every-slide
---

<NutmegCover category="NUTMEG Slide Design System" title="NUTMEGらしいスライドを、すぐに組み立てる" updated="v0.3.1" :presenter="{ name: 'NUTMEG Design Team', url: 'https://github.com/hiro-to/nutmeg-slidev' }" /> <!-- x-release-please-version -->

---

<NutmegTitle eyebrow="FOUNDATION" title="標準版は、柔らかな色と余白で内容を支える" lead="白・黒を基調に、3色は役割を持たせて使う。" />

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

<NutmegTitle eyebrow="COMPONENT　/　STEPS" title="順序が大切な内容を、番号と短い動詞で伝える" />

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

<NutmegTitle eyebrow="SETTING" title="ロゴとページ番号は、資料の目的に合わせて選ぶ" />

<div class="nutmeg-grid nutmeg-grid--3">
  <NutmegCard label="every-slide" title="本文の識別">非表紙の右上に黒ロゴを置く標準設定。</NutmegCard>
  <NutmegCard label="cover-only" title="表紙だけに置く">本文へロゴを置かず、内容へ集中させる。</NutmegCard>
  <NutmegCard label="none" title="ロゴを出さない">共同資料など、別の識別ルールがある場合に選ぶ。</NutmegCard>
</div>

---

<NutmegTitle eyebrow="USAGE" title="伝えたい関係に合う部品を一つ選ぶ" lead="比較ならカード、順序ならステップ、時間ならタイムラインを使う。" />

<div class="nutmeg-grid nutmeg-grid--2">
  <NutmegCard label="推奨" title="一枚一主張">部品は主張を支えるために置き、意味のない箱や色を増やさない。</NutmegCard>
  <NutmegCard label="避ける" title="情報を詰め込みすぎる" tone="action">長文、複数の結論、過剰な色分けは別スライドへ分ける。</NutmegCard>
</div>

---

<NutmegTitle eyebrow="COMPONENT　/　MEMBER GRID" title="メンバーを、名前と役割が読めるグリッドで紹介する" lead="strictは1枚12人まで。JSON互換の配列を渡す。" />

<NutmegMemberGrid :members="[
  { name: '技大情太郎', affiliation: '情経B4', roles: ['PM', 'Front'] },
  { name: '佐藤 花子', affiliation: '工学B3', roles: ['Back', 'Infra'] },
  { name: '鈴木 一郎', affiliation: '情経B2', roles: ['Design'] },
  { name: '田中 美咲', affiliation: '工学B4', roles: ['Front', 'Back'] },
  { name: '高橋 健', affiliation: '情経B3', roles: ['Infra'] },
  { name: '伊藤 葵', affiliation: '工学B2', roles: ['PM'] }
]" />

---

<NutmegTitle eyebrow="COMPONENT　/　MEMBER GRID" title="人数が変わってもfluidモードで密度を調整する" lead="3列×4行を目安に、列数と文字サイズを自動調整する。" />

<NutmegMemberGrid fit="fluid" :members="[
  { name: '技大情太郎', affiliation: '情経B4', roles: ['PM', 'Front'] },
  { name: '佐藤 花子', affiliation: '工学B3', roles: ['Back'] },
  { name: '鈴木 一郎', affiliation: '情経B2', roles: ['Infra'] },
  { name: '田中 美咲', affiliation: '工学B4', roles: ['Design'] },
  { name: '高橋 健', affiliation: '情経B3', roles: ['Front'] },
  { name: '伊藤 葵', affiliation: '工学B2', roles: ['PM'] },
  { name: '山本 陽', affiliation: '工学B3', roles: ['Back'] },
  { name: '中村 凛', affiliation: '情経B4', roles: ['Front'] },
  { name: '小林 翼', affiliation: '工学B2', roles: ['Infra'] },
  { name: '加藤 海', affiliation: '情経B3', roles: ['Design'] },
  { name: '吉田 葵', affiliation: '工学B4', roles: ['Back'] },
  { name: '山田 蓮', affiliation: '情経B2', roles: ['PM'] }
]" />

---
layout: nutmeg-project-overview
---

<NutmegTitle eyebrow="PROJECT　/　OVERVIEW" title="まず、何のプロジェクトかを一目で伝える" lead="ミッションや機能を詰め込まず、名前・対象・一文の説明に絞る。" />

<NutmegProjectOverview name="Campus Bridge" summary="学園祭の参加団体と実行委員会をつなぐ運営アプリ" :audience="['参加団体', '実行委員会']" image="./project-screen.svg" imageAlt="Campus Bridgeの架空の画面モック" />

---

<NutmegTitle eyebrow="PROJECT　/　MISSION" title="ミッションは、なぜ存在するかを一枚で整理する" />

<NutmegProjectMission statement="準備に必要な情報と次の行動が、迷わず見つかる状態をつくる" target="参加団体と実行委員会" challenge="連絡、名簿、物品の情報が複数の場所に分散している" future="一つの場所で確認し、安心して準備を進められる" />

---

<NutmegTitle eyebrow="PROJECT　/　SUPPORT" title="ミッションを、利用者への支援内容へ分解する" />

<NutmegProjectSupport :items="[
  { icon: '↔', title: '連絡', detail: '参加団体と実行委員会が必要な情報を共有する。' },
  { icon: '▣', title: '名簿', detail: '参加者情報をまとめ、提出状況を確認する。' },
  { icon: '□', title: '物品', detail: '必要な物品と受け渡しを管理する。' },
  { icon: '⌂', title: '会場', detail: '会場に関する準備状況を一つに集める。' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　WORK" title="プロジェクトの仕事内容を、役割ではなく行動で示す" />

<NutmegWorkGrid :items="[
  { title: '要件を整理する', detail: '利用者の業務と困りごとを聞き、画面へ落とし込む。', tags: ['Hearing', 'Planning'] },
  { title: '画面をつくる', detail: '使う人が迷わない情報構造と操作を設計する。', tags: ['Design', 'Front'] },
  { title: '仕組みを支える', detail: 'データと権限を安全に扱えるよう実装する。', tags: ['Back', 'Infra'] },
  { title: '運用を確かめる', detail: '本番の準備と利用後の改善を続ける。', tags: ['Operation'] }
]" />

---
layout: nutmeg-project-showcase
---

<NutmegTitle eyebrow="PROJECT　/　SCREEN" title="アプリ画面を見せながら、支援内容を具体化する" />

<NutmegFeatureShowcase title="準備状況を一つの画面で確認する" description="利用者が今見るべき情報と、次に取る行動を同じ画面へまとめる。" image="./project-screen.svg" imageAlt="Campus Bridgeの架空画面モック" :points="['提出状況を確認できる', '担当者ごとの作業を分けられる', '次の締切を見失わない']" />

---

<NutmegTitle eyebrow="PROJECT　/　SCHEDULE" title="一年間と一週間を、別のスケールで見せる" />

<NutmegSchedule scale="year" :items="[
  { period: '4–5月', title: '企画と募集', detail: '参加団体の状況を知る' },
  { period: '6–7月', title: '準備', detail: '情報と機能を整える' },
  { period: '8月', title: '試行', detail: '実際の流れを確かめる' },
  { period: '9–10月', title: '本番', detail: '運用を支える' },
  { period: '11–3月', title: '振り返り', detail: '学びを次へ残す' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　SCHEDULE" title="一週間の動きを、参加後の景色まで想像できる粒度で示す" lead="週単位の予定は、関わり方と次の一歩を具体的に伝える。" />

<NutmegSchedule scale="week" :items="[
  { period: '月', title: '状況を確認', detail: '利用者の声を読む' },
  { period: '火', title: '論点を整理', detail: '課題を小さく分ける' },
  { period: '水', title: '画面を試す', detail: 'チームでレビューする' },
  { period: '木', title: '実装を進める', detail: '担当の作業を進める' },
  { period: '金', title: '共有する', detail: '進捗と困りごとを伝える' },
  { period: '土', title: '振り返る', detail: '使われ方を確かめる' },
  { period: '日', title: '次を決める', detail: '次週の一歩を置く' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　COMPARISON" title="他プロジェクトとの違いを、同じ軸で比べる" />

<NutmegComparison highlight-id="campus" :subjects="[{ id: 'campus', name: 'Campus Bridge' }, { id: 'finance', name: 'Finance App' }, { id: 'infra', name: 'Infra Team' }]" :rows="[
  { label: '主な相手', values: { campus: '参加団体', finance: '利用者', infra: '開発者' } },
  { label: '扱うもの', values: { campus: '運営情報', finance: 'お金の情報', infra: '基盤' } },
  { label: '面白さ', values: { campus: '現場に近い', finance: '業務を変える', infra: '全体を支える' } }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　FACTS" title="数字や特徴は、短い事実として置く" />

<NutmegProjectFacts :items="[
  { value: '4', label: '支援領域', detail: '連絡・名簿・物品・会場' },
  { value: '2', label: '主な利用者', detail: '参加団体と実行委員会' },
  { value: '1', label: '目指す場所', detail: '準備情報を集める画面' },
  { value: '∞', label: '改善の余地', detail: '使われ方から学び続ける' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　VOICE" title="利用者やメンバーの声で、紹介文に実感を加える" />

<NutmegQuote quote="次に何をすればいいかが分かると、準備を止めずに進められる。" source="Campus Bridgeの架空ユーザー" role="SAMPLE / 架空のコメント" />

---

<NutmegTitle eyebrow="PROJECT　/　ONBOARDING" title="新入生が参加した後の最初の一歩を示す" />

<NutmegOnboarding :steps="[
  { timing: '1週目', title: '見てみる', detail: 'プロジェクトの利用者と画面を知る' },
  { timing: '2週目', title: '聞いてみる', detail: '小さな困りごとを一緒に整理する' },
  { timing: '3週目', title: 'つくってみる', detail: 'レビューを受けながら実装する' },
  { timing: '1か月後', title: '届けてみる', detail: '使われた結果を振り返る' }
]" />

---
layout: nutmeg-project-message
---

<NutmegTitle eyebrow="PROJECT　/　RECRUIT" title="新入生へのメッセージは、参加後の景色まで見せる" />

<NutmegRecruitMessage copy="つくるだけじゃない。使われるところまで、一緒に見る。" message="利用者の声を聞き、考え、画面にし、実際の運用からまた学ぶ。Campus Bridgeは、技術と人の間を行き来しながらつくるプロジェクトです。" action="まずはプロジェクトを見に来てください" speaker="SAMPLE / 架空プロジェクトのメッセージ" image="./project-team.svg" imageAlt="Campus Bridgeの架空チームイメージ" />
