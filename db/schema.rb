# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170124105855) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "account_informations", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "address1"
    t.string   "address2"
    t.integer  "zipcode"
    t.date     "dob"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_account_informations_on_user_id", using: :btree
  end

  create_table "baskets", force: :cascade do |t|
    t.string   "name"
    t.boolean  "custom"
    t.decimal  "percentage"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "profile"
    t.string   "profile_file_name"
    t.string   "profile_content_type"
    t.integer  "profile_file_size"
    t.datetime "profile_updated_at"
  end

  create_table "charties", force: :cascade do |t|
    t.string   "name"
    t.string   "pic_file_name"
    t.string   "pic_content_type"
    t.integer  "pic_file_size"
    t.datetime "pic_updated_at"
    t.boolean  "custom"
    t.decimal  "percentage"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "competition_teams", force: :cascade do |t|
    t.integer  "competition_id"
    t.integer  "team_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["competition_id"], name: "index_competition_teams_on_competition_id", using: :btree
    t.index ["team_id"], name: "index_competition_teams_on_team_id", using: :btree
  end

  create_table "competitions", force: :cascade do |t|
    t.string   "name"
    t.date     "end_date"
    t.string   "ranking_type"
    t.boolean  "no_end_date"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "donations", force: :cascade do |t|
    t.string   "firstname_on_card"
    t.string   "lastname_on_card"
    t.bigint   "card_number"
    t.date     "expiration_date"
    t.integer  "cvv"
    t.text     "billing_address"
    t.float    "amount"
    t.integer  "user_id"
    t.integer  "team_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["team_id"], name: "index_donations_on_team_id", using: :btree
    t.index ["user_id"], name: "index_donations_on_user_id", using: :btree
  end

  create_table "pictures", force: :cascade do |t|
    t.string   "avatar"
    t.string   "imageable_type"
    t.integer  "imageable_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["imageable_type", "imageable_id"], name: "index_pictures_on_imageable_type_and_imageable_id", using: :btree
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "user_baskets", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "basket_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["basket_id"], name: "index_user_baskets_on_basket_id", using: :btree
    t.index ["user_id"], name: "index_user_baskets_on_user_id", using: :btree
  end

  create_table "user_charties", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "chartie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chartie_id"], name: "index_user_charties_on_chartie_id", using: :btree
    t.index ["user_id"], name: "index_user_charties_on_user_id", using: :btree
  end

  create_table "user_competitions", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "competition_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["competition_id"], name: "index_user_competitions_on_competition_id", using: :btree
    t.index ["user_id"], name: "index_user_competitions_on_user_id", using: :btree
  end

  create_table "user_teams", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_user_teams_on_team_id", using: :btree
    t.index ["user_id"], name: "index_user_teams_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.date     "date"
    t.string   "password"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "auth_token"
    t.json     "team_items",                                       array: true
    t.json     "basket_items",                                     array: true
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
