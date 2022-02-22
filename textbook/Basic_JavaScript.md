# プログラミング基礎
この章では、JavaScriptを用いて、順次・分岐・繰り返しというプログラムの制御構造を学習し、最終的にはJavaScriptでHTMLを生成する手法を学びます。

JavaScriptは、HTMLやCSSと同様にブラウザで動作するプログラミング言語で、WEBサイトにCSSでは表現できないようなアニメーションを実装できます。

たとえば画像が繰り返し横にスライドするカルーセルと呼ばれるアニメーションは、JavaScriptで表現されています。

一方で、太古にはブラウザ上でのみ動作する言語でしたが、昨今はNode.jsという環境を構築することで、パソコン上で動作することもできます。パソコン上で動作することで、PCの機能を使用できます。

例えばPCのフォルダから特定のファイルを検索して、書き換えることも可能です。書き換えだけでなく、新たなファイルを作成することもできます。

この章では、主にブラウザで動作するJavaScriptを学びます。

## HelloWorldの出力

まずはブラウザの画面に「Hello World!」を表示してみましょう！

VSCodeでTask1.jsを作成して以下を書き込んでください。

```jsx
console.log("Hello World");
```

書き込み後に、このHelloWorld.jsをブラウザにドラッグ＆ドロップしてみましょう。恐らく何も表示されないはずです。

このプログラムの意味はブラウザのコンソールに”Hello World”を出力するという命令なので、ブラウザでコンソールを表示してみてください。"Hello World"と出力されているはずです。

## 順次・分岐・繰り返しを用いてHelloWorldを出力する

1. 順次のサンプル

```jsx
console.log("こんにちは");
console.log("こんにちは");
console.log("こんにちは");
```

1. 分岐のサンプル

```jsx
# SCOREには"GOOD"か"BAD"かそれ以外の文字を代入してみましょう。
const SCORE = "GOOD"
if (SCORE === "GOOD") {
	console.log("良い点数です");
} else if (SCORE === "BAD") {
	console.log("悪い点数です");
} else {
	console.log("まぁまぁな点数です");
}
```

1. 繰り返しのサンプル

```jsx
const NUMBER = 5;
for (let i = 0; i < NUMBER; i++) {
	console.log("こんにちは");
}
```

1. チャレンジ

上記の制御構造を組み合わせて、以下の仕様に沿ったプログラムをTask2.jsに記述してください。

- LANGUAGEという定数を用意します。
- LANGUAGEが”Japanese”ならコンソールに”こんにちは”を出力します。
- LANGUAGEが”English”ならコンソールに”HelloWorld”を10回出力します。
- それ以外の場合は、”無効な言語です”とアラートを出します。
- 回答例
    
    ```jsx
    const LANGUAGE = "";
    
    if (LANGUAGE === "Japanese") {
    	console.log("こんにちは");
    } else if (LANGUAGE === "English") {
    	for (let i = 0; i < 10; i++)
    	console.log("HelloWorld");
    } else {
    	window.alart("無効な言語です");
    }
    ```
    

## 関数を利用する

プログラミングにおける関数とは、何かを入力したら、それを用いて加工された何かを返すものです。入力する値を引数、返ってくる値を返り値と呼称します。

例えば、消費税を含めた価格を計算する関数は下の通りです。

```jsx
const getPriceWithTax = (price) => {
	return price * 108 / 100;
}
```

このとき`price`が引数、`price * 108 / 100` が返り値となります。この関数を実行するには、下記のようにTask3.jsに記述します。これまでと同じようにブラウザのコンソールに表示してみましょう。

```jsx
const getPriceWithTax = (price) => {
	return price * 108 / 100;
}
console.log(getPriceWithTax(1000));

```

引数は複数設定可能です。例えばN円の商品をM個購入した場合の合計金額を計算する関数では`price`と`quantity`という二つの引数を定義します。

```jsx
const getTotal = (price, quantity) => {
	return price * quantity;
}
console.log(getTotal(100, 20));
```

当然のことですが関数として共通化しなくても同様の処理を実行することができます。

```js
# 関数を利用する例
const getPriceWithTax = (price) => {
	return price * 108 / 100;
}
console.log(getPriceWithTax(500))
console.log(getPriceWithTax(100))
console.log(getPriceWithTax(4000))

# 関数を利用しない例
console.log(500 * 108 / 100)
console.log(100 * 108 / 100)
console.log(4000 * 108 / 100)
```

もし関数を利用しなかった場合は、変更に弱くなります。例えば消費税が15%や30%に引き上げられた場合は、関数を利用しない例では全行を変更する必要があります。一方で関数を利用すれば、変更が必要になるのは1行のみです。

## 配列
JavaScriptには配列があります。配列とは同じ型のデータを格納できるものです。配列は下記のように表すことができます。
```js
const arrayNum = [100, 300, 240, 360];
```
このarray配列には、100, 300, 240, 360という数値が格納されています。

それぞれの配列の要素を表示させたい場合は、以下のようにします。
```js
console.log(arrayNum[0]) // 100が表示されます
console.log(arrayNum[1]) // 300が表示されます
console.log(arrayNum[2]) // 240が表示されます
console.log(arrayNum[3]) // 360が表示されます
```
この配列をすべて表示させたい場合は、以下のようにします。
```js
// 表示方法１
arrayNum.forEach((number) => {
	console.log(number);
});

// 表示方法２
for (let i = 0; i < arrayNum.length; i ++) {
	console.log(arrayNum[i]);
}
```
配列にはオブジェクトというものも格納できます。簡単なオブジェクトの例です。
```js
// サンプル１
const person1 = {
	name: "akino",
	age: 20,
	height: 175, 
}

// サンプル２
const book1 = {
	title: "hacking Lab",
	language: "jp",
	type: "book",
}
```
オブジェクトが格納された配列のサンプルです。
```js
const EVENTS_LIST = [
	{name: "fes1", time: "12:00~12:15", place: "campus1"},
	{name: "fes2", time: "12:00~12:15", place: "campus4"},
	{name: "fes3", time: "13:00~14:45", place: "campus2"},
	{name: "fes4", time: "10:00~12:00", place: "campus3"},
	{name: "fes5", time: "11:00~12:00", place: "campus1"},
];
```

### チャレンジ
1. EVENTS_LIST配列からplaceが`campus4`であるeventが格納された配列を作成してください。
2. 「fes1は12:00~12:15にcampus1で開催されます」のように、すべてのイベントをログで表示できるようにしてください。

## JavaScriptでHTMLを操作
### 1 基本
index.htmlを作成し、index.htmlを下記のようにします。deferをつけることでHTML表示後にcomponents.jsを実行することができます。
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page1</title>
  <script src="./components.js" defer></script>
</head>
<body>
</body>
</html>
```
index2.htmlを追加してください。（headのtitleだけindex.htmlと異なります。）
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page2</title>
  <script src="./components.js" defer></script>
</head>
<body>
</body>
</html>
```
さらにcomponents.jsを作成して、このようにします。
```js
// index.htmlのbody要素を取得します。
const body = document.body;

// Header関数を定義します。"Header()"で実行できます。
const Header = () => {
  return `<header>Header</header>`
}

// body要素にafterbegin（直後に）、"<header>Header</header>"を追加します。
body.insertAdjacentHTML('afterbegin', Header());
```
これでindex.htmlとindex2.htmlをリロードすれば、画面にHeaderという文字が表示されます。これがJavaScriptでHTMLを操作することであり、Header関数はコンポーネント（部品）となります。

従来はindex.htmlもindex2.htmlもbody要素内は、下のように記述しなければなりませんでしたが、JavaScriptでHTMLを操作することで、面倒な記述を減らすことができます。
```html
<body>
	<header>Header</header>
</body>
```
ヘッダーに”Header”と表示するのではなく、”祭”と表示してみてください。Header関数を書き換えればokです。わざわざindex.htmlとindex2.htmlを変更する必要はありません。これがコンポーネントが変化に強い理由です。
### 2 スタイル
HEADER_STYLESを定義して、テキストを中心揃えに大きく太くしてみました。
```jsx
const body = document.body;

const Header = () => {
  const HEADER_STYLES = "text-align:center;font-size:20px;font-weight:900;"
  return `<header style=${HEADER_STYLES}>祭</header>`
}

body.insertAdjacentHTML('afterbegin', Header());
```

「`」で囲まれた文字列の中で、変数・定数を展開したい場合は、「${}」を用いましょう。

### 3 動的なテキスト
ヘッダーはどこでも同じように表示されるコンポーネントですが、ボタンは違います。ある時はボタンは「キャンセル」と、またある時は「送信」と表示されます。

そこで、下記にすることでボタンの文字を可変にします。
```js
const body = document.body;

const Button = (children) => {
  return `<button>${children}</button>`
}

body.insertAdjacentHTML('afterbegin', Button("キャンセル"));
body.insertAdjacentHTML('afterbegin', Button("送信"));
```
ここではchildrenという引数にキャンセルと送信という文字列が渡され、それが展開されています。このように文字を可変にします。

### 4 動的なスタイル
引数を用いることで、スタイルを動的に変更できます。ボタンの背景色を動的にしてみます。
```js
const body = document.body;

const Button = (children, backgroundColor) => {
  const BUTTON_STYLES = `background-color:${backgroundColor};`
  return `<button style=${BUTTON_STYLES}>${children}</button>`
}

body.insertAdjacentHTML('beforeend', Button("キャンセル", "white"));
body.insertAdjacentHTML('beforeend', Button("送信", "green"));
```
キャンセルの時は背景を白に、送信の時は背景を緑色に表示するようにしてみました。childrenやbackgroundColorという引数は、コンポーネントではProps（プロップス）と呼ばれます。

ところで背景が緑色だと文字が見づらいので、特定の色の時はテキストを白色にしてみましょう。
```js
const body = document.body;

const Button = (children, backgroundColor) => {
	// BUTTON_STYLESはこの後変更するのでletで変数として定義する
  let BUTTON_STYLES = `background-color:${backgroundColor};`

	// backgroundColorが配列の要素に含まれるか
  if (["black", "green", "red"].includes(backgroundColor)) {
	// 含まれるときはテキストを白色にする
    BUTTON_STYLES += "color:white;"
  }

  return `<button style=${BUTTON_STYLES}>${children}</button>`
}

body.insertAdjacentHTML('beforeend', Button("キャンセル", "white"));
body.insertAdjacentHTML('beforeend', Button("送信", "green"));
body.insertAdjacentHTML('beforeend', Button("中止", "red"));
```
せっかくなのでHeaderコンポーネントにお問い合わせボタンを追加してみましょう
```js
const body = document.body;

const Header = () => {
  const HEADER_STYLES = "text-align:center;font-size:20px;font-weight:900;"
  return `<header style=${HEADER_STYLES}>祭${Button("お問い合わせ")}</header>`
}

const Button = (children, backgroundColor) => {
  let BUTTON_STYLES = `background-color:${backgroundColor};`

  if (["black", "green", "red"].includes(backgroundColor)) {
    BUTTON_STYLES += "color:white;"
  }

  return `<button style=${BUTTON_STYLES}>${children}</button>`
}

body.insertAdjacentHTML('beforeend', Header());
```

### 5 ページを作成する
ここまででコンポーネントの基本を学習してきましたが、これではindex.htmlとindex2.htmlで表示される内容が同じです。コンポーネントを利用しながら、ページごとに表示される内容を変えてみましょう。

まずはcomponents.jsを下記のようにします。新たにParagraphというコンポーネントを追加しました。
```js
const body = document.body;

const Header = () => {
  return `<header style="text-align:center;font-size:20px;font-weight:900;">祭</header>`
}

const Paragraph = (children) => {
  return `<p style="font-size:16px;text-align:center">${children}</p>`
}
```
次にindex.htmlを修正します。
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page1</title>
  <script src="./components.js" defer></script>
  <script src="./index1.js" defer></script>
</head>
<body>
</body>
</html>
```
index2.htmlも修正します。
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page1</title>
  <script src="./components.js" defer></script>
  <script src="./index2.js" defer></script>
</head>
<body>
</body>
</html>
```
index1.jsを作成します。
```js
const content = Header() + Paragraph("これはページ1です")

body.insertAdjacentHTML('beforeend', content);
```
最後にindex2.jsを作成します。
```js
const content = Header() + Paragraph("これはページ2です")

body.insertAdjacentHTML('beforeend', content);
```

このようにすることでコンポーネントを用いてページを作成することができます。

ところでHeaderコンポーネントはページ1でもページ2でも使ってます。layout.jsというのを作成して、そこに下記を追加した上で、index.htmlとindex2.htmlのcomponents.jsの読み込み直後にlayout.jsを読み込むことで共通化もできますね。

```js
body.insertAdjacentHTML('beforeend', Header());
```

## お疲れ様！！
ここではJavaScriptでプログラミングの基本を学びました。Nuxtなどを導入することで、もっと簡単にコンポーネントを記述できるようになります。実際の書き方はまた別の機会に学びましょう！

![gif](https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif?cid=ecf05e47bhbdz7hr6xgdcp5nzgdokl0gbzm3qw4o1g6qsx5p&rid=giphy.gif&ct=g)
