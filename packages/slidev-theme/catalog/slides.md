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

<NutmegCover category="NUTMEG Slide Design System" title="NUTMEGらしいスライドを、すぐに組み立てる" updated="v0.4.0" :presenter="{ name: 'NUTMEG Design Team', url: 'https://github.com/hiro-to/nutmeg-slidev' }" /> <!-- x-release-please-version -->

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

<NutmegProjectOverview name="[プロジェクト名]" summary="[誰の、どの業務を、どう支えるかを一文で記載]" :audience="['[主な利用者]', '[連携する相手]']" image="./project-screen.svg" imageAlt="[画面の説明]" />

---

<NutmegTitle eyebrow="PROJECT　/　MISSION" title="ミッションは、なぜ存在するかを一枚で整理する" />

<NutmegProjectMission statement="[プロジェクトが実現したい状態]" target="[支援する相手]" challenge="[現在起きている課題]" future="[導入後に実現したい状態]" />

---

<NutmegTitle eyebrow="PROJECT　/　SUPPORT" title="ミッションを、利用者への支援内容へ分解する" />

<NutmegProjectSupport :items="[
  { title: '[支援内容 01]', detail: '[具体的に支える業務]' },
  { title: '[支援内容 02]', detail: '[具体的に支える業務]' },
  { title: '[支援内容 03]', detail: '[具体的に支える業務]' },
  { title: '[支援内容 04]', detail: '[具体的に支える業務]' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　WORK" title="プロジェクトの仕事内容を、役割ではなく行動で示す" />

<NutmegWorkGrid :items="[
  { title: '[仕事内容 01]', detail: '[誰と、何を整理する仕事か]', tags: ['[担当領域]'] },
  { title: '[仕事内容 02]', detail: '[どんな成果物をつくる仕事か]', tags: ['[担当領域]'] },
  { title: '[仕事内容 03]', detail: '[どう改善や運用を支える仕事か]', tags: ['[担当領域]'] },
  { title: '[仕事内容 04]', detail: '[チームでどんな役割を担うか]', tags: ['[担当領域]'] }
]" />

---
layout: nutmeg-project-showcase
---

<NutmegTitle eyebrow="PROJECT　/　SCREEN" title="アプリ画面を見せながら、支援内容を具体化する" />

<NutmegFeatureShowcase title="[画面で実現できること]" description="[利用者がこの画面を使う場面と得られる価値]" image="./project-screen.svg" imageAlt="[画面の説明]" :points="['[確認できる情報]', '[実行できる操作]', '[迷わなくなる点]']" />

---

<NutmegTitle eyebrow="PROJECT　/　SCHEDULE" title="一年間と一週間を、別のスケールで見せる" />

<NutmegSchedule scale="year" :items="[
  { period: '[期間 01]', title: '[フェーズ名]', detail: '[この期間の目的]' },
  { period: '[期間 02]', title: '[フェーズ名]', detail: '[この期間の目的]' },
  { period: '[期間 03]', title: '[フェーズ名]', detail: '[この期間の目的]' },
  { period: '[期間 04]', title: '[フェーズ名]', detail: '[この期間の目的]' },
  { period: '[期間 05]', title: '[フェーズ名]', detail: '[この期間の目的]' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　SCHEDULE" title="一週間の動きを、参加後の景色まで想像できる粒度で示す" lead="週単位の予定は、関わり方と次の一歩を具体的に伝える。" />

<NutmegSchedule scale="week" :items="[
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' },
  { period: '[曜日]', title: '[予定]', detail: '[関わり方や次の一歩]' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　COMPARISON" title="他プロジェクトとの違いを、同じ軸で比べる" />

<NutmegComparison highlight-id="project" :subjects="[{ id: 'project', name: '[このプロジェクト]' }, { id: 'target-a', name: '[比較対象 A]' }, { id: 'target-b', name: '[比較対象 B]' }]" :rows="[
  { label: '[比較軸 01]', values: { project: '[このプロジェクトの特徴]', 'target-a': '[比較対象 Aの特徴]', 'target-b': '[比較対象 Bの特徴]' } },
  { label: '[比較軸 02]', values: { project: '[このプロジェクトの特徴]', 'target-a': '[比較対象 Aの特徴]', 'target-b': '[比較対象 Bの特徴]' } },
  { label: '[比較軸 03]', values: { project: '[このプロジェクトの特徴]', 'target-a': '[比較対象 Aの特徴]', 'target-b': '[比較対象 Bの特徴]' } }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　FACTS" title="数字や特徴は、短い事実として置く" />

<NutmegProjectFacts :items="[
  { value: 'XX', label: '[数値の意味]', detail: '[集計条件や期間]' },
  { value: 'XX', label: '[数値の意味]', detail: '[集計条件や期間]' },
  { value: 'XX', label: '[数値の意味]', detail: '[集計条件や期間]' },
  { value: 'XX', label: '[数値の意味]', detail: '[集計条件や期間]' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　VOICE" title="利用者やメンバーの声で、紹介文に実感を加える" />

<NutmegQuote :items="[
  { quote: 'どこを見ればよいかが整理されていて、次にやることを決めやすくなりました。', source: '[利用者 A]', role: '[所属・立場]' },
  { quote: '確認のために何度も連絡する回数が減り、自分の作業に集中できました。', source: '[利用者 B]', role: '[所属・立場]' },
  { quote: '必要な情報が同じ場所にまとまっているので、途中から参加しても状況を追えました。', source: '[利用者 C]', role: '[所属・立場]' },
  { quote: '使って気づいたことを伝えると、次の改善に反映されるのがうれしいです。', source: '[利用者 D]', role: '[所属・立場]' }
]" />

---

<NutmegTitle eyebrow="PROJECT　/　ONBOARDING" title="新入生が参加した後の最初の一歩を示す" />

<NutmegOnboarding :steps="[
  { timing: '[タイミング]', title: '[最初の一歩]', detail: '[触れる情報や画面]' },
  { timing: '[タイミング]', title: '[次の一歩]', detail: '[チームで試すこと]' },
  { timing: '[タイミング]', title: '[届ける一歩]', detail: '[振り返る結果]' }
]" />

---
layout: nutmeg-project-message
---

<NutmegTitle eyebrow="PROJECT　/　RECRUIT" title="新入生へのメッセージは、参加後の景色まで見せる" />

<NutmegRecruitMessage copy="[新入生へ届けたい一番のコピー]" message="[参加すると経験できることと、歓迎する姿勢]" action="[見学・相談など、次の行動]" speaker="[プロジェクト名 / メッセージの発信者]" image="./project-team.svg" imageAlt="[チームや活動の説明]" />
