class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :platform, :genre, :themes, :release_date, :image, :multiplayer, :game_summary
end
