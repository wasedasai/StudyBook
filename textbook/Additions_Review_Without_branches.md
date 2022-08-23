```
# リポジトリのクローン
git clone ...

# PRのtoを作成
git checkout --orphan initial_branch_for_review

# 空の状態のブランチを作りたいのでいったん消す
git rm --cached . -r

# PRのtoをcommit/push
git commit --allow-empty -m 'Initial Commit'
git push origin initial_branch_for_review

# PRのfromを作成
git checkout -b branch_for_review

# ファイルをステージング
git add .

# PRのfromをcommit/push
git commit -m 'commit'
git push origin branch_for_review
```
