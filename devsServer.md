# Server
この章では、インフラ、サーバーの負荷と基本的なサーバーの取り扱いについて学びます。

![devsServer-hero](https://user-images.githubusercontent.com/65198192/143469543-83c96ba4-103f-44d5-bbda-ca5a64b8a948.png)

## 第一節 インフラ
### インフラとは
インフラは水道・電気・ガスなどの私たちの生活を支える基盤ですが、IT分野（特にWEB）では、インフラはサーバー、データベース、OSやネットワーク構成などのサービスを支える技術群のことを指します。

以下ではWEBサービスを支えるインフラを紹介します。

#### :dizzy: サーバー
あるサービスを提供するものをサーバーと言います。（例えば水を提供するウォーターサーバー）

いわゆるIT分野におけるサーバーは、一般的なPCでも代用可能です。しかし、私たちのPCは大量のユーザーをさばけるほど高性能ではありませんし、壊れてしまえば修復するのに何週間もかかる可能性もあります。そこで専用のコンピュータを用意するのが通常です。

:warning:ややこしいことにサーバーとは、サーバールームにある巨大装置のことを指すだけではありません。WEBサイトやWEBアプリを提供するWEBサーバー、データベースサーバー、メールサーバー、ファイルサーバーなどがあります。

#### :dizzy: OS
OSとはOperating Systemのことですが、

:warning:いつもVSCodeの補完機能に頼ってるので、この書き方で正しかったか不安です。あくまでもコンポーネント理解のためなので、コーディング時に参考にしないでください。（追記：これはReactでの書き方で、Vueと全然違いました。比較を下の方でしています。）

### :dizzy:アトミックデザイン
部品化していくとコンポーネントを定義するファイルをcomponentsフォルダに大量に作成することになります。そのような場合、`Link`コンポーネントと`Header`コンポーネントを定義するファイルが同居することになります。

しかし、これはあまり可読性が良い状態ではないのでもう少し整理したいですね。そこでアトミックデザインという考えが導入されました。

アトミックデザインの概念では、コンポーネントを以下の５種類に分けています。
- Atoms
- Molecules
- Organisms
- Templates
- Pages

それぞれはこんな感じです。（出典： https://atomicdesign.bradfrost.com/chapter-2/ ）
![chapter5-components](https://user-images.githubusercontent.com/65198192/132858440-4bb6979e-bb3e-4658-878b-e5a08bf3dbed.png)

ちょっとまだ分かりづらいので、マンションをサイトとして説明しようと思います。
| 用語 | 具体的なコンポーネント | 説明 |
|:---|:---|:---|
|Pages |EventsSearchPage |部屋です。 |
|Templates |DefaultLayout |間取りです。最上階は少し部屋の面積が広かったりします。 |
|Organisms |Header |ドアやシャワールームです。 |
|Molecules |Navigation |ドアノブやシャワーヘッドです。 |
|Atoms |Button |ネジや布でしょうか。 |

アトミックデザインの雰囲気を感じ取ってもらったところで、Nuxtのフォルダー構成を確認します。`Templates`が`layouts`に変化していることに注意です！
```bash
 components/
 ├── atoms
 │   ├── Link
 │   │   ├── NormalLink.vue
 │   │   └── BoldLink.vue
 │   ├── Button
 │   │   ├── NormalButton.vue
 │   │   └── BoldButton.js
 │   └── Table
 │       ├── HeaderCell.vue
 │       └── ContentCell.vue
 ├── molecules
 │   ├── Article
 │   │   ├── MainArticle.vue
 │   │   └── SubArticle.vue
 │   └── Table
 │       ├── TableHeader.vue
 │       └── TableContent.vue
 ├── organisms
 │   ├── Header
 │   │   ├── MainHeader.vue
 │   │   └── SubHeader.vue
 │   └── Table
 │       ├── MainTable.vue
 │       └── SubTable.vue
 layouts/
 ├── error.vue
 ├── default.vue
 ├── top.vue
 pages/
 ├── search
 │   └── index.vue # 企画検索ページ。`/search`でアクセスできます。
 ├── events
 │   └── _id.vue # 企画詳細ページ。`/events/10`などでアクセス可能。`_`を使えばurlに含まれる情報をページに渡せます。
 ├── index.vue # トップページはこれです。
```

### :dizzy:コンポーネントとJavaScriptの関係性
冒頭でコンポーネント指向の説明をした時に、`const Footer = () => {`みたいなコードを見たと思います。

これはJavaScriptのコードです。実はコンポーネントを作るにはJavaScirptが必要です。難しく思えるかもしれませんが、コンポーネントを使うのに必要なJavaScirptの知識はそれほど難しくはありません。

### :dizzy:ReactとVue
同じコンポーネント指向でもReactとVueは書き方は全く異なります。
### :stars:React
```react.js
# app/components/Footer.js

export const Footer = () => {
  return (
    <footer>
      <div class="footer-inner">
        <h2>早稲田祭2021</h2>
        <ul class="footerNav">
          <li>Page1</li>
          <li>Page2</li>
          <li>Page3</li>
          <li>Page4</li>
        </ul>
      </div>
    </footer>
  );
}
```

### :stars:Vue
VueではほとんどJavaScriptを意識する必要はありません。
```vue.js
# app/components/Footer.js
<template>
  <footer>
      <div class="footer-inner">
        <h2>早稲田祭2021</h2>
        <ul class="footerNav">
          <li>Page1</li>
          <li>Page2</li>
          <li>Page3</li>
          <li>Page4</li>
        </ul>
      </div>
    </footer>
</template>

<style>
footer {
  padding: 16px;
}
</style>
```

## 第二節 チーム開発
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
$ git commit -m "Headerの骨格を作成しました。"
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
今年度のWebサイト作成頑張りましょう！

![gif](https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif?cid=ecf05e47bhbdz7hr6xgdcp5nzgdokl0gbzm3qw4o1g6qsx5p&rid=giphy.gif&ct=g)