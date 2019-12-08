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

* ...

 ## users table
 |Column|Type|Options|
 |------|----|-------|
 |id|integer|null: false, unique: true|
 |email|integer|null: false, unique: true|
 |pasword|string|null,false|
 |nickname|string|index: true, null: false, unique: true|
 |groups_id|integer|foreign_key: true|

 ### Association
 - has_many :groups_users
 - has_many :messages


 ## groups table
 |Column|Type|Options|
 |------|----|-------|
 |id|integer|null: false, unique: true|
 |group_name|string|null: false| 
 |users_id|integer|null: false, foreign_key: true|
 |member_id|integer|null: false, foreign_key: true|
 ### Association
 - has_many :groups_users
 - has_many :messages

 ## messages table
 |Column|Type|Options|
 |------|----|-------|
 |id|integer|null: false, unique: true|
 |body|text|null: false|
 |image|string||
 |group_id|integer|null: false, foreign_key: true|
 |user_id|integer|null: false, foreign_key: true|
 ### Association
 - belongs_to :group
 - belongs_to :user

 ## groups_users table
 |Column|Type|Options|
 |------|----|-------|
 |id|integer|null: false, unique: true|
 |users_id|integer|null: false, foreign_key: true|
 |groups_id|integer|null: false, foreign_key: true|
 ### Association
 - belongs_to :group
 - belongs_to :user