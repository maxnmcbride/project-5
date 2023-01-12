class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :platform
      t.string :genre
      t.string :theme
      t.string :release_date
      t.string :image_url
      t.boolean :multiplayer
      t.text :game_description
      t.string :developer

      t.timestamps
    end
  end
end
