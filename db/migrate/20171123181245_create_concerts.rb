class CreateConcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :concerts do |t|
      t.integer :artist_id, null: false
      t.string :tm_id, null:false
      t.string :tm_attraction_id, null:false
      t.string :name, null:false
      t.string :tm_url, null:false
      t.datetime :date_time, null:false
      t.string :local_date, null:false
      t.string :local_time, null:false
      t.string :timezone, null:false
      t.string :image_url, null:false
      t.string :locale, null:false
      t.string :venue_name, null:false
      t.float :venue_lat, null:false
      t.float :venue_long, null:false
      t.string :venue_address, null:false
      t.string :price_range, null:false
      t.timestamps
    end

    add_index :concerts, :artist_id
    add_index :concerts, :tm_id
    add_index :concerts, :tm_attraction_id
    add_index :concerts, :name
    add_index :concerts, :venue_name
    add_index :concerts, :venue_lat
    add_index :concerts, :venue_long
  end
end
