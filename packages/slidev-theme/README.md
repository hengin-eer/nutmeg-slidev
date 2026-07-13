# NUTMEG Slidev Theme

NUTMEG向けのSlidevテーマです。白・黒とブランドカラーを使い、本文はNoto Sans JPで表示します。

## 利用方法

プレビュー公開後は、資料リポジトリでテーマを導入します。

```bash
npm install -D @timdaik/slidev-theme-nutmeg
```

`slides.md` の先頭でテーマと表示設定を指定します。

```yaml
---
theme: '@timdaik/slidev-theme-nutmeg'
themeConfig:
  nutmeg:
    variant: soft # soft | contrast | brand-gradient
    logo: every-slide # every-slide | cover-only | none
---
```

NUTFES移管後は、パッケージ名を `@nutfes/slidev-theme` に置き換えます。

## テーマ設定

| `variant` | 用途 |
| --- | --- |
| `soft` | 既定。NUTMEGの柔らかい白地・ブランドカラーの表現。 |
| `contrast` | 長文や投影環境を優先する資料向け。濃い文字色を主に使う。 |
| `brand-gradient` | 黄30%・橙60%・濃橙90%のradial gradientを背景に使う。 |

| `logo` | 表示 |
| --- | --- |
| `every-slide` | 表紙以外の右上に黒ロゴを表示する（既定）。 |
| `cover-only` | `NutmegCover` のみロゴを表示する。 |
| `none` | ロゴを表示しない。 |

以前の `footer` は `every-slide` の互換エイリアスとして引き続き利用できます。新しい資料では `every-slide` を指定してください。

## 部品

`NutmegCover`、`NutmegTitle`、`NutmegCard`、`NutmegCallout`、`NutmegSteps`、`NutmegTimeline` に加えて、プロジェクト紹介向けの `NutmegMemberGrid`、`NutmegProjectOverview`、`NutmegProjectMission`、`NutmegProjectSupport`、`NutmegWorkGrid`、`NutmegFeatureShowcase`、`NutmegSchedule`、`NutmegComparison`、`NutmegProjectFacts`、`NutmegQuote`、`NutmegOnboarding`、`NutmegRecruitMessage` を提供します。実例と使い分けは検索可能な公開カタログを参照してください。各ガイドでは実際のSlidevスライドと利用コードを並べて確認できます。

### プロジェクト紹介の構成

プロジェクト紹介は一枚に情報を詰め込まず、次の順でスライドを分けます。

1. `NutmegProjectOverview` — 何のプロジェクトか
2. `NutmegProjectMission` — なぜ存在するか
3. `NutmegProjectSupport` — 利用者の何を支えるか
4. `NutmegWorkGrid` — メンバーが何を担当するか
5. `NutmegFeatureShowcase` — 画面でどう実現するか
6. `NutmegSchedule` — 年間と週間の流れ
7. `NutmegComparison` — 他プロジェクトとの違い
8. `NutmegProjectFacts` / `NutmegQuote` — 数字と利用者の声
9. `NutmegOnboarding` / `NutmegRecruitMessage` — 新入生が参加するまで

`NutmegProjectOverview` は `name`、`summary`、任意の `audience`、画像だけを受け取ります。ミッションと機能の説明は `NutmegProjectMission` と `NutmegProjectSupport` に分けてください。

プロジェクト用の `nutmeg-project-overview`、`nutmeg-project-showcase`、`nutmeg-project-message` レイアウトも利用できます。画像は公開先のベースパスを壊さないよう、資料側の `public/` を相対パス（例: `./project-screen.svg`）で指定してください。

### メンバーJSON

`NutmegMemberGrid` はJSON互換の配列を受け取ります。通常は資料側の `members.json` を読み込んで利用します。

```json
[
  {
    "name": "技大情太郎",
    "affiliation": "情経B4",
    "roles": ["PM", "Front"]
  }
]
```

```md
<script setup>
import members from './members.json'
</script>

<NutmegMemberGrid :members="members" fit="strict" />
```

`strict` と `fluid` はどちらも1枚12人まで（3列×4行）を目安にします。`fluid` は文字とカードの密度を下げ、人数が変わる場合に対応します。画像がない場合は氏名からイニシャルを表示します。

### 表紙の発表者

`NutmegCover` の `presenter` で1名分の氏名、任意のアバター、任意のプロフィールURLを指定できます。アバターを省略した場合は氏名からイニシャルを表示します。

```md
<NutmegCover
  category="NUTMEG"
  title="伝えたいことを、ひとつ書く"
  :presenter="{ name: '山田 花子', avatar: '/avatar.jpg', url: 'https://example.com' }"
/>
```

`avatar` には資料側の `public/` に置いた絶対パス、またはHTTPS URLを指定してください。全ページの右下には `現在番号 / 総数` を表示します。

テーマにはNoto Sans JPのwoff2を同梱せず、`@fontsource/noto-sans-jp` の日本語・Latin用400・700を依存として利用します。woff2だけを参照するため、旧来のwoffフォールバックを公開物へ含めません。ネットワークCDNに依存せず、資料のビルド時に自己ホストされます。

## 開発

```bash
npm install
npm run dev
npm run build
npm run catalog:serve
npm run check:package
```

`npm run build` のあとに `npm run catalog:serve` を実行すると、公開時と同じポータル構成を `http://localhost:4173` で確認できます。

公開・移管・trusted publishingの運用は [`docs/release-operations.md`](docs/release-operations.md)、将来のaddon候補は [`docs/addon-candidates.md`](docs/addon-candidates.md) に記録します。
