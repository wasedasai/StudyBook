# プログラミング基礎

この章では、JavaScriptを用いて、順次・分岐・繰り返しというプログラムの制御構造を学習し、最終的にはJavaScriptでHTMLを生成する手法を学びます。

JavaScriptは、HTMLやCSSと同様にブラウザで動作するプログラミング言語で、WEBサイトにCSSでは表現できないようなアニメーションを実装できます。

たとえば画像が繰り返し横にスライドするカルーセルと呼ばれるアニメーションは、JavaScriptで表現されています。

一方で、太古にはブラウザ上でのみ動作する言語でしたが、昨今はNode.jsという環境を構築することで、パソコン上で動作することもできます。パソコン上で動作することで、PCの機能を使用できます。

例えばPCのフォルダから特定のファイルを検索して、書き換えることも可能です。書き換えだけでなく、新たなファイルを作成することもできます。

この章では、主にブラウザで動作するJavaScriptを学びます。

### HelloWorldの出力

まずはブラウザの画面に「Hello World!」を表示してみましょう！

VSCodeでTask1.jsを作成して以下を書き込んでください。

```jsx
console.log("Hello World");
```

書き込み後に、このHelloWorld.jsをブラウザにドラッグ＆ドロップしてみましょう。恐らく何も表示されないはずです。

このプログラムの意味はブラウザのコンソールに”Hello World”を出力するという命令なので、ブラウザでコンソールを表示してみてください。"Hello World"と出力されているはずです。

### 順次・分岐・繰り返しを用いてHelloWorldを出力する

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
    

### 関数を利用する

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

```jsx
# 関数を利用する
const getPriceWithTax = (price) => {
	return price * 108 / 100;
}
console.log(getPriceWithTax(500))
console.log(getPriceWithTax(100))
console.log(getPriceWithTax(4000))

# 関数を利用しない
console.log(500 * 108 / 100)
console.log(100 * 108 / 100)
console.log(4000 * 108 / 100)
```

しかし関数を利用しない場合は、変更に弱くなります。例えば消費税が15%や30%に引き上げられた場合は、関数を利用しない例では全行を変更する必要があります。一方で関数を利用すれば、変更が必要になるのは1行のみです。
