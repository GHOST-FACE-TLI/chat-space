# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

 ##usersテーブル

 |Column|Type|Options|
 |------|----|-------|
 |id|integer|null: false, unique: true|
 |email|integer|null: false, unique: true|
 |pasword|string|/\A[a-z\d]{8,100}+\z/i,\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$|
 |nickname|string|.{3,}|
 |groups_id|integer|foreign_key: true|
 ### Association
 - belongs_to :groups_users
 ### end

 ##groupsテーブル
 |Column|Type|Options|
 |------|----|-------|
 |id|integer|null: false, unique: true|
 |group_name|text|null: false| 
 |users_id|integer|null: false, foreign_key: true|
 ### Association
 - belongs_to :groups_users

 ##messagesテーブル
 |Column|Type|Options|
 |------|----|-------|
 |id|integer|null: false, unique: true|
 |body|text|null: false|
 |image|string|null: false|
 |group_id|integer|null: false, foreign_key: true|
 |user_id|integer|null: false, foreign_key: true|
 ### Association
 - belongs_to :group
 - belongs_to :user

 ##groups_usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |id|integer|null: false|
 |users_id|integer|null: false|
 |groups_id|integer|null:false|
 ### Association
 - belongs_to :group
 - belongs_to :user