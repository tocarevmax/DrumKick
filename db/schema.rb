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

ActiveRecord::Schema.define(version: 20171123182744) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "tm_id", null: false
    t.string "name", null: false
    t.string "image_url", null: false
    t.string "tm_url", null: false
    t.integer "upcoming_events", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_artists_on_name", unique: true
    t.index ["tm_id"], name: "index_artists_on_tm_id", unique: true
  end

  create_table "concerts", force: :cascade do |t|
    t.integer "artist_id", null: false
    t.string "tm_id", null: false
    t.string "tm_attraction_id", null: false
    t.string "name", null: false
    t.string "tm_url", null: false
    t.string "date_time", null: false
    t.string "local_date", null: false
    t.string "local_time", null: false
    t.string "timezone", null: false
    t.string "image_url", null: false
    t.string "locale", null: false
    t.string "venue_name", null: false
    t.string "venue_lat", null: false
    t.string "venue_long", null: false
    t.string "venue_address", null: false
    t.string "price_range", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_concerts_on_artist_id"
    t.index ["name"], name: "index_concerts_on_name"
    t.index ["tm_attraction_id"], name: "index_concerts_on_tm_attraction_id"
    t.index ["tm_id"], name: "index_concerts_on_tm_id", unique: true
    t.index ["venue_lat"], name: "index_concerts_on_venue_lat"
    t.index ["venue_long"], name: "index_concerts_on_venue_long"
    t.index ["venue_name"], name: "index_concerts_on_venue_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
