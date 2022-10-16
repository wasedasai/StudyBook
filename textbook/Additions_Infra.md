# Infra

## SSL証明書取得
```
sudo certbot --nginx -d api.wasedasai.net
```

## SSL証明書の更新
```
systemctl stop nginx
systemctl status nginx
certbot renew
systemctl start nginx
systemctl status nginx
```


## Nginx更新
```
systemctl stop nginx
systemctl status nginx
systemctl start nginx
systemctl status nginx
```

## OS2022-frontの更新
```
cd /var/os2022-frontend
git pull
# パッケージを追加した場合は`yarn install`してから次のステップに向かう
yarn build
pm2 restart frontend
```


## サーバー再起動時にページ表示されない場合
```
cd /var/os2022-frontend
yarn build
pm2 start ecosystem.config.js
pm2 save
# 下記コマンドでonlineがいくつか表示されていればok
pm2 list
```

## 環境構築test-frontend
### [Nodeセットアップ](https://www.server-world.info/query?os=CentOS_Stream_8&p=nodejs&f=10)

### npmとyarn
これはStudyBookの別の章

### Clone
```
cd /var
mkdir test-frontend
cd test-frontend
git clone ~ .
```

## PM2関連
- PM2のモニター `pm2 monit`
- PM2の同期処理 `pm2 save`
- PM2のデーモン `pm2 startup`

