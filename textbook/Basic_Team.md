# Team
## 第一節 チーム開発
第三章で基本的な流れを再度確認しておいてください。

:one: リポジトリのクローン
```bash
$ git clone <URL>
```

:two: VSCodeでターミナルを開いて現在いるブランチを確認します。
```bash
$ git branch
# developと表示されればOKです。
```

:three: ブランチを作成します。その次にGitHubにブランチを登録します。

:warning: `<BranchName>`は、`akinori/create-header-component`、`akinori/create-top-page`や`akinori/add-logo-to-header-component`のように、自分の名前を入れた何をしようとしているのかパット見て分かるようなブランチ名にしてください。
```bash
$ git checkout -b <BranchName>
$ git branch
# <BranchName>が表示されればOKです。
$ git push -u origin <BranchName>
```

:four: ある程度進むごとにコミットします。拡張機能のソース管理を開いて一つ一つプラスボタンを押下していきます。コミットするファイルを選択し終えたら、以下のコマンドを実行します。ダブルクオーテーションマークの中身は自分が何をしたのかをメッセージとして書いてください。
```bash
$ git commit -m "mg"
```

:five: 作業が完了したら以下のコマンドを実行してください。
```bash
$ git push
```

:six: 次にPullRequestをします。リポジトリのPull requestsタブをクリックします。そして右にある緑色の「New pull request」を押下してください。

その後、自分がどのようなことをしたのかやレビュー担当者への連絡事項などを記載してPullRequestを作成してください。

:warning: `base: develop <- compare: <BranchName>`になっていることを確認してください。

:seven: 終わったらレビュー担当者に連絡してください。レビュー担当者は、必要な項目をすべてクリアしていると確認した段階で、マージします。


## お疲れ様！！
チーム開発の流れを知ることは開発の欠かせないことの一つです。頑張りましょう！

![gif](https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif?cid=ecf05e47bhbdz7hr6xgdcp5nzgdokl0gbzm3qw4o1g6qsx5p&rid=giphy.gif&ct=g)
