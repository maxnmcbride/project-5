class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :platform, :genre, :theme, :release_date, :image_url, :multiplayer, :game_description, :developer
  
  def multiplayer
    self.object.multiplayer ? "Yes, you can party with friends!" : "No, this is a solo journey!"
  end

end
