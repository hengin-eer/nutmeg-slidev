# 公開・移管の運用

## ローカルの実行環境

Node.jsとnpmはmiseで管理する。リポジトリの`mise.toml`がNode 24.15.0とnpm 11.18.0を固定するため、リポジトリ直下では次を実行する。

```bash
mise install
mise current
node --version
npm --version
npm stage --help
```

シェルではnvmとVoltaの初期化を行わず、miseだけを有効化する。既存の`~/.nvm`と`~/.volta`はロールバック用に残す。Voltaで管理していたCodexとMarp CLIは、miseのグローバル設定へ移行する。

## npm公開の前提

`npm stage publish`はnpm 11.15.0以降が必要で、npm workspace指定には対応しない。CIでは各パッケージディレクトリへ移動して実行する。

## プレビュー公開

プレビューは `@timdaik/slidev-theme-nutmeg` と `@timdaik/create-nutmeg-slides` で公開する。利用資料は依存バージョンを固定し、`latest` を自動追従しない。

1. npm個人アカウントで認証アプリによる2FAを有効化する。
2. `v0.x.y` タグとGitHub Releaseを作る。
3. 初回のみ、クリーンなタグから `npm publish --access public` を実行する。
4. npmの各パッケージ設定でTrusted Publisherを追加する。GitHubリポジトリ`hengin-eer/nutmeg-slidev`、`release.yml`、環境`npm-release`、許可操作`npm stage publish`を指定する。
5. Publishing accessで「2FA必須・トークン禁止」を有効化する。

以後のリリースはRelease Pleaseが作成したタグからGitHub Actionsで`npm stage publish`まで実行し、npmの画面で2FAを使って内容を承認する。Actionsには長期のnpmトークンを保存しない。

## リリースフロー

1. Conventional Commit形式のPRをsquash mergeする。
2. Release PleaseがリリースPRを作成・更新する。
3. リリースPRを人が確認してmergeすると、タグ・日本語リリースノート付きDraft Release・npmステージ公開が作成される。
4. npmjs.comでステージ済みパッケージを2FA承認する。
5. GitHub Draft ReleaseをPublishすると、Pagesが同じタグのカタログをデプロイする。

Release Pleaseには、個人アカウント`hengin-eer`で発行した専用のFine-grained PATをRepository secret `RELEASE_PLEASE_TOKEN`として設定する。対象リポジトリは`nutmeg-slidev`だけとし、次のRepository permissionsを付与する。

- Contents: Read and write
- Issues: Read and write
- Pull requests: Read and write
- Metadata: Read（自動付与）

有効期限は1年とし、期限の1か月前までに新しいPATへ更新する。ワークフローはこのSecretを必須とし、`GITHUB_TOKEN`へフォールバックしない。これにより、Release Pleaseが作成したPRでも必須CIを自動実行できる。リポジトリ設定の「Allow GitHub Actions to create and approve pull requests」は有効化しない。

未公開の`v0.2.1`タグは失敗履歴として残し、移動・削除・再公開しない。Release Pleaseが次に算出する`v0.3.0`を、修正後最初のnpm公開版とする。

## NUTFES移管

GitHub組織 `nutfes` とnpm組織 `@nutfes` が利用可能になったら、以下を行う。

1. リポジトリをGitHub組織 `nutfes` へ移管し、Pages・Actions・保護ブランチを再確認する。
2. `@nutfes/slidev-theme` と `@nutfes/create-slides` を新規公開する。
3. 生成ツールのテンプレートを正式パッケージへ更新する。
4. 個人スコープのREADMEとnpm deprecationメッセージで、正式パッケージへの移行手順を案内する。

個人スコープのnpmパッケージは組織スコープへ移管できないため、正式パッケージは新規公開する。

## カタログ

カタログはnpmで公開済みのタグだけからGitHub Pagesへデプロイする。Pagesの先頭には対応するテーマのバージョンを記載し、開発中のmainとの差異を利用者に見せない。
