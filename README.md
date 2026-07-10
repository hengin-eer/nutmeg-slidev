# NUTMEG Slidev

NUTMEG向けのSlidevテーマ、部品カタログ、新規資料生成ツールを管理するリポジトリです。

## パッケージ

- `@timdaik/slidev-theme-nutmeg`: Slidevテーマと部品カタログ
- `@timdaik/create-nutmeg-slides`: テーマ設定済み資料の生成ツール

NUTFESへ移管する際は、`@nutfes/slidev-theme` と `@nutfes/create-slides` を正式パッケージとして新規公開します。

## 開発

```bash
npm ci --ignore-scripts
npm run build
npm run check:package
```

テーマの利用方法は [`packages/slidev-theme/README.md`](packages/slidev-theme/README.md)、公開手順は [`packages/slidev-theme/docs/release-operations.md`](packages/slidev-theme/docs/release-operations.md) を参照してください。
