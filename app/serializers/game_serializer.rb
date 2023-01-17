class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :platform, :genre, :theme, :release_date, :image_url, :multiplayer, :game_description, :developer
  # has_many :users
end
