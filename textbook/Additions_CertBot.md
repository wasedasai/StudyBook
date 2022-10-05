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
