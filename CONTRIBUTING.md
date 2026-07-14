# Contributing

## Pull request title

このリポジトリは squash merge のコミット件名を Release Please の入力に使います。PRタイトルは、変更種別とコロンを含む Conventional Commits 形式で作成してください。

```text
feat: 新しい機能を追加
fix: 不具合を修正
docs: ドキュメントを更新
```

CIの `pr-title` チェックが、Release Pleaseで解釈できるタイトルかを検証します。タイトルが形式に合わない場合は、merge前に修正してください。
