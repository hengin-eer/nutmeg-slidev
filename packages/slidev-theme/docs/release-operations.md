# 公開・移管の運用

## プレビュー公開

プレビューは `@timdaik/slidev-theme-nutmeg` と `@timdaik/create-nutmeg-slides` で公開する。利用資料は依存バージョンを固定し、`latest` を自動追従しない。

1. npm個人アカウントで認証アプリによる2FAを有効化する。
2. `v0.x.y` タグとGitHub Releaseを作る。
3. 初回のみ、クリーンなタグから `npm publish --access public` を実行する。
4. npmの各パッケージ設定でtrusted publisherを追加する。GitHubリポジトリ、`release.yml`、許可操作 `npm stage publish` を指定する。
5. Publishing accessで「2FA必須・トークン禁止」を有効化する。

以後のリリースはGitHub Actionsで `npm stage publish` まで実行し、npmの画面で2FAを使って内容を承認する。Actionsには長期のnpmトークンを保存しない。

## NUTFES移管

GitHub組織 `nutfes` とnpm組織 `@nutfes` が利用可能になったら、以下を行う。

1. リポジトリをGitHub組織 `nutfes` へ移管し、Pages・Actions・保護ブランチを再確認する。
2. `@nutfes/slidev-theme` と `@nutfes/create-slides` を新規公開する。
3. 生成ツールのテンプレートを正式パッケージへ更新する。
4. 個人スコープのREADMEとnpm deprecationメッセージで、正式パッケージへの移行手順を案内する。

個人スコープのnpmパッケージは組織スコープへ移管できないため、正式パッケージは新規公開する。

## カタログ

カタログはnpmで公開済みのタグだけからGitHub Pagesへデプロイする。Pagesの先頭には対応するテーマのバージョンを記載し、開発中のmainとの差異を利用者に見せない。
