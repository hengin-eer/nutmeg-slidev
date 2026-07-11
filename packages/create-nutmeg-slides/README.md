# Create NUTMEG Slides

NUTMEGテーマを設定したSlidev資料を作成します。

```bash
npm create @timdaik/nutmeg-slides@0.2.1 -- my-slides
```

生成ツールは新規または空のディレクトリにだけ書き込み、テンプレートをコピーした後に `npm install --ignore-scripts` を実行します。シェル文字列、リモートテンプレート、postinstallは使いません。

ローカルで生成内容だけを確認する場合は、`--skip-install` を付けます。

NUTFES移管後は、コマンドを `npm create @nutfes/slides@<version> -- my-slides` に置き換えます。
