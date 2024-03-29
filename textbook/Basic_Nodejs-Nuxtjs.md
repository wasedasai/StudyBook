# Basic Node.js & Nuxt.js
この章では、Node.jsをインストールしながら、Nuxtを概観します。この章の最終ゴールは、早稲田祭のフロントエンドをあなたのブラウザで閲覧できるようにして、コードで遊べるようにすることです。

![chapter4](https://user-images.githubusercontent.com/65198192/132185160-53a1165c-62f2-4c5b-ab05-0ba85fe39dbc.png)

## 第一節 Nuxt（ナクスト）とVue（ビュー）
早稲田祭のサイトのフロントエンドは、Nuxtで作ります。

NuxtとはJavaScriptのライブラリであるVueのフレームワークのことです。ライブラリとフレームワークについて解説します。
- ライブラリを用いることで、特定の文脈で特定の書き方に従えば、ある機能を言語本来の書き方よりも遙かに少ないコーディングで実現できます。
- フレームワークを用いることで、特定のルールをチームに強制し、開発での統一性を保ちます。同時に一定の処理をフレームワーク側で実行することで、私たちの負担を減らします。

代表的なJavaScriptのライブラリを紹介します。
- jQuery：アニメーションにおいて強力なライブラリで、複雑な動作を実現できます。コーディング時に参考になるサイトが豊富です。
- React：コンポーネント指向に基づく最も有力なライブラリの一つです。HTMLとCSSを部品化するコンポーネント指向を導入することで、チーム開発において驚異的なパフォーマンスをしてくれます。一方で高いコーディングスキルが求められるので、習得が簡単ではありません。
- Vue：このライブラリの哲学は、「Reactよりも簡単に使える」です。コンポーネント指向を導入し、チーム開発に素晴らしい活躍をます。同時に、簡単に導入出来て、簡単に使うことができます。

フレームワークはライブラリ次第で決まります。一般的には以下の組み合わせで使います。なおjQueryに代表的なフレームワークはありません。
- React × Next
- Vue × Nuxt

:warning:フレームワークを必ずしも使わなければならない理由はありません。中規模以上のサイトにはフレームワークを利用した方がいいという印象です。

:warning:フレームワークは一つしか使えませんが、ライブラリは複数導入できます。例えばjQueryをReactやVueに導入することもできます。一方でReactとVueを同時に使うことはありえません。違う面で素晴らしい能力を発揮するライブラリを組み合わせて使います。

## 第二節 必要性
NuxtとVueが必要になる理由を知ることで、Webに関する知識をもう少し深めます。

早稲田祭のサイトは、企画詳細ページを含めて300ページ以上にも及びます。HTMLとCSSだけで制作するには人員も時間も足りません。

300ページ以上にも及ぶ早稲田祭のサイトですが、大半を占める企画詳細ページは、一つの型にデータベースから得た掲載情報を流し込むことで表示することができます。

それを実現するためにVueを使います。チーム開発になるのでNuxtを使ってコードやフォルダ管理で統一性を保ちます。これがNuxtとVueが必要になる理由です。

> 企画詳細ページだけにVueを導入する案を考慮しました。
> 残念ながらこの案は採用できません。企画詳細ページをシェアできないという最大の欠点を抱えるからです。

## 第三節 Node.jsとは
Node.jsについては、[Node.jsとはなにか？なぜみんな使っているのか？](https://qiita.com/non_cal/items/a8fee0b7ad96e67713eb)を読んでください。

これを読んでから次の章に進んでください。

## 第四節 Node.jsインストール
MacとWindowsでインストール方法が異なります。いずれの方法でもNode.jsのバージョンを管理するためのツールを使います。

インストールするNode.jsのバージョンは、[Node.jsの公式サイト](https://nodejs.org/en/)でLTSと表示されているバージョンを使うのが良いです。チームで共通のバージョンを使うことに注意してください。

説明時に「パスを通す」という表現があります。これは、インストールしたものをどこからでも使えるようにシステムに登録することです。パスが通ってない場合、「~というコマンドが見つかりません」などのエラーが表示されます。

### :dizzy:MacOS
MacOSでnode.jsをインストールする方法は二つあります。
#### :sparkles:一つ目の方法：NodebrewでNode.jsをインストールする
MacではNode.jsのバージョンを管理するためにHomebrewとnodebrewを使います。

:one: ターミナルに貼り付けてエンター、`PRESS RETURN ~~`が出てきたらエンター押します。Installが始まるので待ちます。
:warning:passwordが聞かれる場合はPCのパスワードを入力してください。※打ち込んだパスワードは表示されない仕様です。
```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

:two: nodebrewをインストールして何らかのバージョンが表示されることを確認します。
```bash
$ brew install nodebrew
$ nodebrew -v
```
`brew install nodebrew`実行時に`zsh: command not found: brew`が表示された場合は[これ](https://stackoverflow.com/questions/36657321/after-installing-homebrew-i-get-zsh-command-not-found-brew)を参考にします

:three: nodebrewのパスを通す準備にします。
- bashを使っている場合
```bash
$ vi ~/.bash_profile
```
- zshを使っている場合
```bash
$ vi ~/.zshrc
```
viが開けたら、`i`キーを押下しviのインサートモード（編集モード）に入ります。以下の文字列をコピペします。
```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```
`ESC`キー押下してノーマルモードに戻ります。次に`:wq`を順に押して保存します。

:four: nodebrewのパスを通します。※zshを使っている場合は`~/.zshrc`になります。
```bash
$ source ~/.bash_profile
$ nodebrew setup
```

:five: バージョンを指定してNode.jsをインストールします。最後のコマンドで指定のバージョンが表示されれば成功です。

:warning:`<Version>`にチーム指定のバージョンを入力してください。
```bash
$ nodebrew install-binary v<Version>
$ nodebrew use v<Version>
$ node -v
```

#### :sparkles:二つ目の方法：NodenvでNode.jsをインストールする
:one: nodenvをインストールします。
```bash
$ git clone git://github.com/nodenv/nodenv.git ~/.nodenv
```

:two: nodenvの動作を高速化するコマンドを打ちます。失敗しても問題ありません。
```bash
$ cd ~/.nodenv && src/configure && make -C src
```

:three: ターミナルのタイプを確認します。Macのターミナルは、`Bash`か`Zsh`を使っているので、どちらを使っているか確認します。
```bash
$ echo $ZSH_VERSION
数字が表示された場合zshを使用しています

$ echo $BASH_VERSION
数字が表示された場合bashを使用しています
```

:four: nodenvにパスを通します。`Zsh`を使っている場合は、`.bash_profile`を`.zshrc`に変更してください。
```bash
$ echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bash_profile
```

:five: nodenvをセットアップします。
```bash
$ ~/.nodenv/bin/nodenv init
```

:six: パスの更新をターミナルに適用するため、一旦ターミナルを閉じて、再度開きます。次に下のコマンドを実行して、バージョンが表示されることを確認してください。表示されない場合はチームに報告！
```bash
$ nodenv -v
```

:seven: nodenvの拡張パッケージであるnode-buildをインストールします。
```bash
$ mkdir -p "$(nodenv root)"/plugins
$ git clone https://github.com/nodenv/node-build.git "$(nodenv root)"/plugins/node-build
```

:eight: Node.jsをインストールし、どの階層でも使えるようにグローバルに設定します。

:warning:`<Version>`にチーム指定のバージョンを入力してください。
```bash
$ nodenv install <Version>
$ nodenv global <Version>
```

### :dizzy:Windows
~~WindowsではNode.jsのバージョンを管理するためにnodistを使います。~~

開発が停止しているNodistではなく、nvmを用いるので、[こちらの記事](https://nodejs.keicode.com/nodejs/how-to-use-nvm-windows.php)をみてnvmをインストールしてください。

:warning:Node.jsはチーム指定のバージョンを入力してください。それ以外は最新バージョンで問題ありません。

:warning:CUIはGit Bashを使ってください。`Windows`キーを押下して、`Git Bash`と入力してエンターすればGit Bashが開かれます・

## 第五節 ブラウザで見よう
:one: ターミナル/Git Bashを開いて、`npm`のバージョンを確認します。表示されることが重要で、チームで完全に同じである必要はないです。
```bash
$ npm -v
```

:two: Yarnをnpmでインストールし、バージョンを確認、初期設定します。
```bash
$ npm install -g yarn
$ yarn -v
```

:three: プロジェクトをインストールした階層に`cd`コマンドを使って移動して、次のコマンドを実行します。（もしくはWindowsであればVSCodeでプロジェクトのフォルダーを開いて、VSCode最上部のバーにある「ターミナル」から「新しいターミナル」をクリックしてください。Git Bashに変更して次のコマンドを実行します。[変更方法](https://www.javadrive.jp/vscode/terminal/index2.html#section2)）

パッケージをたくさんインストールするので時間がかかります。待ちましょう。
```bash
$ yarn install
```

:four: コマンドが打てる状況になったら、次のコマンドを実行します。これもまた時間がかかります。しばらくしたら`http://localhost:3000`をブラウザで開いてください。

:warning:「途中で開発に協力しますか」的な質問がありますが、`n`と答えてエンターしてください。

```
$ yarn dev
```

## お疲れ様！！
プロジェクトのサイトが表示されたら完了です！
これで環境構築も終わりです。次回はチーム開発の基本と流れ、コンポーネント指向を学び、今年度のリポジトリに貢献する準備をします。

![gif](https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif?cid=ecf05e47bhbdz7hr6xgdcp5nzgdokl0gbzm3qw4o1g6qsx5p&rid=giphy.gif&ct=g)

