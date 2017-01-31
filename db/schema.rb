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

ActiveRecord::Schema.define(version: 20170131180446) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string   "name",                 null: false
    t.float    "price",                null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "symbol",               null: false
    t.float    "price_percent_change", null: false
  end

  create_table "stocks", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "company_id", null: false
    t.float    "shares",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_stocks_on_company_id", using: :btree
    t.index ["user_id"], name: "index_stocks_on_user_id", using: :btree
  end

  create_table "transactions", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "company_id",  null: false
    t.float    "price",       null: false
    t.float    "stock_count", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["company_id"], name: "index_transactions_on_company_id", using: :btree
    t.index ["user_id"], name: "index_transactions_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "fb_id",                              null: false
    t.string   "full_name"
    t.text     "fb_access_token"
    t.string   "session_token"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.float    "money",           default: 100000.0
    t.index ["fb_id"], name: "index_users_on_fb_id", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
