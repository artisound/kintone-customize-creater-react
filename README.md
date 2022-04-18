# React.js kintone Customize Creator for TC

kintoneのカスタマイズを簡単に開発、デプロイできるReactプロジェクトです。
このプロジェクトには、kintoneが提供する以下のライブラリが含まれます。
|ライブラリ|用途|URL|
|-|-|-|
|@kintone/rest-api-client|kintone REST API を JavaScriptで扱う際に必要な処理をまとめたライブラリ<br>(v1系はReactに対応していないため、v0.9.0)|https://kintone-labs.github.io/kintone-ui-component/latest/
|@kintone/kintone-ui-component|kintoneライクなUIを簡単に作成できるライブラリ|https://github.com/kintone/js-sdk/tree/master/packages/rest-api-client

***
## セットアップ

### 1. ライブラリインストール
```bash
# ライブラリをインストール
$ yarn install

# customize-uploader グローバルインストール
$ npm install -g @kintone/customize-uploader
```

### 2. 初期設定

#### manifestファイルを作成
```bash
$ kintone-customize-uploader init

? アプリIDを入力してください: <アプリID>
? カスタマイズの適用範囲を選択してください: ALL
dest/customize-manifest.json を生成しました
```

####  manifestファイルを編集
```json
// ./dest/customize-manifest.json
{
    "app": "<init で設定したアプリID>",
    "scope": "ALL",
    "desktop": {
        "js": [
            "dist/main.js"
                :
                :
        ],
        "css": []
    },
    "mobile": {
        "js": [],
        "css": []
    }
}

```

#### プロジェクト直下に`.env`ファイルを作成
```env
// ./.env
KINTONE_SUBDOMAIN=<kintone環境のサブドメイン>
KINTONE_USERID=<ログインID>
KINTONE_PASSWORD=<パスワード>
```

***
## kintoneへデプロイ
```
$ yarn build
$ yarn deploy
```