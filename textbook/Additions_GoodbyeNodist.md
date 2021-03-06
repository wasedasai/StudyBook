# Nodistのアンインストール
NodistはWindows向けのNode.js管理ツールですが、開発が停止していることを考慮し、別の管理ツールに移行するためにアンインストールします。

記事紹介という形式にしようと思いましたが、説明不足の箇所があるのでその付記しています。不明点があればネットで検索しましょう。

もし問題が発生した場合は再起動するとよいです。

## コントロールパネルからアンインストール
`Windowsキー`をPressし、「コントロールパネル」と検索します。コントロールパネルから「プログラムのアンインストール」を選択します。

Nodistで検索してアンインストールします。

## Nodistフォルダの削除
Nodistはアンインストールしましたが、残骸を消しましょう。（何かのアンインストール後は、残骸の削除と再起動が大切です）

`Program Files`か`Program Files (x86)`のいずれかに`Nodist`というフォルダがあるので、削除してください。

## .npmrcファイルの削除
`.npmrc`ファイルは、npmの設定ファイルです。Nodistの設定が保存されていることがあるので削除対象です。

`C:\ユーザー\<username>`配下に、`.npmrc`ファイルがあれば削除してください。ない場合はそのままで構いません。

> 不安であれば、`npm config --global list`でNodistというwordが表示されないか確認してください。表示される場合は、`.npmrc`を検索しましょう。

## npm-cacheフォルダの削除
`npm-cacheフォルダ`はnpmのキャッシュが格納されたフォルダで、まっさらな状態にするために削除対象です。

`C:\ユーザー\<username>\AppData\Roaming`配下の`npm-cache`フォルダを削除してください。ただしAppDataフォルダは隠しフォルダなので、隠しフォルダ表示を設定してください。

## 環境変数の削除
`Windowsキー`をPressし、「環境変数を編集」と検索します。`<username>のユーザー環境変数`というボックス内に、「Path」という項目があるので、ダブルクリックしてください。`NODE_PATH`などや、Nodistのフォルダのパスが含まれていればそれを削除してください。

## 最後に
念のため再起動してください。Git Bashを開いて、`nodist -v`とコマンドして、「nodist not found」みたいなメッセージが表示されれば完了です。

