class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :platform, :genre, :theme, :release_date, :image, :multiplayer, :game_description, :developer
end