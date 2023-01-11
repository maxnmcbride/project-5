class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :platform
      t.string :genre
      t.string :themes
      t.string :release_date
      t.string :image
      t.boolean :multiplayer
      t.text :game_summary

      t.timestamps
    end
  end
end
