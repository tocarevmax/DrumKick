class CreateTrackings < ActiveRecord::Migration[5.1]
  def change
    create_table :trackings do |t|
      t.integer :user_id, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end

    add_index :trackings, :user_id
    add_index :trackings, :artist_id
  end
end
