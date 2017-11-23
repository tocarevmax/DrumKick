class CreateConcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :concerts do |t|
      t.integer :artist_id, null: false
      t.string :tm_id, null:false
      t.string :tm_attraction_id, null:false
      t.string :name, null:false
      t.string :tm_url, null:false
      t.string :date_time, null:false
      t.string :local_date, null:false
      t.string :local_time, null:false
      t.string :timezone, null:false
      t.string :image_url, null:false
      t.string :locale, null:false
      t.string :venue_name, null:false
      t.string :venue_lat, null:false
      t.string :venue_long, null:false
      t.string :venue_address, null:false
      t.string :price_range, null:false
      t.timestamps
    end
  end
end
