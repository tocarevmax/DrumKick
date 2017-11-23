class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :tm_id, null: false
      t.string :name, null: false
      t.string :image_url, null: false
      t.string :tm_url, null: false
      t.integer :upcoming_events, null: false
      t.timestamps
    end

    add_index :artists, :tm_id, unique: true
    add_index :artists, :name, unique: true
  end
end
