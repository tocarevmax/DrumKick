class AddIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :concerts, :artist_id
    add_index :concerts, :tm_id, unique: true
    add_index :concerts, :tm_attraction_id
    add_index :concerts, :name
    add_index :concerts, :venue_name
    add_index :concerts, :venue_lat
    add_index :concerts, :venue_long

  end
end
