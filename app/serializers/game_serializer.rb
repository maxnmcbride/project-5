class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :platform, :genre, :theme, :release_date, :image_url, :multiplayer, :game_description, :developer
  
  def multiplayer
    self.object.multiplayer ? "Fun with friends" : "All by yourself"
  end

end
