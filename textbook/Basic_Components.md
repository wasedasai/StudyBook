# Components
この章では、コンポーネント指向について学びます。この章の最終ゴールは、あなたが担当するコンポーネントを作成できるようになることです。

![chapter5](https://user-images.githubusercontent.com/65198192/132814224-2319bebf-9103-4233-a55c-29cfa545cbcb.png)

## 第一節 コンポーネント指向
### :dizzy:コンポーネント指向とは
まずはコンポーネント指向について学びます。コンポーネントとは部品のことです。

例えばフッターはサイトの大半のページにおいて共通です。そこでフッターを部品としてあらかじめ定義しておきます。
```javaScript
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
`Footer`コンポーネントを`import`して使います！
```javaScript
# app/index.js

from "./components/Footer" import Footer

const app = () => {
  return (
    <header>
      <div class="footer-inner">
        <h2>早稲田祭2021</h2>
        <ul class="footerNav">
          <li>Page1</li>
          <li>Page2</li>
          <li>Page3</li>
          <li>Page4</li>
        </ul>
      </div>
    </header>
    
    <main>Hello World!!</main>
    
    <Footer />
  );
}
```
`<header>~</header>`と`<Footer />`を見比べてください。コンポーネントならとっても簡単に使いまわせると思いませんか？

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

## お疲れ様！！
今年度のWebサイト作成頑張りましょう！

![gif](https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif?cid=ecf05e47bhbdz7hr6xgdcp5nzgdokl0gbzm3qw4o1g6qsx5p&rid=giphy.gif&ct=g)
