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
    logo: footer # footer | cover-only | none
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
| `footer` | 本文スライド右下に黒ロゴを表示する。 |
| `cover-only` | `NutmegCover` のみロゴを表示する。 |
| `none` | ロゴを表示しない。 |

## 部品

`NutmegCover`、`NutmegTitle`、`NutmegCard`、`NutmegCallout`、`NutmegSteps`、`NutmegTimeline` を提供します。実例と使い分けは、公開カタログまたは [`catalog/slides.md`](catalog/slides.md) を参照してください。

テーマにはNoto Sans JPのwoff2を同梱せず、`@fontsource/noto-sans-jp` の日本語・Latin用400・700を依存として利用します。woff2だけを参照するため、旧来のwoffフォールバックを公開物へ含めません。ネットワークCDNに依存せず、資料のビルド時に自己ホストされます。

## 開発

```bash
npm install
npm run dev
npm run build
npm run check:package
```

公開・移管・trusted publishingの運用は [`docs/release-operations.md`](docs/release-operations.md)、将来のaddon候補は [`docs/addon-candidates.md`](docs/addon-candidates.md) に記録します。
